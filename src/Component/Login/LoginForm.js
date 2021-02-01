import React, { Component } from "react";
import AuthApiService from "../../service/auth-api-service";
import TokenService from "../../service/token -service";
import "./LoginForm.css";

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = { error: null };

  handleSubmitBasicAuth = (e) => {
    e.preventDefault();

    const { user_name, password } = e.target;

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    );

    user_name.value = "";
    password.value = "";
    this.props.onLoginSuccess();
  };

  handleSubmitJwtAuth = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = e.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmitJwtAuth} className="login_form">
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <label htmlFor="user_name" className="login_p">
            User name :{" "}
          </label>
          <input type="text" name="user_name" id="user_name" required />
          <br />
          <label htmlFor="password" className="login_p">
            Password :{" "}
          </label>
          <input type="password" name="password" id="password" required />
          <br />
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

export default LoginForm;
