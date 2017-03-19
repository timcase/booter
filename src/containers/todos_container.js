import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/todos';
import TodoList from '../components/todo_list';
import { requireAuthentication} from '../components/require_authentication';
import { getVisibleTodos } from '../selectors';

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

const mapStateToProps = (state) => {
  return {
    completedTodos: getVisibleTodos(state, 'SHOW_COMPLETED'),
    incompleteTodos: getVisibleTodos(state, 'SHOW_INCOMPLETE'),
    isRequesting: state.todos.isRequesting,
    error: state.todos.error };
};

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(requireAuthentication(TodoList));

export default TodosContainer;
