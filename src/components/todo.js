import React, { Component } from 'react';

class Todo extends Component {

  render() {
    return (
    <li className="ui-state-default">
      <div className="checkbox">
          <label>{this.props.todo.text}</label>
      </div>
    </li>
    )
  }
}

export default Todo;
