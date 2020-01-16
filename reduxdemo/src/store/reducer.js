import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionTypes'

const defaultStore = {
    inputValue: '请输入内容',
    listData: []
}
export default (store = defaultStore, action)=>{
    // Reducer 只能接受state 不能修改state 
    if (action.type=== CHANGE_INPUT) {
        const newState = JSON.parse(JSON.stringify(store))
        newState.inputValue = action.value
        return newState
    }
    if (action.type=== ADD_ITEM) {
        const newState = JSON.parse(JSON.stringify(store))
        newState.listData.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type=== DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(store))
        newState.listData.splice(action.index, 1)
        return newState
    }
    if (action.type=== GET_LIST) {
        const newState = JSON.parse(JSON.stringify(store))
        newState.listData = action.data.data.data.list
        return newState
    }
    return store
}
