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

        const { spendingItems = [], spendingLists = [] } = this.context;
        console.log(spendingItems , spendingLists)
        //console.log(spendingItems)
        const itemId = spendingLists.id
        console.log(itemId)
        

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