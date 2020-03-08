import React, { Component } from "react";
import ModalBookImage from "./ModalBookImage";

class BookCard extends Component {
  state = {
    displayModal: false
  };

  render() {
    const { cover, title, description, language, detail } = this.props.book;
    return (
      <div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={cover} alt="book cover" />
            </div>
            <div className="flip-card-back">
              <h1>{title}</h1>
              <p>{description}</p>
              <p>Language: {language.toUpperCase()}</p>
              <button
                className="button"
                id={title}
                onClick={() => this.setState({ displayModal: true })}
              >
                Click To See Cover
              </button>
            </div>
          </div>
        </div>
        {this.state.displayModal && (
          <ModalBookImage
            title={title}
            detail={detail}
            closeModal={() => this.setState({ displayModal: false })}
          />
        )}
      </div>
    );
  }
}

export default BookCard;
