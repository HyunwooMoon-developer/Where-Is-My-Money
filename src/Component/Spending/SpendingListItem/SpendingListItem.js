import React, { Component } from "react";
import { Link } from "react-router-dom";
import myContext from "../../../Context/Context";
import SpendingItem from "../SpendingItem/SpendingItem";
import "./SpendingListItem.css";

class SpendingListItem extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = myContext;

  render() {
    const { spendingItems = [] } = this.context;

    const listId = Number(this.props.match.params.slist_id);

    const filterItem = spendingItems.filter((item) => {
      if (!listId) {
        return spendingItems;
      }
      return item.category_id === listId;
    });

    return (
      <div className="spending_list_item">
        <li>
          {filterItem.map((filterItem) => (
            <SpendingItem
              key={filterItem.id}
              history={this.props.history}
              {...filterItem}
            />
          ))}
        </li>
        <Link to={"/add-item"}>
          <button className="add_sitems">add</button>
        </Link>
      </div>
    );
  }
}

export default SpendingListItem;
