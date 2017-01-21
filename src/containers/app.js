import React, { Component } from 'react';
import Main from '../components/main';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions';

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

const mapStateToProps = (state) => {
  return { todos: state.todos.todos, isLoading: state.todos.isLoading,
    hasFailure: state.todos.hasFailure };
};

class App extends Component {
  componentDidMount() {
    this.props.actions.getTodos();
  }

  render() {
    return (
      <Main todos={this.props.todos}
        isLoading={this.props.isLoading}
        hasFailure={this.props.hasFailure}
      actions={this.props.actions} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
