import React from 'react'
import {Input, Button, List} from 'antd'
import 'antd/dist/antd.css'
const TodoListUI = (props) =>{
    return (
            <div style={{margin:'10px'}}>
            <div style={{marginBottom: '10px'}}>
                <Input 
                  placeholder={props.inputValue} 
                  style={{width: '200px', marginRight: '10px'}}
                  onChange={props.changeInputValue}
                  value={props.inputValue} 
                  />
                <Button 
                  type='primary'
                  onClick={props.addItem}
                  >增加</Button>
            </div>
            <List 
              bordered 
              dataSource={props.listData}
              renderItem={(item, index)=>(
                  <List.Item 
                  onClick={()=>{props.deleteItem(index)}}>
                      {item}
                  </List.Item>
              )}
            />
        </div>
    )
}
export default TodoListUI;