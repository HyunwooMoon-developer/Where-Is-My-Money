import React, { Component } from 'react';
import config from '../config';
import myContext from '../Context/Context';

class EditSpendingItem extends Component {
    static defaultProps = {
        history :{
            push : () => {}
        }
    }

    state = {
        error : null,
        id : '',
        category_id : '',
        item_name : '',
        spending : '',
        content : ''
    }

    static contextType = myContext;

    componentDidMount(){
        const itemId = this.props.match.params.slist_id
        console.log(itemId)
        fetch(`${config.API_ENDPOINT}/api/sitems/${itemId}`,{
            method: 'GET',
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
        .then(item=> {
            this.setState({
                id: item.id,
                category_id : item.category_id,
                item_name : item.item_name,
                spending : item.spending,
                content : item.content,
            })
        })
        .catch(err=>{
            console.error(err)
        })
    }

    handleCategory = e => {
        this.setState({
            category_id : e.target['category_id'].value
        })
    }

    handleItem = e => {
        this.setState({
            item_name : e.target['item_name'].value,
        })
    }

    handleSpending = e => {
        this.setState({
            spending : e.target['spending'].value,
        })
    }

    handleContent = e => {
        this.setState({
            content : e.target['content'].value,
        })
    }

    handleUpdate = e =>{
        e.preventDefault();

        const itemId = Number(this.props.match.params.id)
        const {id, category_id, item_name, spending, content} = this.state ; 
        const updateItem = {id, category_id, item_name, spending, content }
    
        fetch(`${config.API_ENDPOINT}/api/sitems/${itemId}`, {
            method : 'PATCH',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updateItem)
        })
        .then(res=> {
            if(!res.ok){
                return res.json().then(e=> Promise.reject(e))
            }
            return res.json()
        })
        .then(()=> {
            return this.context.fetchAll()
        })
        .then(()=>{
            this.props.history.push('/slists')
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
        return (
            <div>
            <h2>Edit Item</h2>
            <form onSubmit={this.handleUpdate}> 
                <label htmlFor="item_name">Title : </label>
                <input type="text" name="item_name" id="item_name" onChange={this.handleItem} required/>
                <br />
                <label htmlFor="spending">Spending : </label>
                <input type="number" 
                        min="0.01"
                        step="0.01"
                        id="spending"
                        name="spending" 
                        onChange={this.handleSpending}
                        required/>
                <br />
                <label htmlFor="content">Detail</label>
                <textarea id="content" name="content" onChange={this.handleContent} />
                <br />
                <label htmlFor="category_id">Category</label>
                <select id="category_id" name="category_id" onChange={this.handleCategory} value={this.state.value}>  
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

export default EditSpendingItem;