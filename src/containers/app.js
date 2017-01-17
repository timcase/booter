import React, { Component } from 'react';
import Main from '../components/main';
import { connect } from 'react-redux';
import { addTodo, updateTodo, deleteTodo, markCompleted,
  markAllCompleted } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    callbacks: {
      create: (text) => {
        dispatch(addTodo(text));
      },
      update: (id, text) => {
        dispatch(updateTodo(id, text))
      },
      deleteTodo: (id) => {
        dispatch(deleteTodo(id))
      },
      markCompleted: (id) => {
        dispatch(markCompleted(id))
      },
      markAllCompleted: () => {
        dispatch(markAllCompleted())
      }
    }
  }
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

class App extends Component {

  render() {
    return (
      <Main todos={this.props.todos} callbacks={this.props.callbacks} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
