import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="book-store-header">
        <a className="active" href="#">
          <span onClick={this.props.openNav}>Filter By...</span>
        </a>
        <div className="logo-container">
          <img
            className="logo"
            id="logo1"
            src={require("../components/logo-up.png")}
            alt=""
          />
          <img
            className="logo"
            id="logo2"
            src={require("../components/logo-down.png")}
            alt=""
          />
        </div>
        <h1>Crazy Book Store</h1>
        <nav id="search" class="navbar navbar-light bg-light">
          <form class="form-inline">
            <input
              id="search_input"
              class="form-control mr-sm-2"
              type="search"
              placeholder="type here"
              aria-label="Search"
              onKeyUp={this.props.searchBar}
            />
            <button
              id="search_button"
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={this.props.filterBySearch}
            >
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}
export default Header;
