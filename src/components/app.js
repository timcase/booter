import React, { Component } from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router';

class App extends Component {
  get loadAlert(){
      if (this.props.isRequesting) {
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
      if (this.props.error !== undefined) {
        return (
          <div className="container">
            <div className="alert alert-danger fade in">
              {this.props.error}
            </div>
          </div>
        );
      }
      else{
        return null;
      }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Booter</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><Link activeClassName="active" to="/lists/inbox">inbox</Link></li>
                <li><Link activeClassName="active" to="/lists/next">next</Link></li>
              </ul>
              <form className="navbar-form navbar-right">
                <div className="form-group">
                  <input type="text" placeholder="Email" className="form-control"/>
                </div>
                <div className="form-group">
                  <input type="password" placeholder="Password" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-success">Sign in</button>
              </form>
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
        {this.loadAlert}
        {this.errorAlert}
        {this.props.children}
      </div>
    )
  }
}

export default App;
