import React, { Component } from "react";
import "./App.css";
import "./StructureStyle.css";
import "./header.css";
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
    displayNav: false,
    books: []
  };

  componentDidMount() {
    axios
      .get("https://api.myjson.com/bins/zyv02")
      .then(res => this.setState({ books: res.data.books }));
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

  mainSideMenuOutStyle = () => {
    return {
      marginLeft: "250px"
    };
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <header>
            <Header openNav={() => this.setState({ displayNav: true })} />
          </header>
          {this.state.displayNav && (
            <SideMenu
              closeNav={() => {
                this.setState({ displayNav: false });
              }}
            />
          )}

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
