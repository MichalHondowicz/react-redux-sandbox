import React from 'react';

class Inventory extends React.Component {


    render() {

        const bookList = this.props.books.map(book => {
           return <div>{book.name}</div>
        });
        return (
            <div className='inventory col-md-4'>
                {bookList}
            </div>
        )
    }
}

export default Inventory;