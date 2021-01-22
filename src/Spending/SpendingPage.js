import React, { Component } from 'react';
import SpendingList from './SpendingList';
import '../App.css';
class SpendingPage extends Component {
    render() {
        return (
            <div className="spending-main">
               <div className="spending-list">
                    <SpendingList />
                <section className="spending-right">
                    <ul>
                        <li>
                            <p>01.03.2021</p>
                            <p>KoreaTown Galleria <span>$ 60</span></p>
                        </li>
                        <li>
                            <p>01.03.2021</p>
                            <p>Beverly Center Shopping <span>$ 200</span></p>
                            <p>shirt : $ 20</p>
                            <p>pants : $ 20</p>
                            <p>shoes : $ 140</p>
                            <p> tax  : $ 20</p>
                        </li>
                    </ul>
                    <button>+</button>
                </section>
            </div>
            <div className="calender">
                <div className="month">
                     <ul>
                         <li className="prev">&#10094;</li>
                         <li className="next">&#10095;</li>
                         <li style={{textAlign : 'center'}}>January<span>2021</span></li>                     </ul>
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

export default SpendingPage;