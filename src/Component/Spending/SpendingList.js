import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
import myContext from '../../Context/Context'
import TokenService from '../../service/token -service';

class SpendingList extends Component {
    static defaultProps ={
        history : {
            push : () => {}
        },

    };
    
    static contextType = myContext;

    handleClickDelete = e => {
        e.preventDefault();

        const listId = this.props.id
        //console.log(listId)
        
        fetch(`${config.API_ENDPOINT}/api/slists/${listId}`, {
            method : 'DELETE',
            headers : {
                'content-type'  : 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        })
        .then(res => {
            if(!res.ok){
                return res.json().then(e => Promise.reject(e))
            }
        })
        .then(()=>{
            return this.context.fetchAll()
        })
        .then(()=> {
            return this.props.history.push('/slits')
        })
        .catch(err=> {
            console.error(err)
        })
    
    }

    render() {
        //we need to save the 'slist_id' to state somewhere before we route the component
        //
        const {id, category} = this.props;
        return (
            <div>
               <Link to={`/slists/${id}`}><h3>{category}</h3></Link> 
               <Link to={`/edit/slists/${id}`}><button>Edit</button></Link>             
               &nbsp; 
               <button onClick={this.handleClickDelete}>Delete</button>
            </div>
        );
    }
}

export default SpendingList;