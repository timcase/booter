import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }
  componentDidMount() {
    this.setState({
      text: this.props.text || ''
    });
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = (e) => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.save({text: text});
      this.setState({ text: '' })
    }
  }

  render() {
    return (
        <input type="text"
            className="form-control add-todo"
            value={this.state.text}
            onKeyDown={this.handleSubmit}
            onChange={this.handleChange}
            placeholder="Add todo"/>
    )
  }
}

export default TodoInput;
