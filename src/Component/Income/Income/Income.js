import React, { Component } from 'react';
import myContext from '../../../Context/Context'
import './Income.css'
import { Link } from 'react-router-dom';
import {format} from 'date-fns';

class Income extends Component {
    static defaultProps = {
        history: {
            push: () => {}
        }
    };

    static contextType = myContext;

    
    render() {
        const {id, date_created, start_time, end_time, hourly_payment, daily_extra} = this.props;
        const workingHour = end_time - start_time;
        const normalDailyIncome = workingHour*hourly_payment;
        const dailyTotal = normalDailyIncome + Number(daily_extra);
        //console.log(this.props)
        //console.log(dailyTotal)
       
        return (
           <li className="income_item">
                <h3 className="income_title"><Link to={`/incomes/${id}`}>
                    {format(new Date(date_created), 'MM/dd/yyyy')}</Link></h3>
                <h3 className="income_title">Total : $ {dailyTotal.toFixed(2)}</h3>    
               <br />
           </li>
        );
    }
}

export default Income;

