import React, { Component } from 'react';
import Main from '../components/main';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions';

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

const mapStateToProps = (state) => {
  return { todos: state.todos.todos, isRequesting: state.todos.isRequesting,
    error: state.todos.error };
};

class App extends Component {
  componentDidMount() {
    this.props.actions.sendGetTodos();
  }

  render() {
    return (
      <Main todos={this.props.todos}
        isRequesting={this.props.isRequesting}
        error={this.props.error}
      actions={this.props.actions} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
