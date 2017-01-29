import { watchTodosSendGet, watchTodoSendCreate }  from './watchers';

export default function* rootSaga() {
  yield [
    watchTodosSendGet(),
    watchTodoSendCreate()
  ]
}
