import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
import myContext from '../../Context/Context'
import TokenService from '../../service/token -service';

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
            <div>
                <h5>{item_name}</h5>
                <p>{spending}</p>
                <p>{content}</p>
                <p>{date_created}</p>
                <button onClick={this.handleClickDelete}>Delete</button>
                <Link to={`/edit/sitems/${id}`}><button>Edit</button></Link>
            </div>
        );
    }
}

export default SpendingItem;