/* eslint-disable no-undef */
//import { number } from 'prop-types';
import moment from "moment";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../../../config";
import myContext from "../../../Context/Context";
import TokenService from "../../../service/token -service";
import { format } from "date-fns";
import "./IncomeDetail.css";

class IncomeDetail extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
    match: {
      params: {},
    },
  };

  state = {
    error: null,
  };

  static contextType = myContext;

  handleCilickDelete = (e) => {
    e.preventDefault();
    this.setState({
      error: null,
    });

    const incomeId = this.props.match.params.income_id;

    fetch(`${config.API_ENDPOINT}/api/incomes/${incomeId}`, {
      method: `DELETE`,
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
        //return res.json()
      })
      .then(() => {
        return this.context.fetchAll();
      })
      .then(() => {
        return this.props.history.push("/incomes");
      })
      .catch((res) =>
        this.setState({
          error: res.error,
        })
      );
  };

  timeConvert = (num) => {
    const hours = Math.floor(num);
    const minutes = Math.round((num % 1) * 100) / 100;

    if (minutes === 0) {
      return moment(hours + ":" + minutes * 60 + "0", "LT");
    } else {
      return moment(hours + ":" + minutes * 60, "LT");
    }
  };

  render() {
    const { error } = this.state;
    const { incomes = [] } = this.context;
    const incomeId = Number(this.props.match.params.income_id);
    const detailIncome = incomes.find((inc) => inc.id === incomeId) || {
      id: "",
    };
    const id = detailIncome.id;
    const start_time = detailIncome.start_time;
    const end_time = detailIncome.end_time;
    const hourly_payment = detailIncome.hourly_payment;
    const daily_extra = detailIncome.daily_extra;
    const dailyWorkingHour = end_time - start_time;
    const dailyTotalIncome =
      Number(dailyWorkingHour * hourly_payment) + Number(daily_extra);
    const Start_time = this.timeConvert(Number(start_time));
    const End_time = this.timeConvert(Number(end_time));
    if (!detailIncome.date_created) {
      return "LOADING";
    }

    return (
      <div className="income_detail">
        <div>
          <ul className="income_detail_list">
            <div className="income_back">
              <Link to={"/incomes"}>
                <i className="fas fa-arrow-circle-left">Back</i>
              </Link>
            </div>
            <div className="income_detail_main">
              <div role="alert">
                {error && <p className="red">{error.message}</p>}
              </div>
              <h3>Total : $ {dailyTotalIncome.toFixed(2)}</h3>
              <h3>
                Date :{" "}
                {format(new Date(detailIncome.date_created), "MM/dd/yyyy")}
              </h3>
            </div>
            <li>Start Time : {Start_time._i} </li>
            <li>End Time : {End_time._i}</li>
            <li>Hourly Payment : $ {hourly_payment}</li>
            <li>Extra Income : $ {daily_extra}</li>
            <li>Today's Woriking Hour : {dailyWorkingHour} hr</li>
            <Link to={`/edit/incomes/${id}`}>
              <button className="edit_income">Edit</button>
            </Link>
            &nbsp; &nbsp; &nbsp;
            <button
              type="button"
              onClick={this.handleCilickDelete}
              className="delete_income"
            >
              Delete
            </button>
          </ul>
        </div>
      </div>
    );
  }
}

export default IncomeDetail;
