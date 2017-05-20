import React, { Component } from 'react';
import './todo.css';
import TodoInput from './todo_input';
import Todo from './todo';
import flatten from 'lodash/flatten'
import includes from 'lodash/includes'


class TodoList extends Component {
  componentDidMount() {
    this.props.actions.getTodos();
    this.props.actions.getDepartments();
  }

  handleClick = () => {
      if (this.props.params.tag === 'inbox') {
        this.props.actions.redirectToOtherList('/lists/next');

      }
      else {
        this.props.actions.redirectToOtherList('/lists/inbox');
      }
  }

  get transportation(){
    return this.props.departments.filter(d => d.name === 'Transportation')[0] || {todos: []};
  }

  get departmentTodoIds(){
    return flatten(this.props.departments.map(d => d.todos));
  }

  get departmentTodos(){
    return this.props.todos.filter(t => includes(this.departmentTodoIds, t.id));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Departments</h1>
            {this.departmentTodos.map(d =>
              <div key={d.id}>{d.text}</div>
            )
            }
          </div>
        </div>
          <div className="row">
              <div className="col-md-6">
                  <div className="todolist not-done">
                  <h1>Todos - {this.props.params.tag}</h1>
                  <a onClick={this.handleClick}>Go to other list</a>
                    <TodoInput tag={this.props.params.tag} save={this.props.actions.createTodo} />
                          <hr/>
                          <ul id="sortable" className="list-unstyled">
                          { this.props.incompleteTodos.map(todo =>
                            <Todo key={todo.id} deleteTodo={this.props.actions.deleteTodo}
                              update={this.props.actions.updateTodo}
                              markCompleted={this.props.actions.markAsCompletedTodo}
                            todo={todo} />
                            )}
                      </ul>
                      <div className="todo-footer">
                          <strong><span className="count-todos">{this.props.incompleteTodos.length}</span></strong> Items Left
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="todolist">
                  <h1>Already Done</h1>
                      <ul id="done-items" className="list-unstyled">
                          { this.props.completedTodos.map(todo =>
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
