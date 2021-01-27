import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../service/token -service';
import './Nav.css';

class Nav extends Component {

        handleLogout= () => {
            TokenService.clearAuthToken();
        }


        renderLogout(){
            return (
                <li>
                    <Link 
                    onClick={this.handleLogout}
                    to='/'
                        >
                        
                            Logout
                        
                    </Link>
                </li>
            )
        }

        renderLogin(){
            return(
               <>
                  
                        <li><Link to='/register'>Register</Link></li>                    
                        <li><Link to='/login'>Login</Link></li>
                </>
            )
        }

    render() {
        return (
            <nav className="Header_nav">
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