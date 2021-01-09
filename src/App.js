/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';
import AboutPage from './About/AboutPage';
import './App.css';
import IncomePage from './Income/IncomePage';
import MainPage from './Main/MainPage';
import Nav from './Nav/Nav';
import ReportPage from './Report/ReportPage';
import SpendingPage from './Spending/SpendingPage';


class App extends Component {
  

  render() {
    return (
      <div>
        <section className="base">
        <header>
        <h1><Link to={'/'}>$Where is My Money?!</Link></h1>
        <Nav />
    </header>
    <main>
      <Route exact path='/' component={MainPage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/income' component={IncomePage} />
      <Route path='/spending' component={SpendingPage} />
      <Route path='/report' component={ReportPage} />
    </main>
        </section>
      </div>
    );
  }
}

export default App;