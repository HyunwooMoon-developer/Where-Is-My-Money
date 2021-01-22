import React, { Component } from 'react';
import myContext from '../Context/Context';

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
        const incomeList = incomes.map(income => {
            const dailyWorkingHour = income.end_time - income.start_time
            const dailyWorkingIncome = dailyWorkingHour*income.hourly_payment
            const dailyTotal = dailyWorkingIncome + Number(income.daily_extra)
            //const TotalIncome = incomes.dailyTotal;
            
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
                                <ul>
                                    {incomeList}
                                </ul>
                                <ul>    
                                  {spendingItemList}
                                </ul>
                            </div>
            </div>
        );
    }
}

export default ReportPage;