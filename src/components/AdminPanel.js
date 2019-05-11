import React from 'react';

class AdminPanel extends React.Component {

    render() {

        return (
            <div className='adminPanel col-md-4'>
                <form>
                    <div className='form-group'>
                        <input type='text' placeholder='Book name' id='book' name='name'
                               className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <input type='text' placeholder='Book author' id='author' name='author'
                               className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <textarea placeholder='Book description' id='description' name='description'
                                  className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <input type='checkbox' id='availability' name='availability'
                               className='form-check-input'/>
                        <label htmlFor="availability" className='form-check-label'>Available</label>
                        <div className='form-group'>
                            <input type='text' placeholder='Book image' id='image' name='image'
                                   className='form-control'/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AdminPanel;