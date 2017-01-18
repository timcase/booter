import React, { Component } from 'react';
import Main from '../components/main';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions';

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

class App extends Component {

  render() {
    return (
      <Main todos={this.props.todos} callbacks={this.props.actions} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
