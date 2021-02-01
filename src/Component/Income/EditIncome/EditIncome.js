import React, { Component } from "react";
import config from "../../../config";
import myContext from "../../../Context/Context";
import TokenService from "../../../service/token -service";
import "./EditIncome.css";

class EditIncome extends Component {
  static contextType = myContext;
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  state = {
    error: null,
    id: "",
    start_time: "",
    end_time: "",
    hourly_payment: "",
    daily_extra: "",
    user_id: "",
  };

  handleStarting = (e) => {
    this.setState({
      //start_time : e.target['start_time'].value
      start_time: e.target.value,
    });
  };

  handleEnding = (e) => {
    this.setState({
      // end_time : e.target['end_time'].value
      end_time: e.target.value,
    });
  };

  handleHourly = (e) => {
    this.setState({
      // hourly_payment : e.target['hourly_payment'].value
      hourly_payment: e.target.value,
    });
  };

  handleExtra = (e) => {
    this.setState({
      // daily_extra : e.target['daily_extra'].value
      daily_extra: e.target.value,
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    this.setState({
      error: null,
    });

    const incomeId = Number(this.props.match.params.income_id);
    const {
      id,
      start_time,
      end_time,
      hourly_payment,
      daily_extra,
      user_id,
    } = this.state;
    const updatedIncome = {
      id,
      start_time,
      end_time,
      hourly_payment,
      daily_extra,
      user_id,
    };

    
    fetch(`${config.API_ENDPOINT}/api/incomes/${incomeId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(updatedIncome),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
        //  return res.json()
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

  handleClickCancel = () => {
    this.props.history.push(
      `/incomes/${Number(this.props.match.params.income_id)}`
    );
  };

  render() {
    const { error } = this.state;
    // const {start_time, end_time, hourly_payment, daily_extra} = this.state
    return (
      <div className="income_edit">
        <h3>Edit Income</h3>
        <br />
        <form onSubmit={this.handleUpdate} className="income_edit_form">
          <div role="alert">
            {error && <p className="red">{error.message}</p>}
          </div>
          <label htmlFor="start_time">Start Time : </label>
          <select
            id="start_time"
            name="start_time"
            onChange={this.handleStarting}
            value={this.state.value}
            required
          >
            <option value={null}>...</option>
            <option value="0" name="12:00am">
              12:00 am
            </option>
            <option value="0.5" name="12:30am">
              12:30am
            </option>
            <option value="1" name="01:00am">
              01:00 am
            </option>
            <option value="1.5" name="01:30am">
              01:30am
            </option>
            <option value="2" name="02:00am">
              02:00 am
            </option>
            <option value="2.5" name="02:30am">
              02:30am
            </option>
            <option value="3" name="03:00am">
              03:00 am
            </option>
            <option value="3.5" name="03:30am">
              03:30am
            </option>
            <option value="4" name="04:00am">
              04:00 am
            </option>
            <option value="4.5" name="04:30am">
              04:30am
            </option>
            <option value="5" name="05:00am">
              05:00 am
            </option>
            <option value="5.5" name="05:30am">
              05:30am
            </option>
            <option value="6" name="06:00am">
              06:00 am
            </option>
            <option value="6.5" name="06:30am">
              06:30am
            </option>
            <option value="7" name="07:00am">
              07:00 am
            </option>
            <option value="7.5" name="07:30am">
              07:30am
            </option>
            <option value="8" name="08:00am">
              08:00 am
            </option>
            <option value="8.5" name="08:30am">
              08:30am
            </option>
            <option value="9" name="09:00am">
              09:00 am
            </option>
            <option value="9.5" name="09:30am">
              09:30am
            </option>
            <option value="10" name="10:00am">
              10:00 am
            </option>
            <option value="10.5" name="10:30am">
              10:30am
            </option>
            <option value="11" name="11:00am">
              11:00 am
            </option>
            <option value="11.5" name="11:30am">
              11:30am
            </option>
            <option value="12" name="12:00pm">
              12:00 pm
            </option>
            <option value="12.5" name="12:30pm">
              12:30pm
            </option>
            <option value="13" name="13:00pm">
              01:00 pm
            </option>
            <option value="13.5" name="13:30pm">
              01:30pm
            </option>
            <option value="14" name="14:00pm">
              02:00 pm
            </option>
            <option value="14.5" name="14:30pm">
              02:30pm
            </option>
            <option value="15" name="15:00pm">
              03:00 pm
            </option>
            <option value="15.5" name="15:30pm">
              03:30pm
            </option>
            <option value="16" name="16:00pm">
              04:00 pm
            </option>
            <option value="16.5" name="16:30pm">
              04:30pm
            </option>
            <option value="17" name="17:00pm">
              05:00 pm
            </option>
            <option value="17.5" name="17:30pm">
              05:30pm
            </option>
            <option value="18" name="18:00pm">
              06:00 pm
            </option>
            <option value="18.5" name="18:30pm">
              06:30pm
            </option>
            <option value="19" name="19:00pm">
              07:00 pm
            </option>
            <option value="19.5" name="19:30pm">
              07:30pm
            </option>
            <option value="20" name="20:00pm">
              08:00 pm
            </option>
            <option value="20.5" name="20:30pm">
              08:30pm
            </option>
            <option value="21" name="21:00pm">
              09:00 pm
            </option>
            <option value="21.5" name="21:30pm">
              09:30pm
            </option>
            <option value="22" name="22:00pm">
              10:00 pm
            </option>
            <option value="22.5" name="22:30pm">
              10:30pm
            </option>
            <option value="23" name="23:00pm">
              11:00 pm
            </option>
            <option value="23.5" name="23:30pm">
              11:30pm
            </option>
          </select>
          <br />
          <label htmlFor="end_time">End Time : </label>
          <select
            id="end_time"
            name="end_time"
            onChange={this.handleEnding}
            value={this.state.value}
            required
          >
            <option value={null}>...</option>
            <option value="0" name="12:00am">
              12:00 am
            </option>
            <option value="0.5" name="12:30am">
              12:30am
            </option>
            <option value="1" name="01:00am">
              01:00 am
            </option>
            <option value="1.5" name="01:30am">
              01:30am
            </option>
            <option value="2" name="02:00am">
              02:00 am
            </option>
            <option value="2.5" name="02:30am">
              02:30am
            </option>
            <option value="3" name="03:00am">
              03:00 am
            </option>
            <option value="3.5" name="03:30am">
              03:30am
            </option>
            <option value="4" name="04:00am">
              04:00 am
            </option>
            <option value="4.5" name="04:30am">
              04:30am
            </option>
            <option value="5" name="05:00am">
              05:00 am
            </option>
            <option value="5.5" name="05:30am">
              05:30am
            </option>
            <option value="6" name="06:00am">
              06:00 am
            </option>
            <option value="6.5" name="06:30am">
              06:30am
            </option>
            <option value="7" name="07:00am">
              07:00 am
            </option>
            <option value="7.5" name="07:30am">
              07:30am
            </option>
            <option value="8" name="08:00am">
              08:00 am
            </option>
            <option value="8.5" name="08:30am">
              08:30am
            </option>
            <option value="9" name="09:00am">
              09:00 am
            </option>
            <option value="9.5" name="09:30am">
              09:30am
            </option>
            <option value="10" name="10:00am">
              10:00 am
            </option>
            <option value="10.5" name="10:30am">
              10:30am
            </option>
            <option value="11" name="11:00am">
              11:00 am
            </option>
            <option value="11.5" name="11:30am">
              11:30am
            </option>
            <option value="12" name="12:00pm">
              12:00 pm
            </option>
            <option value="12.5" name="12:30pm">
              12:30pm
            </option>
            <option value="13" name="13:00pm">
              01:00 pm
            </option>
            <option value="13.5" name="13:30pm">
              01:30pm
            </option>
            <option value="14" name="14:00pm">
              02:00 pm
            </option>
            <option value="14.5" name="14:30pm">
              02:30pm
            </option>
            <option value="15" name="15:00pm">
              03:00 pm
            </option>
            <option value="15.5" name="15:30pm">
              03:30pm
            </option>
            <option value="16" name="16:00pm">
              04:00 pm
            </option>
            <option value="16.5" name="16:30pm">
              04:30pm
            </option>
            <option value="17" name="17:00pm">
              05:00 pm
            </option>
            <option value="17.5" name="17:30pm">
              05:30pm
            </option>
            <option value="18" name="18:00pm">
              06:00 pm
            </option>
            <option value="18.5" name="18:30pm">
              06:30pm
            </option>
            <option value="19" name="19:00pm">
              07:00 pm
            </option>
            <option value="19.5" name="19:30pm">
              07:30pm
            </option>
            <option value="20" name="20:00pm">
              08:00 pm
            </option>
            <option value="20.5" name="20:30pm">
              08:30pm
            </option>
            <option value="21" name="21:00pm">
              09:00 pm
            </option>
            <option value="21.5" name="21:30pm">
              09:30pm
            </option>
            <option value="22" name="22:00pm">
              10:00 pm
            </option>
            <option value="22.5" name="22:30pm">
              10:30pm
            </option>
            <option value="23" name="23:00pm">
              11:00 pm
            </option>
            <option value="23.5" name="23:30pm">
              11:30pm
            </option>
          </select>

          <div id="calculate">
            <label htmlFor="hourly_payment">Hourly-payment : </label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              id="hourly_payment"
              name="hourly_payment"
              placeholder="$12.00"
              onChange={this.handleHourly}
              required
            />
            <br />
            <label htmlFor="daily_extra">Extra Income : </label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              id="daily_extra"
              name="daily_extra"
              placeholder="$10.00"
              onChange={this.handleExtra}
            />
            <br />
            <button type="submit" className="submit_edit_income">
              submit
            </button>
            &nbsp; &nbsp; &nbsp;
            <button
              type="button"
              onClick={this.handleClickCancel}
              className="cancel_edit_income"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditIncome;
