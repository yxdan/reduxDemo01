import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './actionTypes'
const defaultStore = {
    inputValue: 'hello',
    list: []
}
export default (store = defaultStore, action) => {
    if (action.type === CHANGE_INPUT) {
        const newState =  JSON.parse(JSON.stringify(store))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_ITEM) {
        const newState =  JSON.parse(JSON.stringify(store))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELETE_ITEM) {
        const newState =  JSON.parse(JSON.stringify(store))
        newState.list.splice(action.index, 1)
        return newState
    }
    return store
}