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

// }
//   document.getElementById("mySidenav").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
//   document.getElementById("book_store_title").style.fontSize = "6vw";
// };

//  Set the width of the side navigation to 0 and the left margin of the page content to 0 */
// closeNav = () => {
//   return{
//   mySidenav:style.width = "0";
//   "main").style.marginLeft = "0";
//     "book_store_title").style.fontSize = "8vw";
//   }
// };

// -------  end side bar -------
