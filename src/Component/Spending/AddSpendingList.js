import React, { Component } from 'react';
import config from '../../config';
import myContext from '../../Context/Context'
import TokenService from '../../service/token -service';

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
            <div>
                <h2>Add List</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="category">Category : </label>
                    <input type="text" name="category" id="category" required/>
                    <button type="submit">Add</button>
                    <button type="button" onClick={this.handleClickCancel}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default AddSpendingList;