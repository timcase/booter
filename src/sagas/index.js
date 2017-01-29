import { watchTodosSendGet, watchTodoSendCreate,
  watchTodoSendUpdate, watchTodoSendDelete }  from './watchers';

export default function* rootSaga() {
  yield [
    watchTodosSendGet(),
    watchTodoSendCreate(),
    watchTodoSendUpdate(),
    watchTodoSendDelete()
  ]
}
