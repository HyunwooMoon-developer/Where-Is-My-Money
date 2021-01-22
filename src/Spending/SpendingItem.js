import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import myContext from '../Context/Context';

class SpendingItem extends Component {
    static defaultProps= {
        history: {
            push : () => {}
        }
    };

    static contextType = myContext;

    handleClickDelete = e => {
        e.preventDefault();

        const itemId = this.props.id;
        console.log(itemId)

        fetch(`${config.API_ENDPOINT}/api/sitems/${itemId}`, {
            method : 'DELETE' , 
            headers : {
                'content-tpye' : 'application/json'
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
            return this.props.history.push('/')
        })
        .catch(err=> {
            console.error(err)
        })

    }

    render() {
        const {id, date_created, item_name, spending, content} = this.props;
        //console.log(id)
        return (
            <div>
                <h2>{item_name}</h2>
                <h3>{spending}</h3>
                <h3>{content}</h3>
                <h3>{date_created}</h3>
                <Link to={'/slists'}><button>Edit</button></Link>
                <button onClick={this.handleClickDelete}>Delete</button>

            </div>
        );
    }
}

export default SpendingItem;