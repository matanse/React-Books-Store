import React, { Component } from "react";

class BookCard extends Component {
  render() {
    const { cover, title, description, language } = this.props.book;
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={cover} alt="book cover" />
          </div>
          <div className="flip-card-back">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>Language: {language.toUpperCase()}</p>
            <button className="button" id={title} onClick={this.props.}>
              Click To See Cover
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BookCard;
