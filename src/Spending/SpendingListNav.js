import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import myContext from '../Context/Context';

class SpendingListNav extends Component {
    static defaultProps= {
        history : {
            push : () => {}
        }
    }

    static contextType = myContext;

    handleClickDelete = e => {
        e.preventDefault()

        const listId= this.props.match.params.slist_id
        console.log(this.props)
    }

    render() {
        const {spendingLists = [] } = this.context;
        //console.log(spendingLists)

        return (
            <div>
                {spendingLists.map(list=> 
                <li key={list.id}>
                    <NavLink to={'/slists'}>
                        {list.category}
                    </NavLink>
                    <button onClick={this.handleClickDelete}>delete</button>
                </li>)}
                <Link to={'/'}><button>add</button></Link>
            </div>
        );
    }
}

export default SpendingListNav;