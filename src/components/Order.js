import React from 'react';
import OrderItem from './OrderItem';

class Order extends React.Component {

    render() {
        const orderList = this.props.order.map(book => {
            return <OrderItem book={book} removeFromOrder={this.props.removeFromOrder}/>
        });
        return (
            <div className='inventory col-md-6'>
                <h2>Cart: </h2>
                {orderList}
            </div>
        )
    }
}

export default Order;