/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import mainImage from '../img/main-money.jpg'
import { SocialIcon } from 'react-social-icons';
import './AboutPage.css'

class AboutPage extends Component {
    render() {
        return (
        <div className="about_page">
            <div className="about_left">
                <img src={mainImage} className="img" />
            </div>
            <div className="about_right">
                    <h3>What can you do?</h3>
                    <br/>
                    <p>This site can help you figure out the flow of your money.</p> 
                    <p>Through the income page, the spreading page, and the reporting page, you can check how much money you make, how much you spend, and how much money you spend.</p>
                    <br/>
                    <h3>Contact Me!!</h3>
                    <p>If you have any further questions on the site, please contact Me here!</p>
                    <br/>
                    &nbsp; 
                    <SocialIcon url="mailto:mhw9163@gmail.com" className="contact_icon"/>
                    &nbsp;
                    <SocialIcon url="https://www.linkedin.com/in/hyunwoomoon/" target="_blank" className="contact_icon"/>
                    &nbsp;
                    <SocialIcon url="https://github.com/HyunwooMoon-developer" target="_blank" className="contact_icon"/>
                    

            </div>
        </div>
        
        );
    }
}

export default AboutPage;