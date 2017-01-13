import React, { Component } from 'react';
import './todo.css'

class Todo extends Component {

  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-md-6">
                  <div className="todolist not-done">
                  <h1>Todos</h1>
                      <input type="text" className="form-control add-todo" placeholder="Add todo"/>
                          <button id="checkAll" className="btn btn-success">Mark all as done</button>

                          <hr/>
                          <ul id="sortable" className="list-unstyled">
                          <li className="ui-state-default">
                              <div className="checkbox">
                                  <label>
                                      <input type="checkbox" value="" />Take out the trash</label>
                              </div>
                          </li>
                          <li className="ui-state-default">
                              <div className="checkbox">
                                  <label>
                                      <input type="checkbox" value="" />Buy bread</label>
                              </div>
                          </li>
                          <li className="ui-state-default">
                              <div className="checkbox">
                                  <label>
                                      <input type="checkbox" value="" />Teach penguins to fly</label>
                              </div>
                          </li>
                      </ul>
                      <div className="todo-footer">
                          <strong><span className="count-todos">3</span></strong> Items Left
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

export default Todo;
