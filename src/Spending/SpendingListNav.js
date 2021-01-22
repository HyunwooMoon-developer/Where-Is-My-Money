import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import myContext from '../Context/Context';
import SpendingList from './SpendingList';

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
            <div>
                <li><Link to={'/slists'}>All</Link></li>
                <li>
                {spendingLists.map(list=>
                    <SpendingList 
                        key={list.id}
                        history={this.props.history}
                        {...list}
                    />)}
                <Link to={'/'}><button>add</button></Link>
                </li>
            </div>
        );
    }
}

export default SpendingListNav;