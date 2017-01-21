import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import TodoList from './todo_list';

class Main extends Component {

  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
        <div className="container">
          <div className="alert alert-warning fade in">
            Loading todos...
          </div>
          <div className="alert alert-danger fade in">
            There was an error loading todos
          </div>
        </div>
        <TodoList actions={this.props.actions} todos={this.props.todos} />
      </div>
    )
  }
}

export default Main;
