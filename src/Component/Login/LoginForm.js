import React, { Component } from 'react';
import AuthApiService from '../../service/auth-api-service';
import TokenService from '../../service/token -service';

class LoginForm extends Component {
   static defaultProps = {
       onLoginSuccess : () => {}
   }

    state = {error : null}

    handleSubmitBasicAuth = e => {
        e.preventDefault();
        console.log('created users')
        
        const {user_name, password} = e.target;

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(user_name.value, password.value)
            )
            
            user_name.value = ''
            password.value = ''
            this.props.onLoginSuccess();
    }

    handleSubmitJwtAuth = e => {
        e.preventDefault();
        this.setState({error : null})
        const {user_name, password} = e.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password : password.value,
        })
        .then(res=> {
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
        })
        .catch(res=>{
            this.setState({error : res.error})
        })
    }

    render() {
       // const {error} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmitJwtAuth}>
                    <label htmlFor="user_name">User name : </label>
                    <input type="text" name="user_name" id="user_name" required/>
                    <br />
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" id="password" required/>
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;