import React from 'react';
import store from './store'
import {connect} from 'react-redux'
import {changeInput, addItem, deleteItem} from './store/actionCreators'
const TodoList = (props)=> {
        let {inputValue, changeInput, addItem, list, deleteItem} = props
        return ( 
            <div>
                <input 
                  value={inputValue}
                  onChange={changeInput}                
                />
                <button onClick={addItem}>提交</button>
                <ul>
                    {
                        list.map((item, index)=> {
                            return (
                                <li 
                                  key={index}
                                  onClick={() => {deleteItem(index)}}
                                  >
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
         );
}
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list,
    }
}

const dispatchToProps = (state) => {
    return {
        changeInput (e) {
            const action = changeInput(e.target.value)
            store.dispatch(action)
        },
        addItem () {
            const action = addItem()
            store.dispatch(action)
        },
        deleteItem (index) {
            const action = deleteItem(index)
            store.dispatch(action)
        }
    }
}
export default connect(stateToProps, dispatchToProps)(TodoList);