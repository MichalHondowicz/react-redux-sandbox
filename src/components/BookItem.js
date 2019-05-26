import React from 'react';

export default class BookItem extends React.Component {

    addToOrder = () => {
        this.props.addToOrder(this.props.book)
    };

    render() {
        return (
            <div className='bookItem row'>
                <div className='col-md-4'>
                    <img src={this.props.book.image} width='75' height='100' alt={this.props.book.name}/>
                </div>
                <div className='col-md-4'>
                    <b>{this.props.book.name}</b><br/>
                    <i>{this.props.book.author}</i><br/>
                    <i>{this.props.book.description}</i><br/>
                    <i>{this.props.book.genre}</i><br/>
                </div>
                <div className='col-md-4'>
                    <button className='btn btn-success' onClick={this.addToOrder}>Add to Cart</button>
                </div>
            </div>
        )
    }
}