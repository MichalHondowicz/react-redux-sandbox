import React from 'react';
import {app} from "../base";
import {connect} from "react-redux";

class BookForm extends React.Component {

    changeHandler = (e) => {

        let newBook;

        if (e.target.type === 'checkbox') {
            newBook = {
                ...this.props.book,
                [e.target.name]: e.target.checked
            };
        } else {
            newBook = {
                ...this.props.book,
                [e.target.name]: e.target.value
            }
        }
        this.props.updateBook(newBook);
    };

    addNewBook = (e) => {

        e.preventDefault();

        if (!this.props.editMode) {
            const newBook = {...this.props.book};
            this.props.addNewBook(newBook);

        } else {

            const newBook = {...this.props.book};

            this.props.editBook(this.props.titleOfBookForEdit, newBook);
        }
        this.props.updateBook({
            name: "",
            author: "",
            description: "",
            image: "",
            availability: true,
            genre: "",
            price: ""
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
                               value={this.props.book.name}/>
                    </div>
                    <div className='form-group'>
                        <input type='text' placeholder='Book author' id='author' name='author'
                               className='form-control' onChange={this.changeHandler}
                               value={this.props.book.author}/>
                    </div>
                    <div className='form-group'>
                        <input type='text' placeholder='Book price' id='price' name='price'
                               className='form-control' onChange={this.changeHandler}
                               value={this.props.book.price}/>
                    </div>
                    <div className='form-group'>
                        <textarea placeholder='Book description' id='description' name='description'
                                  className='form-control' onChange={this.changeHandler}
                                  value={this.props.book.description}/>
                    </div>
                    <label>
                        Book genre
                        <select name='genre' id='genre' value={this.props.book.genre}
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
                               value={this.props.book.availability}/>
                        <label htmlFor="availability" className='form-check-label'>Available</label>
                        <div className='form-group'>
                            <input type='text' placeholder='Book image' id='image' name='image'
                                   className='form-control' onChange={this.changeHandler}
                                   value={this.props.book.image}/>
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

const mapDispatchToProps = dispatch => {
    return {
        updateBook: book => dispatch({type: 'UPDATE_BOOK', payload: book})
    }
};

const mapStateToProps = state => {
    return {
        book: state.book,
        editMode: state.editMode,
        titleOfBookForEdit: state.titleOfBookForEdit
    }
};

const AddBook = connect(mapStateToProps, mapDispatchToProps)(BookForm);

export default AddBook;