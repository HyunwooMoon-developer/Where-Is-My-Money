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
            return this.props.onDeleteIncome();
        })
        .catch(err=> {
            console.error(err)
        })
    }    

    render() {
        const {id, date_created} = this.props;
        //console.log("date : ", date_created)
        //console.log(date)
       
        return (
           <li className="income_item">
               <h3 className="income_title"><Link to={`/incomes/${id}`}>
                    {format(new Date(date_created), 'MM/dd/yyyy')}</Link></h3>
               <br />
                <Link to={`/edit/incomes/${id}`}><button>Edit</button></Link>
                <button
               type="button"
               onClick={this.handleCilickDelete}
               >
                Delete
                </button>
           </li>
        );
    }
}

export default Income;

//format(new DATE(date_created))