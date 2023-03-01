import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: { name: "", email: "", phone: "" },
      education: [],
      experience: [],
      isGeneralInfoEditMode: true,
      isEducationEditMode: true,
      isExperienceEditMode: true,
    };
  }

  handleGeneralInfoSubmit = (data) => {
    this.setState({
      generalInfo: data,
      isGeneralInfoEditMode: false,
    });
  };

  handleEducationSubmit = (data) => {
    this.setState({
      education: [...this.state.education, data],
      isEducationEditMode: false,
    });
  };

  handleExperienceSubmit = (data) => {
    this.setState({
      experience: [...this.state.experience, data],
      isExperienceEditMode: false,
    });
  };

  handleEdit = (section) => {
    if (section === "generalInfo") {
      this.setState({ isGeneralInfoEditMode: true });
    } else if (section === "education") {
      this.setState({ isEducationEditMode: true });
    } else if (section === "experience") {
      this.setState({ isExperienceEditMode: true });
    }
  };

  render() {
    const {
      generalInfo,
      education,
      experience,
      isGeneralInfoEditMode,
      isEducationEditMode,
      isExperienceEditMode,
    } = this.state;

    return (
      <div className="App">
        <h1>CV Application</h1>
        <GeneralInfo
          data={generalInfo}
          isEditMode={isGeneralInfoEditMode}
          onSubmit={this.handleGeneralInfoSubmit}
          onEdit={() => this.handleEdit("generalInfo")}
        />
        <Education
          data={education}
          isEditMode={isEducationEditMode}
          onSubmit={this.handleEducationSubmit}
          onEdit={() => this.handleEdit("education")}
        />
        <Experience
          data={experience}
          isEditMode={isExperienceEditMode}
          onSubmit={this.handleExperienceSubmit}
          onEdit={() => this.handleEdit("experience")}
        />
      </div>
    );
  }
}

export default App;