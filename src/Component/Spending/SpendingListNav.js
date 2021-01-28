import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import myContext from '../../Context/Context'
import SpendingList from './SpendingList';
import './SpendingListNav.css'

class SpendingListNav extends Component {
    static defaultProps= {
        history : {
            push : () => {}
        }
    }

    static contextType = myContext;


    render() {
        const {spendingLists = [] } = this.context;
        //console.log(spendingLists)
        

        return (
            <div className="spending_list_nav">
                <li><Link to={'/slists'}><h3>All</h3></Link></li>
                <li>
                {spendingLists.map(list=>
                    <SpendingList 
                        key={list.id}
                        history={this.props.history}
                        {...list}
                    />)}
                    <br />
                </li>
            </div>
        );
    }
}

export default SpendingListNav;