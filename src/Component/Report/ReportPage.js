import { format } from 'date-fns';
import React, { Component } from 'react';
import myContext from '../../Context/Context'
import './ReportPage.css'

class ReportPage extends Component {

    static defaultProps={
        history :{
            push :()=> {}
        }
    }

    static contextType = myContext;

    render() {
        const {incomes = [] , spendingItems= []} = this.context
       // console.log(incomes, spendingItems)
       let incomeTotal = 0;
       let spendingTotal = 0 ; 
       

        const incomeList = incomes.map(income => {
            const dailyWorkingHour = income.end_time - income.start_time
            const dailyWorkingIncome = dailyWorkingHour*income.hourly_payment
            const dailyTotal = dailyWorkingIncome + Number(income.daily_extra)
            //const TotalIncome = incomes.dailyTotal;
            incomeTotal += dailyTotal
            return(
                <li key={income.id}>
                    <h3>Date : {format(new Date(income.date_created), 'MM/dd/yyyy')}</h3>
                    <p>Working Hour : {dailyWorkingHour} h</p>
                    <p>Daily Labor Cost : $ {dailyWorkingIncome}</p>
                    <p>Extra Income : $ {income.daily_extra}</p>
                    <p>Daily Total : $ {dailyTotal.toFixed(2)}</p>
                </li>
            )
        })

        const spendingItemList = spendingItems.map(item=> {
            spendingTotal += Number(item.spending)
            return(
                <li key={item.id}>
                    <h3>Where To Use : {item.item_name}</h3>
                    <h5>Date : {format(new Date(item.date_created), 'MM/dd/yyyy')}</h5>
                    <p>Detail :  {item.content}</p>
                    <p>Spending : $ {item.spending}</p>
                </li>
            )
        })

        
        return (
            <div className="report_page">
                 <div className="report_total">
                     <h3>Total In Your Wallet  : $ {(incomeTotal - spendingTotal).toFixed(2)}</h3>
                </div>
                <div className="report_income_spending">
                    <div className="report_income">
                        <div className="report_income_total">
                            <h3>Income Total : $ {incomeTotal}</h3>
                        </div>
                        <ul>
                            {incomeList}
                        </ul>
                    </div>
                    <div className="report_spending">
                        <div className="report_spending_total">
                            <h3>Spending Total : $ {spendingTotal}</h3>
                        </div>
                        <ul>    
                            {spendingItemList}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReportPage;