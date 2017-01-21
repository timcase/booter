import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import TodoList from './todo_list';

class Main extends Component {
  get loadAlert(){
      if (this.props.isLoading) {
        return (
          <div className="container">
            <div className="alert alert-warning fade in">
              Loading todos...
            </div>
          </div>
        );
      }
      else{
        return null;
      }
  }

  get errorAlert(){
      if (this.props.hasFailure) {
        return (
          <div className="container">
            <div className="alert alert-danger fade in">
              There was an error loading todos
            </div>
          </div>
        );
      }
      else{
        return null;
      }
  }

  render() {
    console.log(this.props);
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
        {this.loadAlert}
        {this.errorAlert}
        <TodoList actions={this.props.actions} todos={this.props.todos} />
      </div>
    )
  }
}

export default Main;
