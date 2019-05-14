import React from 'react';
import BookItem from './BookItem';

class Inventory extends React.Component {

    render() {
        const bookList = this.props.books.map(book => {
            return <BookItem book={book} addToOrder={this.props.addToOrder}/>
        });
        return (
            <div className='inventory col-md-4'>
                {bookList}
            </div>
        )
    }
}

export default Inventory;