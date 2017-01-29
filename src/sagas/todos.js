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
    const createdTodo = yield call(api.post, 'todos', {payload: action.todo})
    yield put(actions.modifyTodo(optimisticTodo.id, createdTodo))
    yield put(actions.sendCreateIsSuccessTodo())
  } catch (error) {
    yield put(actions.sendCreateIsFailureTodo(error))
  }
}

export function* updateTodo(action) {
  try {
    yield put(actions.modifyTodo(action.todo.id, action.todo))
    const updatedTodo = yield call(api.put, 'todos', {payload: action.todo})
    yield put(actions.modifyTodo(action.id, updatedTodo))
    yield put(actions.sendUpdateIsSuccessTodo())
  } catch (error) {
    yield put(actions.sendUpdateIsFailureTodo(error))
  }
}

export function* deleteTodo(action) {
  try {
    yield put(actions.removeTodo(action.todo))
    yield call(api.del, 'todos', {payload: action.todo})
    yield put(actions.sendDeleteIsSuccessTodo())
  } catch (error) {
    yield put(actions.sendDeleteIsFailureTodo(error))
  }
}
