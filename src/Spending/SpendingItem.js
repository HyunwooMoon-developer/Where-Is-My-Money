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
            return this.props.history.push('/slists')
        })
        .catch(err=> {
            console.error(err)
        })

    }

    render() {
        const {date_created, item_name, spending, content} = this.props;
        //console.log(id)
        return (
            <div>
                <h5>{item_name}</h5>
                <p>{spending}</p>
                <p>{content}</p>
                <p>{date_created}</p>
                <Link to={'/slists'}><button>Edit</button></Link>
                <button onClick={this.handleClickDelete}>Delete</button>

            </div>
        );
    }
}

export default SpendingItem;