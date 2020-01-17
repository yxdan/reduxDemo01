import {takeEvery, put} from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import {getListAction } from './actionCreators'
import axios from 'axios'
// generator
function* mySaga() {
    yield takeEvery(GET_MY_LIST, getList)
}
function* getList() {
    const res = yield  axios.get('https://easy-mock.com/mock/5e1fcf1d8022f467b42c7e31/example/list')
    yield put(getListAction(res))
}
export default mySaga