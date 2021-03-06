import React, { Component } from "react";
import config from "../../../config";
import myContext from "../../../Context/Context";
import TokenService from "../../../service/token -service";
import "./EditSpendingItem.css";

class EditSpendingItem extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  state = {
    error: null,
    id: "",
    category_id: "",
    item_name: "",
    spending: "",
    content: "",
  };

  static contextType = myContext;

  handleCategory = (e) => {
    this.setState({
      category_id: e.target.value,
    });
  };

  handleItem = (e) => {
    this.setState({
      item_name: e.target.value,
    });
  };

  handleSpending = (e) => {
    this.setState({
      spending: e.target.value,
    });
  };

  handleContent = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();

    this.setState({
      error: null,
    });

    const itemId = Number(this.props.match.params.sitem_id);
    const { id, category_id, item_name, spending, content } = this.state;
    const updateItem = { id, category_id, item_name, spending, content };

    fetch(`${config.API_ENDPOINT}/api/sitems/${itemId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(updateItem),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
        // return res.json()
      })
      .then((item) => {
        return this.context.fetchAll();
      })
      .then(() => {
        this.props.history.push("/slists");
      })
      .catch((res) =>
        this.setState({
          error: res.error,
        })
      );
  };

  handleClickCancel = () => {
    this.props.history.push("/slists");
  };

  render() {
    const { error } = this.state;
    const { spendingLists = [] } = this.context;
    const optionLists = spendingLists.map((list) => (
      <option key={list.id} value={list.id}>
        {list.category}
      </option>
    ));
    return (
      <div className="edit_spending_item_page">
        <h3>Edit Item</h3>
        <form onSubmit={this.handleUpdate} className="edit_spending_item_form">
          <div role="alert">
            {error && <p className="red">{error.message}</p>}
          </div>
          <label htmlFor="item_name">Title : </label>
          <input
            type="text"
            name="item_name"
            id="item_name"
            onChange={this.handleItem}
            required
          />
          <br />
          <label htmlFor="spending">Spending : </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="spending"
            name="spending"
            onChange={this.handleSpending}
            required
          />
          <br />
          <label htmlFor="content">Detail : </label>
          <textarea id="content" name="content" onChange={this.handleContent} />
          <br />
          <label htmlFor="category_id">Category</label>
          &nbsp; &nbsp;
          <select
            id="category_id"
            name="category_id"
            onChange={this.handleCategory}
            value={this.state.value}
          >
            <option value={null}>...</option>
            {optionLists}
          </select>
          <br />
          <button type="submit" className="edit_sitems_edit">
            Submit
          </button>
          &nbsp; &nbsp;
          <button
            type="button"
            onClick={this.handleClickCancel}
            className="edit_sitems_cancel"
          >
            cancel
          </button>
        </form>
      </div>
    );
  }
}

export default EditSpendingItem;
