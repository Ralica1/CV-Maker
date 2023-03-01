import React from 'react';

class Form extends React.Component {
  state = {
    value: '',
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {this.props.label}:
          <input type={this.props.type} value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
