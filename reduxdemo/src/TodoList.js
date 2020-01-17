import React, { Component } from 'react';
import store from './store'
import TodoListUI from './TodoListUI'
import {getTodoList, changeInputAction,addItemAction , deleteItemAction} from './store/actionCreators'

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
        const Action  = getTodoList()
        store.dispatch(Action)
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