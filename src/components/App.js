import React from 'react';
import AdminPanel from './AdminPanel';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import '../index.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            books: [],
            order: []

        }
    }

    addNewBook = (book) => {

        this.setState({
            books: [...this.state.books, book]
        })
    };

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
                    <AdminPanel books={this.state.books} addBook={this.addNewBook}/>
                </div>
            </div>
        )
    }
}

export default App;