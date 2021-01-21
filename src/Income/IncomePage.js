import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import myContext from '../Context/Context';
import Income from './Income';

//import IncomeDailyResult from './IncomeDailyResult';

class IncomePage extends Component {

    handleDeleteIncome= () => {
        this.props.history.push('/incomes')
    }

    static contextType = myContext;

    render() {
        const {incomes = []} = this.context;
        //console.log("incomes:", incomes )
        const incomeList = incomes.map(income=> {
            return (
                <Income
                    key={income.id}
                    id={income.id}
                    date_created={income.date_created}
                    onDeleteIncome ={this.handleDeleteIncome}
                    />
            )
        })
        return (
           <div>
               {incomeList}
               <Link to={'/add-income'}>
                   <button>Add</button>
               </Link>
            </div>
        );
    }
}

export default IncomePage;