import React from 'react';

export default class OrderItem extends React.Component {

    removeFromOrder = () => {
        this.props.removeFromOrder(this.props.book)
    };

    render() {
        return (
            <div className='orderItem row'>
                <div className='col-md-8'>
                    <b>{this.props.book.name}</b><br/>
                    <i>{this.props.book.author}</i><br/>
                    <i>{this.props.book.price}</i><br/>
                </div>
                <div className='col-md-4'>
                    <button className='btn btn-danger' onClick={this.removeFromOrder}>Remove from Cart</button>
                </div>
            </div>
        )
    }
}