import React, { Component } from "react";

export default class SideMenu extends Component {
  render() {
    return (
      <div className="sidenav" id="mySidenav">
        <a href="#" className="closebtn" onClick={this.props.closeNav}>
          &times;
        </a>
        <p style={{ color: "white" }}>here the side menu gonna be</p>
      </div>
    );
  }
}
