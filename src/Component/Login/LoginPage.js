import React, { Component } from 'react';
import LoginForm from './LoginForm';
import './LoginPage.css'

class LoginPage extends Component {
    static defaultProps = {
        location : {},
        history : {
            push : ()=> {},
        },
    }
    
    onLoginSuccess = () => {
        const {location, history} = this.props;
        const destination = (location.state || {}).from || '/'

        history.push(destination)
    }

    render() {
        return (
            <div className="login_page">
                <h3>Login Page</h3>
                <LoginForm 
                onLoginSuccess={this.onLoginSuccess} />
            </div>
        );
    }
}

export default LoginPage;