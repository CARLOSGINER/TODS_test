import {createStore,combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from "redux-saga";
import qtyCounterReducer from './ducks/quantityCounter';
import dataReducer from './ducks/data';
import { watcherSaga } from './sagas/rootSaga';


const reducer = combineReducers({
    counter: qtyCounterReducer,
    dataReducer:dataReducer
})

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;