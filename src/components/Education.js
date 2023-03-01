import React from "react";
import PropTypes from "prop-types";
import Form from "./Form";
import "./styles.css";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      study: "",
      date: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { school, study, date } = this.state;
    const data = { school, study, date };
    this.props.onSubmit(data);
    this.setState({ school: "", study: "", date: "" });
  };

  render() {
    const { data, isEditMode, onEdit } = this.props;

    if (!isEditMode) {
      return (
        <div className="section">
          <h2>Education</h2>
          {data.length === 0 ? (
            <p>No education added yet.</p>
          ) : (
            <ul>
              {data.map((item, index) => (
                <li key={index}>
                  <h3>{item.school}</h3>
                  <p>{item.study}</p>
                  <p>{item.date}</p>
                </li>
              ))}
            </ul>
          )}
          <button onClick={onEdit}>Edit</button>
        </div>
      );
    }

    return (
      <div className="section">
        <h2>Education</h2>
        <Form
          onSubmit={this.handleSubmit}
          onCancel={onEdit}
          submitLabel="Add"
        >
          <div className="form-group">
            <label htmlFor="school">School:</label>
            <input
              type="text"
              id="school"
              name="school"
              value={this.state.school}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="study">Study:</label>
            <input
              type="text"
              id="study"
              name="study"
              value={this.state.study}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="text"
              id="date"
              name="date"
              value={this.state.date}
              onChange={this.handleInputChange}
              required
            />
          </div>
        </Form>
      </div>
    );
  }
}

Education.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string.isRequired,
      study: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  isEditMode: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Education;
