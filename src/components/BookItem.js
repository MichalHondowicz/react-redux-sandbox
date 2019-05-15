import React from 'react';

export default class BookItem extends React.Component {

    addToOrder = () => {
        this.props.addToOrder(this.props.book)
    };

    render() {
        return (
            <div>
                <b>{this.props.book.name}</b><br/>
                <i>{this.props.book.author}</i><br/>
                <img src={this.props.book.image} width='75' height='100' alt={this.props.book.name}/>
                <button className='btn btn-success' onClick={this.addToOrder}>Add to Cart</button>
            </div>
        )
    }
}