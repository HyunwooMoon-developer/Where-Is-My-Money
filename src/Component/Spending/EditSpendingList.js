import React, { Component } from 'react';
import config from '../../config';
import myContext from '../../Context/Context'
import TokenService from '../../service/token -service';
import './EditSpendingList.css'

class EditSpendingList extends Component {
    static defaultProps = {
        history :{
            push : () => {}
        }
    }

    static contextType = myContext;

    state= {
        error : null,
        id : '',
        category : '',
        user_id : ''
    }

    componentDidMount(){
        const listId = this.props.match.params.slist_id
        //console.log(listId)
        fetch(`${config.API_ENDPOINT}/api/slists/${listId}`,{
            method: 'GET',
            headers : {
                'content-type'  :'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res => {
            if(!res.ok){
                return res.json().then(e=>Promise.reject(e))
            }
            return res.json()
        })
        .then(list=> {
            this.setState({
                id : list.id,
                category : list.category,
                user_id : list.user_id
            })
        })
        .catch(err=>{
            console.error(err)
        })
    }

    handleCategory = e => {
        this.setState({
            category  : e.target.value
        })
    }

    handleUpdate = e => {
        e.preventDefault();

        const listId = Number(this.props.match.params.slist_id)
        //console.log('listid' , listId)
        const {id, user_id, category} = this.state;
        const updateList = {id, user_id, category}

        fetch(`${config.API_ENDPOINT}/api/slists/${listId}`,{
            method : 'PATCH',
            headers : {
                'content-type' : 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body : JSON.stringify(updateList)
        })
        .then(res=>{
            if(!res.ok){
                return res.json().then(e=>Promise.reject(e))
            }
          //  return res.json()
        })
        .then(()=> {
            return this.context.fetchAll()
        })
        .then(()=>{
            return this.props.history.push('/slists')
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
            <div className="edit_spending_list_page">
            <h3>Edit List</h3>
            <form onSubmit={this.handleUpdate} className="edit_spending_list_form">
                <label htmlFor="category">Category : </label>
                <input type="text" name="category" id="category" onChange={this.handleCategory} required/>
                <br />
                <button type="submit">Edit</button>
                &nbsp; &nbsp;
                <button type="button" onClick={this.handleClickCancel}>Cancel</button>
            </form>
        </div>
        );
    }
}

export default EditSpendingList;