import {takeLatest} from 'redux-saga/effects';
import { handleGetData } from './handlers/productData';
import {GET_DATA} from '../ducks/data';

export function* watcherSaga() {
    console.log('ok from watcher Saga...')
     yield takeLatest(GET_DATA,handleGetData)
}