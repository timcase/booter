import { takeLatest} from 'redux-saga/effects'
import { getTodos, createTodo } from './todos';
import * as actionTypes from '../constants/action_types';

export function* watchTodosSendGet() {
  yield takeLatest(actionTypes.TODOS_SEND_GET, getTodos)
}

export function* watchTodoSendCreate() {
  yield takeLatest(actionTypes.TODO_SEND_CREATE, createTodo)
}
