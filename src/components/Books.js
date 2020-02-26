import React, { Component } from "react";
import BookCard from "./BookCard";

class Books extends Component {
  render() {
    return this.props.books.map(book => (
      <BookCard
        key={book.title}
        book={book}
        title={book.title}
        description={book.description}
      />
    ));
  }
}

export default Books;
