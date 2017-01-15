import React, { Component } from 'react';
import './todo.css';
import TodoInput from './todo_input';
import Todo from './todo';

const TODO_FILTERS = {
  'all': () => true,
  'active': todo => !todo.completed,
  'completed': todo => todo.completed
}

class TodoList extends Component {

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

  get todos(){
    return this.props.store.getState().todos;
  }

  get completedTodos(){
    return this.todos.filter(TODO_FILTERS['completed']);
  }

  get incompleteTodos(){
    return this.todos.filter(TODO_FILTERS['active']);
  }

  render() {

    return (
      <div className="container">
          <div className="row">
              <div className="col-md-6">
                  <div className="todolist not-done">
                  <h1>Todos</h1>
                    <TodoInput save={this.create} />


                          <button id="checkAll"
                            onClick={this.markAllCompleted}
                            className="btn btn-success">Mark all as done</button>
                          <hr/>
                          <ul id="sortable" className="list-unstyled">
                          { this.incompleteTodos.map(todo =>
                            <Todo key={todo.id} deleteTodo={this.deleteTodo}
                              update={this.update}
                              markCompleted={this.markCompleted}
                            todo={todo} />
                            )}
                      </ul>
                      <div className="todo-footer">
                          <strong><span className="count-todos">{this.incompleteTodos.length}</span></strong> Items Left
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="todolist">
                  <h1>Already Done</h1>
                      <ul id="done-items" className="list-unstyled">
                          { this.completedTodos.map(todo =>
                            <li key={todo.id} >{todo.text}</li>
                          )}
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default TodoList;
