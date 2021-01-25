import React, { Component } from 'react';
import LoginForm from './LoginForm';

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
            <section>
                <h2>Log in</h2>
                <LoginForm 
                onLoginSuccess={this.onLoginSuccess} />
            </section>
        );
    }
}

export default LoginPage;