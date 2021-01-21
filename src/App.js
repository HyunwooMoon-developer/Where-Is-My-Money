/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';
import AboutPage from './About/AboutPage';
import './App.css';
import config from './config';
import IncomePage from './Income/IncomePage';
import MainPage from './Main/MainPage';
import Nav from './Nav/Nav';
import ReportPage from './Report/ReportPage';
import SpendingPage from './Spending/SpendingPage';


class App extends Component {
  state={
    incomes : [],
    spendingLists : [],
    spendingItems  : [],
  };

  fetchAll = () => {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/incomes`),
      fetch(`${config.API_ENDPOINT}/api/slists`),
      fetch(`${config.API_ENDPOINT}/api/sitems`)
    ])
    .then(([incomeRes, slistRes, sitemRes])=>{
      if(!incomeRes.ok)
      return incomeRes.json().then(e=> Promise.reject(e))
      if(!slistRes.ok)
      return slistRes.json().then(e=> Promise.reject(e))
      if(!sitemRes.ok)
      return sitemRes.json().then(e=> Promise.reject(e))
    
      return Promise.all([
        incomeRes.json(),
        slistRes.json(),
        sitemRes.json(),
      ])
    })
    .then(([incomes, spendingLists, spendingItems])=>{
      this.setState({incomes, spendingLists, spendingItems})
    })
    .catch(err=>{
      console.error({err})
    })
  }


  handleAddIncome = income => {
    this.setState({
      incomes : [
        ...this.state.incomes,
        income
      ]
    })
  }

  handleAddList = list => {
    this.setState({
      spendingLists : [
        ...this.state.spendingLists,
        list
      ]
    })
  }

  handleAddItem = item => {
    this.setState({
      spendingItems : [
        ...this.state.spendingItems,
        item
      ]
    })
  }

  handleDeleteIncome = incomeId => {
    this.setState({
      incomes : this.state.incomes.filter(income=> income.id !== incomeId)
    })
  }

  handleDeleteList = listId => {
    this.setState({
      spendingLists : this.state.spendingLists.filter(list=> list.id !== listId)
    })
  }

  handleDeleteItem = itemId => {
    this.setState({
      spendingItems : this.state.spendingItems.filter(item => item.id !== itemId)
    })
  }


  handleUpdateIncome = updateIncome => {
    const updatedIncomes = this.state.incomes.map(income=>
      (income.id === updateIncome.id)
                  ?updateIncome
                  :income
                  )
        this.setState({
          incomes : updatedIncomes
        })
  }

  handleUpdateList = updateList => {
    const updateLists = this.state.spendingLists.map(list=>
      (list.id === updateList.id)
                  ?updateList
                  :list
      )
      this.setState({
        spendingLists : updateLists
      })
  }

  handleUpdateItem = updateItem => {
    const updateItems = this.state.spendingItems.map(item=>
      (item.id === updateItem.id)
                  ?updateItem
                  :item
      )
      this.setState({
        spendingItems : updateItems
      })
  }

  componentDidMount(){
    this.fetchAll()
  }

  render() {
    const contextValues = {
      incomes : this.state.incomes,
      spendingLists : this.state.spendingLists,
      spendingItems : this.state.spendingItems,
      handleAddIncome : this.handleAddIncome,
      handleAddList : this.handleAddList,
      handleAddItem : this.handleAddItem,
      handleDeleteIncome : this.handleDeleteIncome,
      handleDeleteList : this.handleDeleteList,
      handleDeleteItem : this.handleDeleteItem,
      handleUpdateIncome : this.handleUpdateIncome,
      handleUpdateList : this.handleUpdateList,
      handleUpdateItem : this.handleUpdateItem,
      fetchAll  :this.fetchAll,
    }
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