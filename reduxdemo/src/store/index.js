import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import MySaga from './sagas'
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(
        reducer,
        enhancers
    )
sagaMiddleware.run(MySaga)
export default store