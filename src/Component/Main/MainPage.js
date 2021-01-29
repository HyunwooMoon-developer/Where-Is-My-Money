/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mainImage from '../img/money-stock.jpg';
import './MainPage.css';

class MainPage extends Component {
    render() {
        return (
            <div className="main_div">
                <div className="left">
                    <h2>You can check your money flow!!</h2>
                    <p>Want to know how much money you earn and how much you spend? Where Is My Money is here! </p>
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