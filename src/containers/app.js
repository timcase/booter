import React, { Component } from 'react';
import Main from '../components/main';

class App extends Component {

  create = (text) => {
    this.props.store.dispatch({type: 'ADD_TODO', text: text})
    this.forceUpdate();
  }

  update = (id, text) => {
    this.props.store.dispatch({type: 'UPDATE_TODO', id: id, text: text})
    this.forceUpdate();
  }

  deleteTodo = (id) => {
    this.props.store.dispatch({type: "DELETE_TODO", id: id});
    this.forceUpdate();
  }

  markCompleted = (id) => {
    this.props.store.dispatch({type: 'COMPLETE_TODO', id: id});
    this.forceUpdate();
  }

  markAllCompleted = () => {
    this.props.store.dispatch({type: 'COMPLETE_ALL'});
    this.forceUpdate();
  }

  get callbacks(){
    return {create: this.create, update: this.update,
      deleteTodo: this.deleteTodo, markCompleted: this.markCompleted,
      markAllCompleted: this.markAllCompleted};
  }

  render() {
    return (
      <Main store={this.props.store} callbacks={this.callbacks} />
    );
  }
}

export default App;
