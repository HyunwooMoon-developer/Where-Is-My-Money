import React, { Component } from 'react';
import '../App.css';

class IncomePage extends Component {
    render() {
        return (
            <div className="income-main">
                <div className="calculator">
                    <h2>JAN 03 2021</h2>
               
                    <h3>Income calculator</h3>
                    <form id="calculate">
                        <label htmlFor="hourly-payment">Hourly-payment : </label>
                        <input type="number" placeholder="$12.00" />
                        <button type="submit">submit</button>
                    </form>
                        <br />
                    <form>    
                        <label htmlFor="start-time">Start Time : </label>
                        <select id="start-time" name="start-time">
                            <option value="">12:00 am</option>
                            <option value="">01:00 am</option>
                            <option value="">02:00 am</option>
                            <option value="">03:00 am</option>
                            <option value="">04:00 am</option>
                            <option value="">05:00 am</option>
                            <option value="">06:00 am</option>
                            <option value="">07:00 am</option>
                            <option value="">08:00 am</option>
                            <option value="">09:00 am</option>
                            <option value="">10:00 am</option>
                            <option value="">11:00 am</option>
                            <option value="">12:00 pm</option>
                            <option value="">01:00 pm</option>
                            <option value="">02:00 pm</option>
                            <option value="">03:00 pm</option>
                            <option value="">04:00 pm</option>
                            <option value="">05:00 pm</option>
                            <option value="">06:00 pm</option>
                            <option value="">07:00 pm</option>
                            <option value="">08:00 pm</option>
                            <option value="">09:00 pm</option>
                            <option value="">10:00 pm</option>
                            <option value="">11:00 pm</option>    
                        </select>
                        <button type="submit">Start</button>
                        <br />
                        <label htmlFor="end-time">End Time : </label>
                        <select id="end-time" name="end-time">
                            <option value="">12:00 am</option>
                            <option value="">01:00 am</option>
                            <option value="">02:00 am</option>
                            <option value="">03:00 am</option>
                            <option value="">04:00 am</option>
                            <option value="">05:00 am</option>
                            <option value="">06:00 am</option>
                            <option value="">07:00 am</option>
                            <option value="">08:00 am</option>
                            <option value="">09:00 am</option>
                            <option value="">10:00 am</option>
                            <option value="">11:00 am</option>
                            <option value="">12:00 pm</option>
                            <option value="">01:00 pm</option>
                            <option value="">02:00 pm</option>
                            <option value="">03:00 pm</option>
                            <option value="">04:00 pm</option>
                            <option value="">05:00 pm</option>
                            <option value="">06:00 pm</option>
                            <option value="">07:00 pm</option>
                            <option value="">08:00 pm</option>
                            <option value="">09:00 pm</option>
                            <option value="">10:00 pm</option>
                            <option value="">11:00 pm</option>
                        </select>
                        <button type="submit">End</button>

                    </form>
                    <div>
                        <br />
                        <h3>Result</h3>
                        <br />
                        <h5>Today's Working hour : 8 hr </h5>
                        <h5>Today's Exta Income: $ 4.00</h5>
                        <h5>Today's Income : $ 100.00 </h5>
                        
                        <br />
                        <p>-----------------------------</p>
                        <br />
                        <h5>This Week's Working hour : 40 hr</h5>
                        <h5>This Week's Extra Income: $ 4.00</h5>
                        <h5>This Week's Income : $ 484.00</h5>
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