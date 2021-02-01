import { format } from "date-fns";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../../../config";
import myContext from "../../../Context/Context";
import TokenService from "../../../service/token -service";
import "./SpendingItem.css";

class SpendingItem extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  // the slist_id is in state

  static contextType = myContext;

  state = {
    error: null,
  };

  handleClickDelete = (e) => {
    e.preventDefault();
    this.setState({
      error: null,
    });

    const itemId = this.props.id;

    fetch(`${config.API_ENDPOINT}/api/sitems/${itemId}`, {
      method: "DELETE",
      headers: {
        "content-tpye": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
        //return res.json()
      })
      .then(() => {
        return this.context.fetchAll();
      })
      .then(() => {
        return this.props.history.push("/slists");
      })
      .catch((res) =>
        this.setState({
          error: res.error,
        })
      );
  };

  render() {
    const { error } = this.state;
    const { id, date_created, item_name, spending, content } = this.props;
    // the slist_id is in state
    return (
      <div className="spending_item_box">
        <div className="spending_item_box_left">
          <div role="alert">
            {error && <p className="red">{error.message}</p>}
          </div>
          <h3>{item_name}</h3>
          <p>Date : {format(new Date(date_created), "MM/dd/yyyy")}</p>
          <p> Spending : ${spending}</p>
          <p>Detail : {content}</p>
        </div>
        <div className="spending_item_box_right">
          <br />
          <Link to={`/edit/sitems/${id}`}>
            <button className="edit_sitems">Edit</button>
          </Link>
          <br />
          <br />
          <br />
          <button onClick={this.handleClickDelete} className="delete_sitems">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default SpendingItem;
