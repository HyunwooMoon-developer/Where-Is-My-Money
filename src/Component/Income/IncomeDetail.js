/* eslint-disable no-undef */
//import { number } from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../Context/Context'
import Income from './Income';
//import {format} from 'date-fns';
import './IncomeDetail.css'

class IncomeDetail extends Component {
    static defaultProps={
        history : {
            push : ()=>{}
        },
        match: {
            params : {}
        }
    }

    

    static contextType = myContext;

    handleDeleteIncome = () => {
        this.props.history.push('/incomes')
    }

    render() {
        const {incomes =[]} = this.context;
        const incomeId = Number(this.props.match.params.income_id)
       //console.log("income/incomeId : ", incomes, incomeId, typeof incomeId)
        const detailIncome = incomes.find(inc=> 
           inc.id === incomeId
       ) || {id:''}
       //console.log('detailIncome', detailIncome , detailIncome.start_time)
        //ßconsole.log(detailIncome);
       //const date = format(new Date(detailIncome.date_created), 'yyyy-MM-dd');
       const start_time = detailIncome.start_time
       const end_time = detailIncome.end_time
       const hourly_payment = detailIncome.hourly_payment
       const daily_extra = detailIncome.daily_extra
       const dailyWorkingHour = end_time - start_time
       const dailyTotalIncome = Number(dailyWorkingHour*hourly_payment) + Number(daily_extra)
        //console.log(detailIncome)
        if(!detailIncome.date_created){
            return 'LOADING'
        }
        return (
            <div className="income_detail">
                <div>
                    <ul className="income_detail_list">
                    <div className="income_back">
                        <Link to={'/incomes'}><i className="fas fa-arrow-circle-left">Back</i></Link>
                    </div>
                        <Income 
                            key={detailIncome.id}
                            id={detailIncome.id}
                            date_created={detailIncome.date_created}
                            ondeleteIncome={this.handleDeleteIncome}
                        />
                        <li>start_time : {start_time} </li>
                        <li>end_time= {end_time}</li>
                        <li>hourly_payment= $ {hourly_payment}</li>
                        <li>daily_extra= $ {daily_extra}</li>
                        <li>Today's Woriking Hour : {dailyWorkingHour} hr</li>
                        <li>Today's total Income : $ {dailyTotalIncome}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default IncomeDetail;

/*
start_time={detailIncome.start_time}
                    end_time={detailIncome.end_time}
                    hourly_payment={detailIncome.hourly_payment}
                    daily_extra={detailIncome.daily_extra}
*/