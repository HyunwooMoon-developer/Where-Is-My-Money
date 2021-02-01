import React, { Component } from "react";
import RegistrationForm from "./RegistrationForm";
import "./RegistrationPage.css";

class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  onRegistrationSuccess = (user) => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="register_page">
        <h3>Register</h3>
        <RegistrationForm onRegistrationSuccess={this.onRegistrationSuccess} />
      </div>
    );
  }
}

export default RegistrationPage;
