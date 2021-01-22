import React, { Component } from 'react';
import myContext from '../Context/Context';
import SpendingItem from './SpendingItem';

class SpendingList extends Component {
    static defaultProps = {
        match : {
            params :{}
        }
    }

    static contextType = myContext;

    render() {

        const { spendingItems = [] } = this.context;
        console.log(spendingItems)
        //console.log(spendingItems)
        const itemId = this.props.match.params
        console.log(itemId , typeof itemId)

        return (
            <div>
            
               <li>
                {spendingItems.map(item => 
                    <SpendingItem 
                        key={item.id}
                        history={this.props.history}
                        {...item}
                    />
                )}
               </li>
            </div>
        );
    }
}

export default SpendingList;