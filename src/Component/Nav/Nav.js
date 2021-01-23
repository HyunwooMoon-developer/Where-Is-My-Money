import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';

class Nav extends Component {
    render() {
        return (
            <nav>
            <ul>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/incomes'}>Income</Link></li>
            <li><Link to={'/slists'}>Spending</Link></li>
            <li><Link to={'/report'}>Report</Link></li>
            </ul>
        </nav>
        );
    }
}

export default Nav;