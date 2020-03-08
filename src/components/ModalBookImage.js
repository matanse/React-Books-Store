import React, { Component } from "react";

export default class ModalBookImage extends Component {
  render() {
    const { title, detail } = this.props;
    console.log("title", detail);
    return (
      <div className="modal" id={title}>
        <div className="modal-content">
          <div className="top-modal-nav">
            <button className="modal-top-btn">previous</button>
            <button className="modal-top-btn">
              <span
                className="modal-close-btn"
                onClick={this.props.closeModal.bind(this, title)}
              >
                &times;
              </span>
            </button>
            <button className="modal-top-btn">next</button>
          </div>
          <img src={detail} alt="Book Cover" />
        </div>
      </div>
    );
  }
}
