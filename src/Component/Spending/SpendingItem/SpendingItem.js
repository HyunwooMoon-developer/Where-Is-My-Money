import { format } from 'date-fns';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../../../config';
import myContext from '../../../Context/Context'
import TokenService from '../../../service/token -service';
import './SpendingItem.css'

class SpendingItem extends Component {
    static defaultProps= {
        history: {
            push : () => {}
        }
    };
    // the slist_id is in state 
    
    static contextType = myContext;

    handleClickDelete = e => {
        e.preventDefault();

        const itemId = this.props.id;
        //console.log(itemId)

        fetch(`${config.API_ENDPOINT}/api/sitems/${itemId}`, {
            method : 'DELETE' , 
            headers : {
                'content-tpye' : 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        })
        .then(res => {
            if(!res.ok){
                return res.json().then(e=> Promise.reject(e))
            }
            //return res.json()
        })
        .then(()=>{
            return this.context.fetchAll()
        })
        .then(()=> {
            return this.props.history.push('/slists')
        })
        .catch(err=> {
            console.error(err)
        })

    }

    render() {
        const {id, date_created,item_name, spending, content} = this.props;
      //  console.log(category_id)
      // the slist_id is in state 
        return (
            <div className="spending_item_box">
                <div className="spending_item_box_left">
                <h3>{item_name}</h3>
                <p>Date : {format(new Date(date_created), 'MM/dd/yyyy')}</p>
                <p> Spending :  ${spending}</p>
                <p>Detail : {content}</p>
                </div>
                <div className="spending_item_box_right">
                    <br/>
                        <Link to={`/edit/sitems/${id}`} ><button className="edit_sitems">Edit</button></Link>
                    <br/>
                    <br/>
                    <br/>          
                    <button onClick={this.handleClickDelete} className="delete_sitems">Delete</button>
                </div>
            </div>
        );
    }
}

export default SpendingItem;