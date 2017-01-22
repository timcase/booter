import React, { Component } from 'react';
import TodoInput from './todo_input';

class Todo extends Component {
  constructor(){
    super()
    this.state = {
      editing: false
    }
  }

  handleDoubleClick = () => {
    this.setState({
      editing: true
    });
  }

  update = (argTodo) => {
    let todo = this.props.todo;
    todo.text = argTodo.text;
    this.props.update(todo);
    this.setState({
      editing: false
    });
  }

  handleDeleteClick = () => {
    this.props.deleteTodo(this.props.todo.id);
  }

  handleCompletedClick = () => {
    let todo = this.props.todo;
    todo.completed = true
    this.props.update(todo);
  }

  render() {
    let element;
    if (this.state.editing) {
      element = (
        <TodoInput
          text={this.props.todo.text}
          editing={this.state.editing}
          save={this.update}
        />
      )
    } else {
      element = (<li className="ui-state-default">
        <div className="checkbox">
            <input type="checkbox" onClick={this.handleCompletedClick} />
            <label onDoubleClick={this.handleDoubleClick}>{this.props.todo.text}</label>
            <button
              onClick={this.handleDeleteClick}
             className="remove-item btn btn-default btn-xs pull-right">
              <span className="glyphicon glyphicon-remove"></span>
            </button>
        </div>
      </li>)
    }
    return element;
  }
}

export default Todo;
