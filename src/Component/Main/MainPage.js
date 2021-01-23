/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mainImage from '../img/main-money.jpg';
import '../App/App.css';

class MainPage extends Component {
    render() {
        return (
            <div className="main-div">
                <div className="left">
                    <h2>You can check your money flow!!</h2>
                    <p>It's a great opporunity to see<br/> the unexpected flow of money </p>
                    <Link to={'/about'}>Learn More</Link>
                </div>
            <div className="right">
            <img src={mainImage} className="main-image" />
            </div>
            </div>
        );
    }
}

export default MainPage;