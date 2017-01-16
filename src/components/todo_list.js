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
                    <TodoInput save={this.props.callbacks.create} />


                          <button id="checkAll"
                            onClick={this.props.callbacks.markAllCompleted}
                            className="btn btn-success">Mark all as done</button>
                          <hr/>
                          <ul id="sortable" className="list-unstyled">
                          { this.incompleteTodos.map(todo =>
                            <Todo key={todo.id} deleteTodo={this.props.callbacks.deleteTodo}
                              update={this.props.callbacks.update}
                              markCompleted={this.props.callbacks.markCompleted}
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
