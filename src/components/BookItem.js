import React from "react";

export default class BookItem extends React.Component {
  addToOrder = () => {
    this.props.addToOrder(this.props.book);
  };

  render() {
    return (
      <div className="bookItem row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <b>Title: {this.props.book.name}</b>
          <br />
          <i>Author: {this.props.book.author}</i>
          <br />
          <i>Description: {this.props.book.description}</i>
          <br />
          <i>Genre: {this.props.book.genre}</i>
          <br />
          <i>Price: {this.props.book.price}</i>
          <br />
        </div>
        <div className="col-md-4">
          <button className="ui positive button" onClick={this.addToOrder}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}
