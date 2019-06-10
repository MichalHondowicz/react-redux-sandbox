import React from 'react';

export default class OrderItem extends React.Component {

    removeFromOrder = () => {
        this.props.removeFromOrder(this.props.book)
    };

    render() {
        return (
            <div className='ui grid'>
                <div className='eight wide column'>
                    <b>{this.props.book.name}</b><br/>
                    <i>{this.props.book.author}</i><br/>
                    <i>{this.props.book.price}</i><br/>
                </div>
                <div className='eight wide column'>
                    <button className='ui negative button' onClick={this.removeFromOrder}>Remove from Cart</button>
                </div>
            </div>
        )
    }
}