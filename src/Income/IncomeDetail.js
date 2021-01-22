/* eslint-disable no-undef */
//import { number } from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../Context/Context';
import Income from './Income';

class IncomeDetail extends Component {
    static defaultProps={
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
       console.log("income/incomeId : ", incomes, incomeId, typeof incomeId)
        const detailIncome = incomes.find(inc=> 
           inc.id === incomeId
       ) || {id:''}
       console.log('detailIncome', detailIncome , detailIncome.start_time)
        //ßconsole.log(detailIncome);
       const start_time = detailIncome.start_time
       const end_time = detailIncome.end_time
       const hourly_payment = detailIncome.hourly_payment
       const daily_extra = detailIncome.daily_extra
       const dailyWorkingHour = end_time - start_time
       const dailyTotalIncome = Number(dailyWorkingHour*hourly_payment) + Number(daily_extra)
        //console.log(detailIncome)
        return (
            <div>
                <div>
                    <Link to={'/incomes'}><button>Back</button></Link>
                </div>

                <Income 
                    key={detailIncome.id}
                    id={detailIncome.id}
                    date_created={detailIncome.date_created}
                    ondeleteIncome={this.handleDeleteIncome}
                />

                <h4>start_time : {start_time} </h4>
                <br/>
                <h4>end_time= {end_time}</h4>
                <br/>
                <h4>hourly_payment= $ {hourly_payment}</h4>
                <br/>
                <h4>daily_extra= $ {daily_extra}</h4>
                <br/>
                <h4>Today's Woriking Hour : {dailyWorkingHour}</h4>
                <br/>
                <h4>Today's total Income : $ {dailyTotalIncome}</h4>
                <br/>
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