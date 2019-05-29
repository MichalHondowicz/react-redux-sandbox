import React from 'react';
import {app} from "../base";

export default class BookForm extends React.Component {

    constructor() {
        super();
        this.state = {
            book: {
                name: "",
                author: "",
                description: "",
                image: "",
                availability: true,
                genre: ""
            }
        };
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
        );

    };

    addNewBook = (e) => {

        e.preventDefault();

        if (!this.props.editMode) {
            const newBook = {...this.state.book};
            this.props.addNewBook(newBook);

        } else {
            const newBook = {
                ...this.props.book,
                ...this.state.book
            };
            this.props.editBook(this.props.book.name, newBook);
        }
        this.setState({
            book: {
                name: "",
                author: "",
                description: "",
                image: "",
                availability: true,
                genre: ""
            }
        });

        e.target.reset();
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

    render() {
        let label = this.props.editMode ? 'Save' : 'Add';

        return (
            <div className='adminPanel col-md-4'>
                <form onSubmit={this.addNewBook}>
                    <div className='form-group'>
                        <input type='text' placeholder='Book name' id='name' name='name'
                               className='form-control' onChange={this.changeHandler}
                               value={this.state.book.name || this.props.book.name}/>
                    </div>
                    <div className='form-group'>
                        <input type='text' placeholder='Book author' id='author' name='author'
                               className='form-control' onChange={this.changeHandler}
                               value={this.state.book.author || this.props.book.author}/>
                    </div>
                    <div className='form-group'>
                        <textarea placeholder='Book description' id='description' name='description'
                                  className='form-control' onChange={this.changeHandler}
                                  value={this.state.book.description || this.props.book.description}/>
                    </div>
                    <label>
                        Book genre
                        <select name='genre' id='genre' value={this.state.book.genre || this.props.book.genre}
                                onChange={this.changeHandler}>
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
                                   value={this.state.book.image || this.props.book.image}/>
                        </div>
                        <button type='submit' className='btn btn-primary'>{label}</button>
                        <div>
                            <button onClick={this.logOut} className='btn btn-danger'>Log out</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}