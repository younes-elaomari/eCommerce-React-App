import React, { Component } from "react";

class Search extends Component {
  render() {
    const { searchQuery, onSearch } = this.props;

    return (
      <div className="search">
        <div className="container">
          <h4 className="text-uppercase fw-normal">
            <span className="fw-normal color-primary">Find Your</span> Style In
            Three Distinctive Colletions.
          </h4>
          <div className="col-md-6 mt-4 m-auto s-box">
            <input
              value={searchQuery}
              onChange={(e) => onSearch(e.currentTarget.value)}
              className="form-control main"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
