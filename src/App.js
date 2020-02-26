import React, { Component } from "react";
import "./App.css";
import "./StructureStyle.css";
import "./CardsFunc.css";
import "./ModelFunc.css";
import "./SideMenu.css";
import "./SearchBar.css";
import "./DropdownFilter.css";
import axios from "axios";
import Books from "./components/Books";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    axios
      .get("https://api.myjson.com/bins/zyv02")
      .then(res => this.setState({ books: res.data.books }));
  }

  // ---------   bootstrap side bar ------

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  // openNav = () => {
  //   document.getElementById("mySidenav").style.width = "250px";
  //   document.getElementById("main").style.marginLeft = "250px";
  //   document.getElementById("book_store_title").style.fontSize = "6vw";
  // };

  // /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  // closeNav = () => {
  //   document.getElementById("mySidenav").style.width = "0";
  //   document.getElementById("main").style.marginLeft = "0";
  //   document.getElementById("book_store_title").style.fontSize = "8vw";
  // };

  // -------  end side bar -------

  render() {
    console.log(this.state.books);
    return (
      <div className="App">
        <div className="container">
          <div className="sidenav" id="mySidenav">
            {/* <a
              href="javascript:void(0)"
              class="closebtn"
              onClick={this.closeNav()}
            >
              &times;
            </a> */}
            <SideMenu />
          </div>

          <header>
            {/* <a class="active" href="#">
              { Use any element to open the sidenav  }
              <span onClick={this.openNav()}>Filter By...</span>
            </a> */}
            <Header />
          </header>

          <div id="main" className="row">
            <Books books={this.state.books} />
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
