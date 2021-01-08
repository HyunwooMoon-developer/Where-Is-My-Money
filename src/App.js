/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './App.css';
import mainImage from './img/main-money.jpg'


class App extends Component {
  render() {
    return (
      <div>
        <section className="base">
        <header>
        <h1><a href="#">$Where is My Money?!-main</a></h1>
        <nav>
            <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Income</a></li>
            <li><a href="#">Spending</a></li>
            <li><a href="#">Report</a></li>
            </ul>
        </nav>
    </header>
    <main>
    <div className="main-div">
        <div className="left">
            <h2>You can check your money flow!!</h2>
            <p>It's a great opporunity to see<br/> the unexpected flow of money </p>
            <a href="#">Learn More</a>
        </div>
        <div className="right">
            <img src={mainImage} className="main-image" />
        </div>
    </div>
    </main>
        </section>
      </div>
    );
  }
}

export default App;