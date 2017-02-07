import React, { Component } from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import jwtDecode from 'jwt-decode';

class App extends Component {

  handleLogoutClick = () => {
    this.props.actions.logoutAndRedirect();
  }

  get userName(){
    return jwtDecode(this.props.jwt).user_name;
  }

  get loginLink(){
      if (this.props.isAuthenticated) {
        return (<p className="navbar-text navbar-right">Logged in as {this.userName}, <a className="navbar-link" onClick={this.handleLogoutClick} style={{cursor: 'pointer'}}>click to logout</a></p>);
      } else {
        return(<Link className="navbar-text nav-link navbar-right" to="/login">Login</Link>);
      }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Booter!</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><Link activeClassName="active" to="/lists/inbox">inbox</Link></li>
                <li><Link activeClassName="active" to="/lists/next">next</Link></li>
              </ul>
                {this.loginLink}
            </div>
          </div>

        </nav>
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
        {this.props.children}
      </div>
    )
  }
}

export default App;
