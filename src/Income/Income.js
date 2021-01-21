import React, { Component } from 'react';
import config from '../config';
import myContext from '../Context/Context';
//import {format} from 'date-fns';
import { Link } from 'react-router-dom';

class Income extends Component {
    static defaultProps = {
        history: {
            push: () => {}
        }
    };

    static contextType = myContext;

    handleCilickDelete = e => {
        e.preventDefault();

        const incomeId = this.props.id;

        console.log(incomeId)
        fetch(`${config.API_ENDPOINT}/api/incomes/${incomeId}`,{
            method : `DELETE`,
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(res=> {
            if(!res.ok){
                return res.json().then(e=> Promise.reject(e))
            }
            //return res.json()
        })
        .then(()=> {
            return this.context.fetchAll()
        })
        .then(()=> {
            return this.props.history.push('/incomes')
        })
        .catch(err=> {
            console.error(err)
        })
    }    

    render() {
        const {id, date_created} = this.props;
        return (
           <li>
               <h3><Link to={`/incomes/${id}`}>{id}</Link></h3>
                <h5>created date : {date_created}</h5>
                <button
               type="button"
               onClick={this.handleCilickDelete}
               >
                Delete</button>
           </li>
        );
    }
}

export default Income;