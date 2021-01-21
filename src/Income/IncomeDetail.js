//import { number } from 'prop-types';
import React, { Component } from 'react';
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
        const incomeId = this.props.match.params.income_id
       console.log("income/incomeId : ", incomes, incomeId)
        const detailIncome = incomes.find(inc=> {
            //console.log(inc.id)
            return inc.income_id === incomeId
        }) || {id:''}

       // const {start_time} = detailIncome.start_time
       // const {end_time} = detailIncome.end_time
       // const {hourly_payment} = detailIncome.hourly_payment
       // const {daily_extra} = detailIncome.daily_extra
       // const {dailyWorkingHour} = end_time - start_time
       // const {dailyTotalIncome} = dailyWorkingHour*hourly_pament + daily_extra
        //console.log(detailIncome)
        return (
            <div>
                <Income 
                    key={detailIncome.id}
                    id={detailIncome.id}
                    date_created={detailIncome.date_created}
                    ondeleteIncome={this.handleDeleteIncome}
                />

                <h4>start_time=</h4>
                <br/>
                <h4>end_time=</h4>
                <br/>
                <h4>hourly_payment=</h4>
                <br/>
                <h4>daily_extra=</h4>
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