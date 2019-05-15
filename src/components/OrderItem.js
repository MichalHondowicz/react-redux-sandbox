import React from 'react';

export default class OrderItem extends React.Component {

    removeFromOrder = () => {
        this.props.removeFromOrder(this.props.book)
    };

    render() {
        return (
            <div>
                <b>{this.props.book.name}</b><br/>
                <i>{this.props.book.author}</i><br/>
                <button className='btn btn-danger' onClick={this.removeFromOrder}>Remove from Cart</button>
            </div>
        )
    }
}