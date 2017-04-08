import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/todos';
import * as DepartmentActions from '../actions/departments';
import TodoList from '../components/todo_list';
import { requireAuthentication} from '../components/require_authentication';
import { getVisibleTodos, getAllDepartments } from '../reducers';


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, TodoActions, DepartmentActions), dispatch)
})

const mapStateToProps = (state) => {
  return {
    departments: getAllDepartments(state.departments),
    completedTodos: getVisibleTodos(state.todos, 'SHOW_COMPLETED',
      'inbox'),
    incompleteTodos: getVisibleTodos(state.todos, 'SHOW_INCOMPLETE',
      'inbox'),
    isRequesting: state.todos.isRequesting,
    error: state.todos.error };
};

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(requireAuthentication(TodoList));

export default TodosContainer;
