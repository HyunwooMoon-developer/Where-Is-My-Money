/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import AboutPage from "../About/AboutPage";
import "./App.css";
import config from "../../config";
import myContext from "../../Context/Context";
import AddIncome from "../Income/AddIncome/AddIncome";
import EditIncome from "../Income/EditIncome/EditIncome";
import IncomeDetail from "../Income/IncomeDetail/IncomeDetail";
import IncomePage from "../Income/IncomePage/IncomePage";
import MainPage from "../Main/MainPage";
import Nav from "../Nav/Nav";
import ReportPage from "../Report/ReportPage";
import AddSpendingItem from "../Spending/AddSpendingItem/AddSpendingItem";
import AddSpendingList from "../Spending/AddSpendingList/AddSpendingList";
import EditSpendingItem from "../Spending/EditSpendingItem/EditSpendingItem";
import EditSpendingList from "../Spending/EditSpendingList/EditSpendingList";
import SpendingPage from "../Spending/SPendingPage/SpendingPage";
import LoginPage from "../Login/LoginPage";
import ErrorBoundary from "../../Route/ErrorBoundry/ErrorBoundary";
import PublicRoute from "../Util/PublicRoute";
import PrivateRoute from "../Util/PrivateRoute";
import RegistrationPage from "../RegistrationForm/RegistrationPage";
import NotFoundPage from "../../Route/NotFoundPage/NotFoundPage";
import TokenService from "../../service/token -service";

class App extends Component {
  state = {
    incomes: [],
    spendingLists: [],
    spendingItems: [],
    isLoggedIn: false,
  };

  fetchAll = () => {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/incomes`),
      fetch(`${config.API_ENDPOINT}/api/slists`),
      fetch(`${config.API_ENDPOINT}/api/sitems`),
    ])
      .then(([incomeRes, slistRes, sitemRes]) => {
        if (!incomeRes.ok)
          return incomeRes.json().then((e) => Promise.reject(e));
        if (!slistRes.ok) return slistRes.json().then((e) => Promise.reject(e));
        if (!sitemRes.ok) return sitemRes.json().then((e) => Promise.reject(e));

        return Promise.all([
          incomeRes.json(),
          slistRes.json(),
          sitemRes.json(),
        ]);
      })
      .then(([incomes, spendingLists, spendingItems]) => {
        this.setState({ incomes, spendingLists, spendingItems });
      })
      .catch((err) => {
        console.error({ err });
      });
  };

  handleAddIncome = (income) => {
    this.setState({
      incomes: [...this.state.incomes, income],
    });
  };

  handleAddList = (list) => {
    this.setState({
      spendingLists: [...this.state.spendingLists, list],
    });
  };

  handleAddItem = (item) => {
    this.setState({
      spendingItems: [...this.state.spendingItems, item],
    });
  };

  handleDeleteIncome = (incomeId) => {
    this.setState({
      incomes: this.state.incomes.filter((income) => income.id !== incomeId),
    });
  };

  handleDeleteList = (listId) => {
    this.setState({
      spendingLists: this.state.spendingLists.filter(
        (list) => list.id !== listId
      ),
    });
  };

  handleDeleteItem = (itemId) => {
    this.setState({
      spendingItems: this.state.spendingItems.filter(
        (item) => item.id !== itemId
      ),
    });
  };

  handleUpdateIncome = (updateIncome) => {
    const updatedIncomes = this.state.incomes.map((income) =>
      income.id === updateIncome.id ? updateIncome : income
    );
    this.setState({
      incomes: updatedIncomes,
    });
  };

  handleUpdateList = (updateList) => {
    const updateLists = this.state.spendingLists.map((list) =>
      list.id === updateList.id ? updateList : list
    );
    this.setState({
      spendingLists: updateLists,
    });
  };

  handleUpdateItem = (updateItem) => {
    const updateItems = this.state.spendingItems.map((item) =>
      item.id === updateItem.id ? updateItem : item
    );
    this.setState({
      spendingItems: updateItems,
    });
  };

  componentDidMount() {
    this.fetchAll();
    this.setState({
      isLoggedIn: TokenService.hasAuthToken(),
    });
  }

  handleLogged = (x) => {
    this.setState({
      isLoggedIn: x,
    });
  };

  render() {
    const contextValues = {
      incomes: this.state.incomes,
      spendingLists: this.state.spendingLists,
      spendingItems: this.state.spendingItems,
      handleAddIncome: this.handleAddIncome,
      handleAddList: this.handleAddList,
      handleAddItem: this.handleAddItem,
      handleDeleteIncome: this.handleDeleteIncome,
      handleDeleteList: this.handleDeleteList,
      handleDeleteItem: this.handleDeleteItem,
      handleUpdateIncome: this.handleUpdateIncome,
      handleUpdateList: this.handleUpdateList,
      handleUpdateItem: this.handleUpdateItem,
      fetchAll: this.fetchAll,
      handleLogged: this.handleLogged,
      isLoggedIn: this.state.isLoggedIn,
    };
    return (
      <div className="app">
        <myContext.Provider value={contextValues}>
          <header className="app_header">
            <h1>
              <Link to={"/"}>Where is My Money?!</Link>
            </h1>
            <Nav />
          </header>
          <main className="app_main">
            <ErrorBoundary>
              <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/about" component={AboutPage} />
                <PrivateRoute
                  path="/incomes/:income_id"
                  component={IncomeDetail}
                />
                <PrivateRoute path="/incomes" component={IncomePage} />
                <PrivateRoute
                  path="/edit/incomes/:income_id"
                  component={EditIncome}
                />
                <PrivateRoute path="/add-income" component={AddIncome} />
                {/*spending page component will get the slist_id from state
            our alternative is to pass the slist_id props
            but it's to complicated 
            */}
                <PrivateRoute
                  path="/slists/:slist_id"
                  component={SpendingPage}
                />
                <PrivateRoute path="/slists" component={SpendingPage} />
                <PrivateRoute path="/add-list" component={AddSpendingList} />
                <PrivateRoute
                  path="/edit/slists/:slist_id"
                  component={EditSpendingList}
                />
                <PrivateRoute path="/add-item" component={AddSpendingItem} />
                <PrivateRoute
                  path="/edit/sitems/:sitem_id"
                  component={EditSpendingItem}
                />
                <PrivateRoute path="/report" component={ReportPage} />
                <PublicRoute path="/login" component={LoginPage} />
                <PublicRoute path="/register" component={RegistrationPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </ErrorBoundary>
          </main>
        </myContext.Provider>
      </div>
    );
  }
}

export default App;
