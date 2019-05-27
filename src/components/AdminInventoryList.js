import React from 'react';

export default class AdminInventoryList extends React.Component {


    render() {
        let bookList;

        if (this.props.books) {
            bookList = <ol>{this.props.books.map((book) => <li>{book.name} {book.author}</li>)}</ol>
        } else {
            bookList = <div>No books in inventory</div>
        }
        return (
            <div>
                {bookList}
            </div>
        )
    }
}
