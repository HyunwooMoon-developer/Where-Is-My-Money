import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './IncomePage.css'
import myContext from '../../Context/Context'
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
           <div className="income_page">
               <h2>Here Is Your Income !!</h2>
                    <ul className="income_list">
                        {incomeList}
                    </ul>
                    <Link to={'/add-income'}>
                         <button>Add</button>
                    </Link>
            </div>
        );
    }
}

export default IncomePage;