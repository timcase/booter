import React, { Component, PropTypes } from 'react';

class Repo extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
      </div>
    )
  }
}

export default Repo
