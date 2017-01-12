import React, { Component } from 'react';
import { Nav, NavItem, Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import { IndexLink, Link } from 'react-router';

class App extends Component {
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
            <Nav bsStyle="pills">
              <NavItem href="/#">Home</NavItem>
              <NavItem href="/#/about">About</NavItem>
              <NavItem href="/#/repos">Repos</NavItem>
            </Nav>
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
            <ul>
              <li><Link to="/about" activeStyle={{ color: 'red'}}>About</Link></li>
              <li><Link to="/repos" activeStyle={{ color: 'red'}}>Repos</Link></li>
            </ul>
            <ul>
              <li><IndexLink to="/" activeClassName="text-warning">Home</IndexLink></li>
              <li><Link to="/about" activeClassName="text-warning">About</Link></li>
              <li><Link to="/repos" activeClassName="text-warning">Repos</Link></li>
            </ul>
          </Grid>
        </Jumbotron>
        <Grid>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

export default App;
