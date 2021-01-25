import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../service/token -service';
import '../App/App.css';

class Nav extends Component {

        handleLogout= () => {
            TokenService.clearAuthToken();
        }


        renderLogout(){
            return (
                <div>
                    <Link 
                    onClick={this.handleLogout}
                    to='/'
                        >
                        <li>
                            Logout
                        </li>
                    </Link>
                </div>
            )
        }

        renderLogin(){
            return(
                <div>
                    <Link to='/register'>
                        <li>Register</li>
                    </Link>
                    <Link to='/login'>
                        <li>Login</li>
                    </Link>
                </div>
            )
        }

    render() {
        return (
            <nav>
            <ul>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/incomes'}>Income</Link></li>
            <li><Link to={'/slists'}>Spending</Link></li>
            <li><Link to={'/report'}>Report</Link></li>
            {TokenService.hasAuthToken()
                            ?this.renderLogout()
                            :this.renderLogin()}
            </ul>
        </nav>
        );
    }
}

export default Nav;