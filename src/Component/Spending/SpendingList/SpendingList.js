import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../../../config";
import myContext from "../../../Context/Context";
import TokenService from "../../../service/token -service";
import "./SpendingList.css";

class SpendingList extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  state = {
    hovering: false,
    error: null,
  };

  static contextType = myContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    this.setState({
      error: null,
    });

    const listId = this.props.id;

    fetch(`${config.API_ENDPOINT}/api/slists/${listId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
      })
      .then(() => {
        return this.context.fetchAll();
      })
      .then(() => {
        return this.props.history.push("/slits");
      })
      .catch((res) =>
        this.setState({
          error: res.error,
        })
      );
  };

  onMouseEnter = () => {
    this.setState({
      hovering: true,
    });
  };

  onMouseLeave = () => {
    this.setState({
      hovering: false,
    });
  };

  render() {
    //we need to save the 'slist_id' to state somewhere before we route the component
    //
    const { id, category } = this.props;
    const { error } = this.state;
    return (
      <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <Link to={`/slists/${id}`}>
          <h3>{category}</h3>
          <div role="alert">
            {error && <p className="red">{error.message}</p>}
          </div>
        </Link>
        {this.state.hovering ? (
          <Link to={`/edit/slists/${id}`}>
            <button className="edit_slists_button">Edit</button>
          </Link>
        ) : null}
        {this.state.hovering ? (
          <button
            onClick={this.handleClickDelete}
            className="delete_slists_button"
          >
            Delete
          </button>
        ) : null}
      </div>
    );
  }
}

export default SpendingList;
