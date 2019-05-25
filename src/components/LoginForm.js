import React from 'react';
import {app} from '../base';

export default class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            password: '',
            email: ''
        }
    }

    loginChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    authenticate = (e) => {
        e.preventDefault();
        app.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.handleLoggedState(true);
            })
            .catch(() => {
                console.log('Unable to authenticate');
            })
    };

    render() {
        return (
            <div>
                <div className='col-md-4'>
                    <form onSubmit={this.authenticate}>
                        <div className='form-group'>
                            <input type='text' placeholder='email' id='email' name='email'
                                   className='form-control'
                                   onChange={this.loginChangeHandler} value={this.email}/>
                        </div>
                        <div className='form-group'>
                            <input type='password' placeholder='password' id='password' name='password'
                                   className='form-control'
                                   onChange={this.loginChangeHandler} value={this.password}/>
                            <button type='submit' className='btn btn-primary'>Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

