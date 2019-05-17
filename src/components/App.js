import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import '../index.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            order: []
        }
    }

    addToOrder = (book) => {

        this.setState({
            order: [...this.state.order, book]
        })
    };

    removeFromOrder = (orderItem) => {

        this.setState({
            order: this.state.order.filter(book => orderItem !== book)
        })
    };

    render() {
        return (
            <div className='app container'>
                <Header/>
                <div className='row'>
                    <Order order={this.state.order} removeFromOrder={this.removeFromOrder}/>
                    <Inventory books={this.state.books} addToOrder={this.addToOrder}/>
                </div>
            </div>
        )
    }
}

export default App;