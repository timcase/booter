import React, { Component } from 'react';
import './todo.css';
import TodoInput from './todo_input';
import Todo from './todo';

class TodoList extends Component {
  componentDidMount() {
    this.props.actions.getTodos();
  }

  handleClick = () => {
      if (this.props.params.tag === 'inbox') {
        this.props.actions.redirectToOtherList('/lists/next');

      }
      else {
        this.props.actions.redirectToOtherList('/lists/inbox');
      }
  }

  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-md-6">
                  <div className="todolist not-done">
                  <h1>Todos - {this.props.params.tag}</h1>
                  <a onClick={this.handleClick}>Go to other list</a>
                    <TodoInput tag={this.tag} save={this.props.actions.createTodo} />
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
