import React, { Component } from 'react';
import config from '../../config';
import myContext from '../../Context/Context'
import './Income.css'
import { Link } from 'react-router-dom';
import TokenService from '../../service/token -service';
import {format} from 'date-fns';

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

        //console.log(incomeId)
        fetch(`${config.API_ENDPOINT}/api/incomes/${incomeId}`,{
            method : `DELETE`,
            headers : {
                'content-type' : 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
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
           <li className="income_item">
               <h3 className="income_title"><Link to={`/incomes/${id}`}>Date : {date_created} </Link></h3>
               <i className="fas fa-mouse-pointer"> Click here</i>
                <Link to={`/edit/incomes/${id}`}><button className="fas fa-edit"></button></Link>
                <button
               type="button"
               onClick={this.handleCilickDelete}
               className="fas fa-trash-alt"
               >
                </button>
           </li>
        );
    }
}

export default Income;