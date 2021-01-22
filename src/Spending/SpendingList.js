import React, { Component } from 'react';

class SpendingList extends Component {
    render() {
        return (
            <div>
                 <nav className="spending-left">
                    <ul>
                        <li>All</li>
                        <li>Home/Util</li>
                        <li>Restaurant</li>
                        <li className="selected">Shopping</li>
                        <li>Finance</li>
                        <li>etc</li>
                    </ul>
                </nav> 
            </div>
        );
    }
}

export default SpendingList;