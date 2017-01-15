import React, { Component } from 'react';
import './todo.css';
import TodoInput from './todo_input';
import Todo from './todo';

class TodoList extends Component {

  create = (text) => {
    this.props.store.dispatch({type: 'ADD_TODO', text: text})
  }

  update = (id, text) => {
    this.props.store.dispatch({type: 'UPDATE_TODO', id: id, text: text})
    this.forceUpdate();
  }

  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-md-6">
                  <div className="todolist not-done">
                  <h1>Todos</h1>
                    <TodoInput save={this.save} />


                          <button id="checkAll"
                          className="btn btn-success">Mark all as done</button>

                          <hr/>
                          <ul id="sortable" className="list-unstyled">
                          { todos.map(todo =>
                              <Todo key={todo.id} update={this.update} todo={todo} />
                            )}
                      </ul>
                      <div className="todo-footer">
                          <strong><span className="count-todos">{this.props.store.getState().todos.length}</span></strong> Items Left
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="todolist">
                  <h1>Already Done</h1>
                      <ul id="done-items" className="list-unstyled">
                          <li>Some item <button className="remove-item btn btn-default btn-xs pull-right">
                          <span className="glyphicon glyphicon-remove"></span></button></li>

                      </ul>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default TodoList;
