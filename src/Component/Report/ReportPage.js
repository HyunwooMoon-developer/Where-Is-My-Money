import React, { Component } from 'react';
import myContext from '../../Context/Context'

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
                    <h4>Date : {income.date_created}</h4>
                    <p>Working Hour : {dailyWorkingHour} h</p>
                    <p>Daily Labor Cost : $ {dailyWorkingIncome}</p>
                    <p>Extra Income : $ {income.daily_extra}</p>
                    <p>Daily Total : $ {dailyTotal}</p>
                </li>
            )
        })

        const spendingItemList = spendingItems.map(item=> {
            spendingTotal += Number(item.spending)
            return(
                <li key={item.id}>
                    <h4>Date : {item.date_created}</h4>
                    <h4>Where To Use : {item.item_name}</h4>
                    <p>Detail :  {item.content}</p>
                    <p>Spending : $ {item.spending}</p>
                </li>
            )
        })

        
        return (
            <div className="report-main">
                            <div className="results">
                                <h3>{incomeTotal}</h3>
                                <ul>
                                    {incomeList}
                                </ul>
                                <h3>{spendingTotal}</h3>
                                <ul>    
                                  {spendingItemList}
                                </ul>
                                <h3>total  : {incomeTotal - spendingTotal}</h3>
                            </div>
            </div>
        );
    }
}

export default ReportPage;