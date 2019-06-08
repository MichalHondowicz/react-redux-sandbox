import React from 'react';
import LoginForm from './LoginForm';
import BookForm from './BookForm';
import AdminInventoryList from "./AdminInventoryList";
import {base} from "../base";
import {Link} from "react-router-dom";


class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            loggedIn: false
        }
    }

    handleLoggedState = (logger) => {
        this.setState({loggedIn: logger})
    };

    addNewBook = (newBook) => {
        if (Array.isArray(this.state.books)) {
            this.setState({
                books: [...this.state.books, newBook],
            });
        } else {
            this.setState({books: [newBook]})
        }
    };

    editBook = (previousBook, updatedBook) => {

        const newBooks = this.state.books.filter(book => previousBook !== book.name);

        this.setState({
            books: [...newBooks, updatedBook],
        });
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
                    <BookForm handleLoggedState={this.handleLoggedState} addNewBook={this.addNewBook}
                              editBook={this.editBook}/>
                    <AdminInventoryList books={this.state.books} removeFromInventory={this.removeFromInventory}
                    />
                </React.Fragment>
                }
                <Link to='/'>
                    <button className='ui secondary button'>Home</button>
                </Link>
            </div>
        )
    }
}

export default AdminPanel;