import { List, Map } from 'immutable';
const initialState = List([
  Map({
    text: 'Use Redux',
    completed: false,
    id: 0
}),
Map({
  text: 'Eat more kale',
  completed: false,
  id: 1
})
]);

export default function todos( todos = initialState, action){
  return todos;
}
