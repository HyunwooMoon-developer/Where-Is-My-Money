import React, { Component } from 'react';
import config from '../../config'
import myContext from '../../Context/Context'

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
                'content-type' : 'application/json'
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
            <div>
                <h2>Add Item</h2>
                <form onSubmit={this.handleSubmit}> 
                    <label htmlFor="item_name">Title : </label>
                    <input type="text" name="item_name" id="item_name" required/>
                    <br />
                    <label htmlFor="spending">Spending : </label>
                    <input type="number" 
                            min="0.01"
                            step="0.01"
                            id="spending"
                            name="spending" 
                            required/>
                    <br />
                    <label htmlFor="content">Detail</label>
                    <textarea id="content" name="content" />
                    <br />
                    <label htmlFor="category_id">Category</label>
                    <select id="category_id" name="category_id">  
                        {optionLists}
                    </select>
                    <br />
                    <button type="submit">Add</button>
                    <button type="button" onClick={this.handleClickCancel}>cancel</button>
                </form>
            </div>
        );
    }
}

export default AddSpendingItem;