import { takeLatest} from 'redux-saga/effects'
import { getTodos, createTodo, updateTodo, deleteTodo} from './todos';
import * as actionTypes from '../constants/action_types';

export function* watchTodosSendGet() {
  yield takeLatest(actionTypes.TODOS_SEND_GET, getTodos)
}

export function* watchTodoSendCreate() {
  yield takeLatest(actionTypes.TODO_SEND_CREATE, createTodo)
}

export function* watchTodoSendUpdate() {
  yield takeLatest(actionTypes.TODO_SEND_UPDATE, updateTodo)
}

export function* watchTodoSendDelete() {
  yield takeLatest(actionTypes.TODO_SEND_DELETE, deleteTodo)
}
