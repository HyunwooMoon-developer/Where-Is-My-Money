import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import myContext from '../Context/Context';

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
        console.log(listId)
        
        fetch(`/${config.API_ENDPOINT}/api/slists/${listId}`, {
            method : 'DELETE',
            headers : {
                'content-type'  : 'application/json'
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
        const {id, category} = this.props;
        return (
            <div>
               <Link to={`/slists/${id}`}><h4>{category}</h4></Link> 
               <Link to={'/'}><button>edit</button></Link>             
               <button onClick={this.handleClickDelete}>delete</button>
            </div>
        );
    }
}

export default SpendingList;