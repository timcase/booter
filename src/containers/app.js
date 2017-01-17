import React, { Component } from 'react';
import Main from '../components/main';
import { connect } from 'react-redux';
import * as types from '../constants/action_types'


const mapDispatchToProps = (dispatch) => {
  return {
    callbacks: {
      create: (text) => {
        dispatch({type: types.ADD_TODO, text: text});
      },
      update: (id, text) => {
        dispatch({type: types.UPDATE_TODO, id: id, text: text})
      },
      deleteTodo: (id) => {
        dispatch({type: types.DELETE_TODO, id: id});
      },
      markCompleted: (id) => {
        dispatch({type: types.COMPLETE_TODO, id: id});
      },
      markAllCompleted: () => {
        dispatch({type: types.COMPLETE_ALL});
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
