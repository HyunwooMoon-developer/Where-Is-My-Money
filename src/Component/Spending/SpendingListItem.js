import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../Context/Context'
import SpendingItem from './SpendingItem';
import './SpendingListItem.css'

class SpendingListItem extends Component {
    static defaultProps = {
       match : {
           params : {}
       }
    }

    static contextType = myContext;

    
    
    render() {

        const { spendingItems = [] } = this.context;
        //console.log(spendingItems )
        //get slist_id from context instead of props
        //context setup slist_id from state
        //console.log(spendingItems)
        const listId = Number(this.props.match.params.slist_id)
       // console.log(listId , typeof listId)
        const filterItem = spendingItems.filter(item => {
            if(!listId){
                return spendingItems
            }
            return item.category_id === listId
        })

        
        

        return (
            <div className="spending_list_item">           
               <li>
                {filterItem.map(filterItem => 
                    <SpendingItem 
                        key={filterItem.id}
                        history={this.props.history}
                        {...filterItem}
                    />
                )}
               </li>
                <Link to={'/add-item'}><button>add</button></Link>
            </div>
        );
    }
}

export default SpendingListItem;