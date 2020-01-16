import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
import store from './store'
import {changeInputAction,addItemAction , deleteItemAction} from './store/actionCreators'

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
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div style={{marginBottom: '10px'}}>
                    <Input 
                      placeholder={this.state.inputValue} 
                      style={{width: '200px', marginRight: '10px'}}
                      onChange={this.changeInputValue}
                      value={this.state.inputValue}
                      />
                    <Button 
                      type='primary'
                      onClick={this.addItem}
                      >增加</Button>
                </div>
                <List 
                  bordered 
                  dataSource={this.state.listData}
                  renderItem={(item, index)=>(
                      <List.Item 
                      onClick={this.deleteItem.bind(this, index)}>
                          {item}
                      </List.Item>
                  )}
                />
            </div>
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