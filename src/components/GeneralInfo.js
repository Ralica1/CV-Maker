import React from "react";
import "./styles.css";

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      isEditing: true,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isEditing: false });
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  render() {
    return (
      <div>
        <h2>General Information</h2>
        {this.state.isEditing ? (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <div>
              <label>Name:</label>
              <span>{this.state.name}</span>
            </div>
            <div>
              <label>Email:</label>
              <span>{this.state.email}</span>
            </div>
            <div>
              <label>Phone:</label>
              <span>{this.state.phone}</span>
            </div>
            <button onClick={this.handleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default GeneralInfo;
