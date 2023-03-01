import React from "react";
import "./styles.css";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      positionTitle: "",
      mainTasks: "",
      dateFrom: "",
      dateTo: "",
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
        <h2>Experience</h2>
        {this.state.isEditing ? (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Company Name:</label>
              <input
                type="text"
                name="companyName"
                value={this.state.companyName}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label>Position Title:</label>
              <input
                type="text"
                name="positionTitle"
                value={this.state.positionTitle}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label>Main Tasks:</label>
              <input
                type="text"
                name="mainTasks"
                value={this.state.mainTasks}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label>Date From:</label>
              <input
                type="text"
                name="dateFrom"
                value={this.state.dateFrom}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label>Date To:</label>
              <input
                type="text"
                name="dateTo"
                value={this.state.dateTo}
                onChange={this.handleInputChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <div>
              <label>Company Name:</label>
              <span>{this.state.companyName}</span>
            </div>
            <div>
              <label>Position Title:</label>
              <span>{this.state.positionTitle}</span>
            </div>
            <div>
              <label>Main Tasks:</label>
              <span>{this.state.mainTasks}</span>
            </div>
            <div>
              <label>Date From:</label>
              <span>{this.state.dateFrom}</span>
            </div>
            <div>
              <label>Date To:</label>
              <span>{this.state.dateTo}</span>
            </div>
            <button onClick={this.handleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default Experience;
