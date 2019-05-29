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
            editMode: false,
            editedBook: {
                name: "",
                author: "",
                description: "",
                image: "",
                availability: true,
                genre: ""
            }
        }
    }

    handleLoggedState = (logger) => {
        this.setState({loggedIn: logger})
    };

    addNewBook = (newBook) => {
        if (Array.isArray(this.state.books)) {
            this.setState({
                books: [...this.state.books, newBook],
                editMode: false,
                editedBook: {
                    name: "",
                    author: "",
                    description: "",
                    image: "",
                    availability: true,
                    genre: ""
                }
            });
        } else {
            this.setState({books: [newBook]})
        }
    };

    editModeHandler = (bookToEdit) => {
        this.setState({
            editMode: true,
            editedBook: bookToEdit
        })

    };

    editBook = (previousBook, updatedBook) => {

        const newBooks = this.state.books.filter(book => previousBook !== book.name);

        this.setState({
            books: [...newBooks, updatedBook],
            editMode: false,
            editedBook: {
                name: "",
                author: "",
                description: "",
                image: "",
                availability: true,
                genre: ""
            }
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
                              editMode={this.state.editMode} book={this.state.editedBook} editBook={this.editBook}/>
                    <AdminInventoryList books={this.state.books} removeFromInventory={this.removeFromInventory}
                                        editModeHandler={this.editModeHandler}/>
                </React.Fragment>
                }
            </div>
        )
    }
}

export default AdminPanel;