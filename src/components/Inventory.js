import React from 'react';
import BookItem from './BookItem';
import {base} from "../base";

class Inventory extends React.Component {

    constructor() {
        super();
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        this.ref = base.syncState('bookstore/books', {
            context: this,
            state: 'books'
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.ref)
    }

    render() {
        const bookList = this.state.books.map(book => {
            return <BookItem key={book.name} book={book} addToOrder={this.props.addToOrder}/>
        });
        return (
            <div className='inventory col-md-6'>
                <h2>Bookstore inventory</h2>
                {bookList}
            </div>
        )
    }
}

export default Inventory;