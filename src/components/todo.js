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

  update = (text) => {
    this.props.update(this.props.todo.id, text);
    this.setState({
      editing: false
    });
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
            <label onDoubleClick={this.handleDoubleClick}>{this.props.todo.text}</label>
        </div>
      </li>)
    }
    return element;
  }
}

export default Todo;
