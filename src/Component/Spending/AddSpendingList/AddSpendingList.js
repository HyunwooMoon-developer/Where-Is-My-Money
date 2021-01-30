import React, { Component } from 'react';
import config from '../../../config';
import myContext from '../../../Context/Context'
import TokenService from '../../../service/token -service';
import './AddSpendingList.css'

class AddSpendingList extends Component {
    static defaultProps = {
        history: {
            push : () => {}
        }
    }

    static contextType = myContext;
    
    handleSubmit = e => {
        e.preventDefault();

        const newList = {

            category : e.target['category'].value,
        }
        //console.log('newlist' , newList)

        fetch(`${config.API_ENDPOINT}/api/slists`, {
            method : 'POST',
            headers: {
                'content-type' : 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body : JSON.stringify(newList)
        })
        .then(res=> {
            if(!res.ok){
                return res.json().then(e=> Promise.reject(e))
                }
                return res.json()
        })
        .then(list=> {
            this.context.handleAddList(list)
            this.props.history.push('/slists')
        })
        .catch(err=>{
            console.error(err)
        })
    }

    handleClickCancel = () => {
        this.props.history.push('/slists')
    }

    render() {
        return (
            <div className="add_spending_list_page">
                <h3>Add List</h3>
                <form onSubmit={this.handleSubmit} className="add_spending_list_form">
                    <label htmlFor="category">Category : </label>
                    <input type="text" name="category" id="category" required/>
                    <br/>
                    <button type="submit" className="add_slists_add">Add</button>
                    &nbsp; &nbsp;
                    <button type="button" onClick={this.handleClickCancel} className="add_slists_cancel">Cancel</button>
                </form>
            </div>
        );
    }
}

export default AddSpendingList;