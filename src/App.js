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
    books: [],
    search: "",
  };

  componentDidMount() {
    axios
      .get("https://api.jsonbin.io/b/5ea833484c87c3359a632938")
      .then((res) => this.setState({ books: res.data.books }));
  }

  mainSideMenuOutStyle = () => {
    return {
      marginLeft: "250px",
    };
  };

  searchBar = (e) => {
    let filter = e.target.value.toUpperCase();
    this.setState({ search: filter });
  };

  filterFunction = (e) => {
    let books = this.state.books;
    let arr = [];
    for (var i = 0; i < books.length; i++) {
      if (books[i].title.toUpperCase().includes(this.state.search)) {
        arr.push(books[i]);
      }
    }
    console.log(this.state);
    return arr;
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <header>
            <Header
              openNav={() => this.setState({ displayNav: true })}
              searchBar={this.searchBar}
              filterBySearch={this.filterBySearch}
            />
          </header>
          {this.state.displayNav && (
            <SideMenu
              closeNav={() => {
                this.setState({ displayNav: false });
              }}
            />
          )}

          <div id="main" className="row">
            <Books books={this.filterFunction()} />
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
