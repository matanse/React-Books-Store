import React, { Component } from "react";
import BookCard from "./BookCard";

class Books extends Component {
  render() {
    return this.props.books.map(book => (
      <BookCard book={book} key={book} openModal={this.props.openModal} />
    ));
  }
}

export default Books;
