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
  componentDidMount() {
    this.props.actions.getTodos();
  }

  get todos(){
    return this.props.todos;
  }

  get completedTodos(){
    return this.todos.filter(TODO_FILTERS['completed'])
      .filter(todo => todo.tag === this.tag);
  }

  get incompleteTodos(){
    return this.todos.filter(TODO_FILTERS['active'])
      .filter(todo => todo.tag === this.tag);
  }

  get tag(){
    return (this.props.params.tag || 'inbox');
  }

  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-md-6">
                  <div className="todolist not-done">
                  <h1>Todos - {this.props.params.tag}</h1>
                    <TodoInput tag={this.tag} save={this.props.actions.createTodo} />
                          <hr/>
                          <ul id="sortable" className="list-unstyled">
                          { this.incompleteTodos.map(todo =>
                            <Todo key={todo.id} deleteTodo={this.props.actions.deleteTodo}
                              update={this.props.actions.updateTodo}
                              markCompleted={this.props.actions.markAsCompletedTodo}
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
