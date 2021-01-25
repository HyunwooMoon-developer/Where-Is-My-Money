import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';

class RegistrationPage extends Component {
    static defaultProps = {
        history : {
            push : () => {}
        },
    }

    onRegistrationSuccess = user => {
        this.props.history.push('/login')
    }
    
    render() {
        return (
            <section>
                <h2>Register</h2>
                <RegistrationForm 
                    onRegistrationSuccess={this.onRegistrationSuccess}
                />
            </section>
        );
    }
}

export default RegistrationPage;