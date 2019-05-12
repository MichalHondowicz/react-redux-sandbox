import React from 'react';

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            book: {
                name: '',
                author: '',
                description: '',
                availability: true,
                image: ''
            }
        }
    }

    changeHandler = (e) => {

        const newBook = {
            ...this.state.book,
            [e.target.name]: e.target.value,
        };

        this.setState(
            {
                book: newBook
            }
        )
    };


    render() {

        return (
            <div className='adminPanel col-md-4'>
                <form>
                    <div className='form-group'>
                        <input type='text' placeholder='Book name' id='name' name='name'
                               className='form-control' onChange={this.changeHandler} value={this.state.book.name}/>
                    </div>
                    <div className='form-group'>
                        <input type='text' placeholder='Book author' id='author' name='author'
                               className='form-control' onChange={this.changeHandler} value={this.state.book.author}/>
                    </div>
                    <div className='form-group'>
                        <textarea placeholder='Book description' id='description' name='description'
                                  className='form-control' onChange={this.changeHandler}
                                  value={this.state.book.description}/>
                    </div>
                    <div className='form-group'>
                        <input type='checkbox' id='availability' name='availability'
                               className='form-check-input' onChange={this.changeHandler}
                               value={this.state.book.available}/>
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
        )
    }
}

export default AdminPanel;