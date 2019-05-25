import React from 'react';
import {base} from '../base';
import LoginForm from './LoginForm';
import BookForm from './BookForm';

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            loggedIn: false,
        }
    }

    handleLoggedIn = (logger) => {
        this.setState({loggedIn: logger})
    };

    render() {
        return (
            <div>
                {!this.state.loggedIn &&
                <LoginForm handleLoggedIn={this.handleLoggedIn}/>
                }
                {this.state.loggedIn &&
                <BookForm/>
                }
            </div>
        )
    }
}

export default AdminPanel;