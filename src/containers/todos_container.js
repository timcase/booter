import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions';
import TodoList from '../components/todo_list';

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

const mapStateToProps = (state) => {
  return { todos: state.todos.todos, isRequesting: state.todos.isRequesting,
    error: state.todos.error };
};

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodosContainer;
