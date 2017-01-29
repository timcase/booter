import { takeLatest, fork, call, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../utils/api'

export function* getTodos(action) {
  try {
    const todos = yield call(api.get, 'todos')
    yield put(actions.sendGetIsSuccessTodos(todos))
  } catch (error) {
    yield put(actions.sendGetIsFailureTodos(error))
  }
}

// export function* createGrid(action) {
//   try {
//     const grid = yield call(api.POST, 'grids', { grid: action.payload })
//     yield put(actions.createGridSuccess(grid))
//     yield put(actions.closeSubview())
//   } catch (error) {
//     yield put(actions.createGridFail(error))
//   }
// }

// export function* updateGrid(action) {
//   try {
//     const grid = yield call(api.PUT, `grids/${action.payload.id}`, { grid: action.payload })
//     yield put(actions.updateGridSuccess(grid))
//     yield put(actions.closeSubview())
//   } catch (error) {
//     yield put(actions.updateGridFail(error))
//   }
// }

// export function* deleteGrid(action) {
//   try {
//     yield call(api.DELETE, `grids/${action.payload}`)
//     yield put(actions.deleteGridSuccess(action.payload))
//   } catch (error) {
//     yield put(actions.deleteGridFail(error))
//   }
// }

function* watchTodosSendGet() {
  while(true) {
    yield* fork(actions.TODOS_SEND_GET, getTodos)
  }
}

// export function* watchCreateGrid() {
//   yield* takeLatest(actions.CREATE_GRID, createGrid)
// }

// export function* watchUpdateGrid() {
//   yield* takeLatest(actions.UPDATE_GRID, updateGrid)
// }

// export function* watchDeleteGrid() {
//   yield* takeLatest(actions.DELETE_GRID, deleteGrid)
// }

export default function* root(){
  yield[
    fork(watchTodosSendGet)
  ]
}
