import React, { Component } from "react";

class Filter extends Component {
  state = {
    value: ""
  };
  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input
          id="title-filter"
          type="text"
          value={this.state.value}
          onChange={this.handleFilter}
        />
      </div>
    );
  }
}

export default Filter;
