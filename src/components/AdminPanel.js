import React from 'react';
import {base, app} from "../base";

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            books: [],
            book: {
                name: '',
                author: '',
                description: '',
                availability: true,
                image: ''
            },
            loggedIn: false,
            email: '',
            password: ''
        }
    }

    loginChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

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
                availability: true,
                image: ''
            }
        })
    };

    componentDidMount() {
        if(localStorage.getItem('loggedIn')){
            this.setState({loggedIn:localStorage.getItem('loggedIn')})
        }
        this.ref = base.syncState('bookstore/books', {
            context: this,
            state: 'books'
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.ref)
    }

    authenticate = (e) => {
        e.preventDefault();
        app.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.setState({
                    loggedIn: true
                });
                localStorage.setItem('loggedIn', true);
            })
            .catch(() => {
                console.log('Unable to authenticate');
            })
    };

    render() {
        return (
            <div>
                {!this.state.loggedIn &&
                <form onSubmit={this.authenticate}>
                    <input type='text' placeholder='email' id='email' name='email' className='form-control'
                           onChange={this.loginChangeHandler} value={this.state.email}/>
                    <input type='password' placeholder='password' id='password' name='password' className='form-control'
                           onChange={this.loginChangeHandler} value={this.state.password}/>
                    <button type='submit' className='btn btn-primary'>Sign in</button>
                </form>
                }
                {this.state.loggedIn &&
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
                        </div>
                    </form>
                </div>
                }
            </div>
        )
    }
}

export default AdminPanel;