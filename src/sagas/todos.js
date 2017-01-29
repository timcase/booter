import { call, put, select } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../utils/api'
import { selectTodos } from './selectors';
import last from 'lodash/last';

export function* getTodos(action) {
  try {
    const todos = yield call(api.get, 'todos')
    yield put(actions.sendGetIsSuccessTodos(todos))
  } catch (error) {
    yield put(actions.sendGetIsFailureTodos(error))
  }
}

export function* createTodo(action) {
  try {
    yield put(actions.addTodo(action.todo))
    const todos = yield select(selectTodos);
    const optimisticTodo = last(todos);
    console.log('ot', optimisticTodo);
    const createdTodo = yield call(api.post, 'todos', {payload: action.todo})
    yield put(actions.modifyTodo(optimisticTodo.id, createdTodo))
    yield put(actions.sendCreateIsSuccessTodo())
  } catch (error) {
    yield put(actions.sendCreateIsFailureTodo(error))
  }
}
