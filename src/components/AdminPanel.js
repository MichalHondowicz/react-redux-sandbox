import React from 'react';
import LoginForm from './LoginForm';
import BookForm from './BookForm';
import AdminInventoryList from "./AdminInventoryList";
import {base} from "../base";


class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            loggedIn: false,
        }
    }

    handleLoggedState = (logger) => {
        this.setState({loggedIn: logger})
    };

    addNewBook = (newBook) => {

        if (Array.isArray(this.state.books)) {
            this.setState({books: [...this.state.books, newBook]});
        } else {
            this.setState({books: [newBook]})
        }
    };

    removeFromInventory = (inventoryItem) => {
        this.setState({
            books: this.state.books.filter(book => inventoryItem !== book)
        })
    };

    componentDidMount() {
        this.ref = base.syncState('bookstore/books', {
            context: this,
            state: 'books'
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.ref)
    }


    render() {
        return (
            <div>
                {!this.state.loggedIn &&
                <LoginForm handleLoggedState={this.handleLoggedState}/>
                }
                {this.state.loggedIn &&
                <React.Fragment>
                    <BookForm handleLoggedState={this.handleLoggedState} addNewBook={this.addNewBook}/>
                    <AdminInventoryList books={this.state.books} removeFromInventory={this.removeFromInventory}/>
                </React.Fragment>
                }
            </div>
        )
    }
}

export default AdminPanel;