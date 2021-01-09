import React, { Component } from 'react';
import '../App.css';
//import IncomeDailyResult from './IncomeDailyResult';

class IncomePage extends Component {

    state={
        start: 0,
        end : 0,
        hourlyPay : 0,
        dailyExtra : 0,
    }
    handleStart = (e) => {
        this.setState({
            start : e.target.value
        })
    }

    handleEnd = (e) => {
        this.setState({
            end : e.target.value
        })
    }

    handleHourly = (e) => {
        this.setState({
            hourlyPay : e.target.value,
        })
    }

    handleDailyExtra = (e) => {
        console.log(e.target.value);
        this.setState({
            dailyExtra : e.target.value,
        })
    }

    render() {
        const {start, end, hourlyPay, dailyExtra} = this.state;
        const dailyWorkingHour = end - start;
        const dailtyTotal = Number(dailyWorkingHour*hourlyPay) + Number(dailyExtra);

        return (
            <div className="income-main">
                <div className="calculator">
                    <h2>JAN 03 2021</h2>
               
                    <h3>Income calculator</h3>
                        <br />
                    <form>    
                        <label htmlFor="start-time">Start Time : </label>
                        <select id="start-time" name="start-time" onChange={this.handleStart}>
                            <option value="0" name="12:00am">12:00 am</option>
                            <option value="0.5" name="12:30am">12:30am</option>
                            <option value="1" name="01:00am">01:00 am</option>
                            <option value="1.5" name="01:30am">01:30am</option>
                            <option value="2" name="02:00am">02:00 am</option>
                            <option value="2.5" name="02:30am">02:30am</option>
                            <option value="3" name="03:00am">03:00 am</option>
                            <option value="3.5" name="03:30am">03:30am</option>
                            <option value="4" name="04:00am">04:00 am</option>
                            <option value="4.5" name="04:30am">04:30am</option>
                            <option value="5" name="05:00am">05:00 am</option>
                            <option value="5.5" name="05:30am">05:30am</option>
                            <option value="6" name="06:00am">06:00 am</option>
                            <option value="6.5" name="06:30am">06:30am</option>
                            <option value="7" name="07:00am">07:00 am</option>
                            <option value="7.5" name="07:30am">07:30am</option>
                            <option value="8" name="08:00am">08:00 am</option>
                            <option value="8.5" name="08:30am">08:30am</option>
                            <option value="9" name="09:00am">09:00 am</option>
                            <option value="9.5" name="09:30am">09:30am</option>
                            <option value="10" name="10:00am">10:00 am</option>
                            <option value="10.5" name="10:30am">10:30am</option>
                            <option value="11" name="11:00am">11:00 am</option>
                            <option value="11.5" name="11:30am">11:30am</option>
                            <option value="12" name="12:00pm">12:00 pm</option>
                            <option value="12.5" name="12:30pm">12:30pm</option>
                            <option value="13" name="13:00pm">01:00 pm</option>
                            <option value="13.5" name="13:30pm">01:30pm</option>
                            <option value="14" name="14:00pm">02:00 pm</option>
                            <option value="14.5" name="14:30pm">02:30pm</option>
                            <option value="15" name="15:00pm">03:00 pm</option>
                            <option value="15.5" name="15:30pm">03:30pm</option>
                            <option value="16" name="16:00pm">04:00 pm</option>
                            <option value="16.5" name="16:30pm">04:30pm</option>
                            <option value="17" name="17:00pm">05:00 pm</option>
                            <option value="17.5" name="17:30pm">05:30pm</option>
                            <option value="18" name="18:00pm">06:00 pm</option>
                            <option value="18.5" name="18:30pm">06:30pm</option>
                            <option value="19" name="19:00pm">07:00 pm</option>
                            <option value="19.5" name="19:30pm">07:30pm</option>
                            <option value="20" name="20:00pm">08:00 pm</option>
                            <option value="20.5" name="20:30pm">08:30pm</option>
                            <option value="21" name="21:00pm">09:00 pm</option>
                            <option value="21.5" name="21:30pm">09:30pm</option>
                            <option value="22" name="22:00pm">10:00 pm</option>
                            <option value="22.5" name="22:30pm">10:30pm</option>
                            <option value="23" name="23:00pm">11:00 pm</option> 
                            <option value="23.5" name="23:30pm">11:30pm</option>   
                        </select>
                        <br />
                        <label htmlFor="end-time">End Time : </label>
                        <select id="end-time" name="end-time" onChange={this.handleEnd}>
                            <option value="0" name="12:00am">12:00 am</option>
                            <option value="0.5" name="12:30am">12:30am</option>
                            <option value="1" name="01:00am">01:00 am</option>
                            <option value="1.5" name="01:30am">01:30am</option>
                            <option value="2" name="02:00am">02:00 am</option>
                            <option value="2.5" name="02:30am">02:30am</option>
                            <option value="3" name="03:00am">03:00 am</option>
                            <option value="3.5" name="03:30am">03:30am</option>
                            <option value="4" name="04:00am">04:00 am</option>
                            <option value="4.5" name="04:30am">04:30am</option>
                            <option value="5" name="05:00am">05:00 am</option>
                            <option value="5.5" name="05:30am">05:30am</option>
                            <option value="6" name="06:00am">06:00 am</option>
                            <option value="6.5" name="06:30am">06:30am</option>
                            <option value="7" name="07:00am">07:00 am</option>
                            <option value="7.5" name="07:30am">07:30am</option>
                            <option value="8" name="08:00am">08:00 am</option>
                            <option value="8.5" name="08:30am">08:30am</option>
                            <option value="9" name="09:00am">09:00 am</option>
                            <option value="9.5" name="09:30am">09:30am</option>
                            <option value="10" name="10:00am">10:00 am</option>
                            <option value="10.5" name="10:30am">10:30am</option>
                            <option value="11" name="11:00am">11:00 am</option>
                            <option value="11.5" name="11:30am">11:30am</option>
                            <option value="12" name="12:00pm">12:00 pm</option>
                            <option value="12.5" name="12:30pm">12:30pm</option>
                            <option value="13" name="13:00pm">01:00 pm</option>
                            <option value="13.5" name="13:30pm">01:30pm</option>
                            <option value="14" name="14:00pm">02:00 pm</option>
                            <option value="14.5" name="14:30pm">02:30pm</option>
                            <option value="15" name="15:00pm">03:00 pm</option>
                            <option value="15.5" name="15:30pm">03:30pm</option>
                            <option value="16" name="16:00pm">04:00 pm</option>
                            <option value="16.5" name="16:30pm">04:30pm</option>
                            <option value="17" name="17:00pm">05:00 pm</option>
                            <option value="17.5" name="17:30pm">05:30pm</option>
                            <option value="18" name="18:00pm">06:00 pm</option>
                            <option value="18.5" name="18:30pm">06:30pm</option>
                            <option value="19" name="19:00pm">07:00 pm</option>
                            <option value="19.5" name="19:30pm">07:30pm</option>
                            <option value="20" name="20:00pm">08:00 pm</option>
                            <option value="20.5" name="20:30pm">08:30pm</option>
                            <option value="21" name="21:00pm">09:00 pm</option>
                            <option value="21.5" name="21:30pm">09:30pm</option>
                            <option value="22" name="22:00pm">10:00 pm</option>
                            <option value="22.5" name="22:30pm">10:30pm</option>
                            <option value="23" name="23:00pm">11:00 pm</option> 
                            <option value="23.5" name="23:30pm">11:30pm</option>   
                        </select>
                    
                    <div id="calculate">
                        <label htmlFor="hourly-payment">Hourly-payment : </label>
                        <input type="number" 
                                min="0.01"
                                step="0.01"
                                placeholder="$12.00" 
                                onChange={this.handleHourly}/>
                        <br />
                        <label htmlFor="extra-payment">Extra Income : </label>
                        <input type="number" 
                                min="0.01"
                                step="0.01"
                                placeholder="$10.00"
                                onChange={this.handleDailyExtra}
                                 />
                        <button type="submit">submit</button>
                    </div>
                </form>
                    <div>
                        <br />
                        <h3>Result</h3>
                        <br />
                        <div>
                        <ul>
                            <li><h5>Today's Working hour : {dailyWorkingHour} hr </h5></li>
                            <li><h5>Today's Exta Income: $ {dailyExtra}</h5></li>
                            <li><h5>Today's Income : $ {dailtyTotal} </h5></li>
                        </ul>
                        </div>
                        <br />
                        <p>-----------------------------</p>
                        <br />
                        <h5>This Month Working hour : 40 hr</h5>
                        <h5>This Month Extra Income: $ 4.00</h5>
                        <h5>This Month Total Income : $ 484.00</h5>
                    </div>
                </div>
                <div className="calender">
               <div className="month">
                    <ul>
                        <li className="prev">&#10094;</li>
                        <li className="next">&#10095;</li>
                        <li style={{textAlign : 'center'}}>January<span>2021</span></li>
                    </ul>
               </div>
               <ul className="weekdays">
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
               </ul>
               <ul className="days">
                   <li className="not-this-month">27</li>
                   <li className="not-this-month">28</li>
                   <li className="not-this-month">29</li>
                   <li className="not-this-month">30</li>
                   <li className="not-this-month">31</li>
                   <li>1</li>
                   <li>2</li>
                   <li className="active">3</li>
                   <li>4</li>
                   <li>5</li>
                   <li>6</li>
                   <li>7</li>
                   <li>8</li>
                   <li>9</li>
                   <li>10</li>
                   <li>11</li>
                   <li>12</li>
                   <li>13</li>
                   <li>14</li>
                   <li>15</li>
                   <li>16</li>
                   <li>17</li>
                   <li>18</li>
                   <li>19</li>
                   <li>20</li>
                   <li>21</li>
                   <li>22</li>
                   <li>23</li>
                   <li>24</li>
                   <li>25</li>
                   <li>26</li>
                   <li>27</li>
                   <li>28</li>
                   <li>29</li>
                   <li>30</li>
                   <li>31</li>
                   <li className="not-this-month">1</li>
                   <li className="not-this-month">2</li>
                   <li className="not-this-month">3</li>
                   <li className="not-this-month">4</li>
                   <li className="not-this-month">5</li>
                   <li className="not-this-month">6</li>
               </ul>
            </div>
            </div>
        );
    }
}

export default IncomePage;