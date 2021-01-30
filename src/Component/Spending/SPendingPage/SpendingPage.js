import React, { Component } from 'react';
import SpendingListItem from '../SpendingListItem/SpendingListItem';
import SpendingListNav from '../SpendingListNav/SpendingListNav'
import myContext from '../../../Context/Context'
import './SpendingPage.css'
import { Link } from 'react-router-dom';

class SpendingPage extends Component {

    static contextType = myContext;

    render() {
        return (
            <div className="spending_page">
                    <div className="spending_list">
                        <ul>
                            <SpendingListNav />
                        </ul>
                        <div className="spending_list_add">

                        <Link to={'/add-list'}><button className="add_slists">Add</button></Link>
                        </div>
                    </div> 
                    <div className="spending_item">
                        <ul>
                    {/* one alternative is get the slist_id from state
                     and pass slist_id as props
                    */}
                            <SpendingListItem {...this.props}/>
                        </ul>
                    </div>
            </div>
        );
    }
}

export default SpendingPage;