import React, { Component } from 'react';
import config from '../../../config'
import myContext from '../../../Context/Context'
import TokenService from '../../../service/token -service';
import './AddSpendingItem.css'

class AddSpendingItem extends Component {
    static defaultProps = {
        history : {
            push : () => {}
        }
    }

    static contextType= myContext;

    handleSubmit = e => {
        e.preventDefault();

        const newItem = {
            user_id : 1,
            category_id : e.target['category_id'].value,
            item_name : e.target['item_name'].value,
            spending: e.target['spending'].value,
            content : e.target['content'].value,
            date_created : new Date(),
        }
        //console.log('newitem : ', newItem )

        fetch(`${config.API_ENDPOINT}/api/sitems`, {
            method : 'POST',
            headers : {
                'content-type' : 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body : JSON.stringify(newItem)
        })
        .then(res=>{
            if(!res.ok){
            return res.json().then(e=> Promise.reject(e))
            }
            return res.json()
        })
        .then(item=> {
            this.context.handleAddItem(item)
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
        const {spendingLists = [] }= this.context;
        const optionLists = spendingLists.map(list=> <option key={list.id}
                                                            value={list.id}>
                                                                {list.category}
                                                            </option>)
        //console.log(optionLists)
        return (
            <div className="add_spending_item_page">
                <h3>Add Item</h3>
                <form onSubmit={this.handleSubmit} className="add_spending_item_form"> 
                    <label htmlFor="item_name">Title : </label>
                 
                    <input type="text" name="item_name" id="item_name" required/>
                    <br />
                    <label htmlFor="spending">Spending : </label>
                
                    <input type="number" 
                            min="0.01"
                            step="0.01"
                            id="spending"
                            name="spending"
                            placeholder="$10.00"
                            required/>
                    <br />
                    <label htmlFor="content">Detail : </label>
              
                    <textarea id="content" name="content" />
                    <br />
                    <label htmlFor="category_id">Category</label>
                    &nbsp; &nbsp;
                    <select id="category_id" name="category_id">  
                        {optionLists}
                    </select>
                    <br />
                    <button type="submit" className="add_sitems_add">Add</button>
                    &nbsp; &nbsp;
                    <button type="button" onClick={this.handleClickCancel} className="add_sitems_cancel">cancel</button>
                </form>
            </div>
        );
    }
}

export default AddSpendingItem;