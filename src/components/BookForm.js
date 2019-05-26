import React from 'react';
import {app, base} from "../base";

export default class BookForm extends React.Component {

    constructor() {
        super();
        this.state = {
            books: [],
            book: {
                name: '',
                author: '',
                description: '',
                genre: '',
                availability: true,
                image: ''
            }
        }
    }

    changeHandler = (e) => {

        let newBook;

        if (e.target.type === 'checkbox') {
            newBook = {
                ...this.state.book,
                [e.target.name]: e.target.checked
            };
        } else {
            newBook = {
                ...this.state.book,
                [e.target.name]: e.target.value
            }
        }
        this.setState(
            {
                book: newBook
            }
        )
    };

    addNewBook = (e) => {

        e.preventDefault();
        let newBook = {...this.state.book};

        if (Array.isArray(this.state.books)) {
            this.setState({books: [...this.state.books, newBook]})
        } else {
            this.setState({books: [newBook]})
        }
        this.setState({
            book: {
                name: '',
                author: '',
                description: '',
                genre: '',
                availability: true,
                image: ''
            }
        })
    };

    logOut = (e) => {
        e.preventDefault();
        app.auth().signOut()
            .then(() => {
                this.props.handleLoggedState(false);
            })
            .catch(() => {
                console.log('Unable to log out');
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
            <div className='adminPanel col-md-4'>
                <form onSubmit={this.addNewBook}>
                    <div className='form-group'>
                        <input type='text' placeholder='Book name' id='name' name='name'
                               className='form-control' onChange={this.changeHandler} value={this.state.book.name}/>
                    </div>
                    <div className='form-group'>
                        <input type='text' placeholder='Book author' id='author' name='author'
                               className='form-control' onChange={this.changeHandler}
                               value={this.state.book.author}/>
                    </div>
                    <div className='form-group'>
                        <textarea placeholder='Book description' id='description' name='description'
                                  className='form-control' onChange={this.changeHandler}
                                  value={this.state.book.description}/>
                    </div>
                    <label>
                        Book genre
                        <select name='genre' id='genre' value={this.state.book.genre} onChange={this.changeHandler}>
                            <option value="Comedy">Comedy</option>
                            <option value="Horror">Horror</option>
                            <option value="Romance">Romance</option>
                            <option value="Fantasy">Fantasy</option>
                        </select>
                    </label>
                    <div className='form-group'>
                        <input type='checkbox' id='availability' name='availability'
                               className='form-check-input' onChange={this.changeHandler}
                               value={this.state.book.availability}/>
                        <label htmlFor="availability" className='form-check-label'>Available</label>
                        <div className='form-group'>
                            <input type='text' placeholder='Book image' id='image' name='image'
                                   className='form-control' onChange={this.changeHandler}
                                   value={this.state.book.image}/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Add</button>
                        <div>
                            <button onClick={this.logOut} className='btn btn-danger'>Log out</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}