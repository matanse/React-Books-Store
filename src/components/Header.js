import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="book-store-header">
        <a className="active" href="#">
          <span onClick={this.props.openNav}>Filter By...</span>
        </a>
        <div className='logo-container'>
          <img
            className="logo"
            id="logo1"
            source={require("../up-logo.png")}
            alt=""
          />
          <img
            className="logo"
            id="logo2"
            source={require("../down-logo.png")}
            alt=""
          />
        </div>
        <h1>header gos here</h1>
        <nav></nav>
      </div>
    );
  }
}
export default Header;
