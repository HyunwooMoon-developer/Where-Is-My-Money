import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
    render() {
        return (
            <nav>
            <ul>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/income'}>Income</Link></li>
            <li><Link to={'/spending'}>Spending</Link></li>
            <li><Link to={'/report'}>Report</Link></li>
            </ul>
        </nav>
        );
    }
}

export default Nav;