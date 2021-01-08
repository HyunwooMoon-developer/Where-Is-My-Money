import React, { Component } from 'react';

class ReportPage extends Component {
    render() {
        return (
            <div className="report-main">
                 <div className="select-report">
                            <h2>Monthly Income/Spending History</h2>
                        <br />
                        <form>
                            <label htmlFor="select-month">Select Month : </label>
                            <select id="select-month" name="select-month">
                                <option value="">Jan</option>
                                <option value="">Feb</option>
                                <option value="">Mar</option>
                                <option value="">Apr</option>
                                <option value="">May</option>
                                <option value="">Jun</option>
                                <option value="">Jul</option>
                                <option value="">Aug</option>
                                <option value="">Sep</option>
                                <option value="">Oct</option>
                                <option value="">Nov</option>
                                <option value="">Dec</option>
                            </select>
                            <button type="submit">Search</button>
                            </form>
                        </div>
                            <div className="results">
                                <ul>
                                    <li>
                                        <h3>Income  : $ 1,800.00 </h3>
                                        <div className="report-income">
                                            <div className="report-income-detail">
                                        <h5>01.01.2021 : $ 600.00</h5>
                                        <p>Normal Income: $ 500.00</p>
                                        <p>Extra Income : $ 100.00</p>
                                            </div>
                                        <h5>01.02.2021 : $ 600.00</h5>
                                        <h5>01.03.2021 : $ 600.00</h5>
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Spending  : $ 800.00 </h3>
                                        <div className="report-spending">
                                            <div className="report-spending-detail"> 
                                            <h5>01.01.2021 : $ 300.00</h5>
                                            <p>Home/Util : $ 60.00</p>
                                            <p>Restaurant : $ 60.00</p>
                                            <p>Shopping : $ 60.00</p>
                                            <p>Finance : $ 60.00</p>
                                            <p>etc : $ 60.00</p>
                                            </div>
                                        <h5>01.02.2021 : $ 300.00</h5>
                                        <h5>01.03.2021 : $ 200.00</h5>
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Total In Your Pocket  :  $ 1,000.00 </h3>
                                    </li>
                                </ul>
                            </div>
            </div>
        );
    }
}

export default ReportPage;