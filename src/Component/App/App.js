/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link, Route, Switch} from 'react-router-dom';
import AboutPage from '../About/AboutPage';
import './App.css';
import config from '../../config';
import myContext from '../../Context/Context'
import AddIncome from '../Income/AddIncome';
import EditIncome from '../Income/EditIncome';
import IncomeDetail from '../Income/IncomeDetail';
import IncomePage from '../Income/IncomePage';
import MainPage from '../Main/MainPage';
import Nav from '../Nav/Nav';
import ReportPage from '../Report/ReportPage';
import AddSpendingItem from '../Spending/AddSpendingItem';
import AddSpendingList from '../Spending/AddSpendingList';
import EditSpendingItem from '../Spending/EditSpendingItem';
import EditSpendingList from '../Spending/EditSpendingList';
import SpendingPage from '../Spending/SpendingPage';
//import LoginForm from '../Login/LoginForm';
import LoginPage from '../Login/LoginPage';
import RegistrationForm from '../../RegistrationForm/RegistrationForm';


class App extends Component {
  state={
    incomes : [],
    spendingLists : [],
    spendingItems  : [],
  };

  fetchAll = () => {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/incomes`,),
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
    //console.log("incomes: ", this.state.incomes)
    return (
      <myContext.Provider value={contextValues}>
      <div className="app">
        <section className="base">
        <header>
        <h1><Link to={'/'}>$Where is My Money?!</Link></h1>
        <Nav />
    </header>
    <main>
      <Switch>
      <Route exact path='/' component={MainPage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/incomes/:income_id' component={IncomeDetail} />
      <Route path='/incomes' component={IncomePage} />
      <Route path='/edit/incomes/:income_id' component={EditIncome} />
      <Route path='/add-income' component={AddIncome} />
      {/*spending page component will get the slist_id from state
         our alternative is to pass the slist_id props
         but it's to complicated 
        */}
      <Route path='/slists/:slist_id' component={SpendingPage} />
      <Route path='/slists' component={SpendingPage} />
      <Route path='/add-list' component={AddSpendingList}/>
      <Route path='/edit/slists/:slist_id' component={EditSpendingList} />
      <Route path='/add-item' component={AddSpendingItem} />
      <Route path='/edit/sitems/:sitem_id' component={EditSpendingItem} />
      <Route path='/report' component={ReportPage} />
      <Route path='/login' component={LoginPage} />
      <Route path='/register' component={RegistrationForm} />
      </Switch>
    </main>
        </section>
      </div>
      </myContext.Provider>
    );
  }
}

export default App;