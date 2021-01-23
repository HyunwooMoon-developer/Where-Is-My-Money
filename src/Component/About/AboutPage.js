/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import mainImage from '../img/main-money.jpg'
import '../../Component/App/App.css'

class AboutPage extends Component {
    render() {
        return (
        <div className="about-div">
            <div className="img">
                <img src={mainImage} className="main-image" />
            </div>
            <div className="description">
                <br />
                <h3>What can you do?</h3>
                <br />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        
        );
    }
}

export default AboutPage;