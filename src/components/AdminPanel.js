import React from 'react';
import LoginForm from './LoginForm';
import BookForm from './BookForm';

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            loggedIn: false,
        }
    }

    handleLoggedState = (logger) => {
        this.setState({loggedIn: logger})
    };

    render() {
        return (
            <div>
                {!this.state.loggedIn &&
                <LoginForm handleLoggedState={this.handleLoggedState}/>
                }
                {this.state.loggedIn &&
                <BookForm handleLoggedState={this.handleLoggedState}/>
                }
            </div>
        )
    }
}

export default AdminPanel;