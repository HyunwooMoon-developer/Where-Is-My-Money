import React, { Component } from 'react';
import AuthApiService from '../service/auth-api-service';

class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess : () => {}
    }

    state = {error : null}

    handleSubmit = e => {
        e.preventDefault();
        const {full_name, user_name, password} = e.target

        this.setState({error : null})
        AuthApiService.postUser({
            user_name : user_name.value,
            password : password.value,
            full_name : full_name.value,
        })
        .then(user=> {
            full_name.value = ''
            user_name.value = ''
            password.value = ''
            this.props.onRegistrationSuccess()
        })
        .catch(res=>{
            this.setState({error : res.error})
        })

    }

    render() {
        //const {error} = this.state
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}>
                    <label htmlFor="full_name">Full Name</label>
                    <input 
                        type="text"
                        name="full_name"
                        required
                    />
                    <br />
                    <label htmlFor="user_name">User Name</label>
                    <input
                        type="text"
                        name="user_name"
                        required
                    />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        required
                    />
                    <button type="submit">Submit</button>
                    </form>     
            </div>
        );
    }
}

export default RegistrationForm;