import React, { Component } from 'react';
import store from './store'
import TodoListUI from './TodoListUI'
import {changeInputAction,addItemAction , deleteItemAction, getListAction} from './store/actionCreators'
import axios from 'axios'

class TodoList extends Component {
    constructor (props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.addItem = this.addItem.bind(this)
        // redux订阅
        store.subscribe(this.storeChange)
    }
    componentDidMount () {
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=> {
            const action = getListAction(res)
            store.dispatch(action)
        })
    }
    render() { 
        return ( 
            <TodoListUI 
                inputValue={this.state.inputValue}
                listData={this.state.listData}
                changeInputValue={this.changeInputValue}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
            />
         );
    }
    changeInputValue (e) {
        // console.log(e.target.value)
        const Action = changeInputAction(e.target.value)
        store.dispatch(Action)
    }
    storeChange () {
        // console.log(store.getState())
        this.setState(store.getState())
    }
    addItem () {
        const Action = addItemAction()
        store.dispatch(Action)
    }
    
    deleteItem (index) {
        const Action = deleteItemAction(index)
        store.dispatch(Action)
    }

}
 
export default TodoList;