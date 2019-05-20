import React from 'react';
import {Link} from "react-router-dom";

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            bookstoreName: 'Magic books',
            clicked: true,
            textColor: 'white',
            backgroundColor: 'black'
        }
    }

    handleClicked = () => {

        if (this.state.clicked) {
            this.setState({
                bookstoreName: 'Black books',
                textColor: 'black',
                backgroundColor: 'white'
            })
        } else {
            this.setState({
                bookstoreName: 'Magic books',
                textColor: 'white',
                backgroundColor: 'black'
            })
        }
        this.setState({
            clicked: !this.state.clicked
        })
    };

    render() {
        let headerCss = {
            color: this.state.textColor,
            backgroundColor: this.state.backgroundColor,

        };

        return (
            <div className='row justify-content-center' style={headerCss} onClick={this.handleClicked}>
                <h1>{this.state.bookstoreName}</h1>
                <Link to='/admin'>
                    <button className='btn btn-info goToAdmin'>Admin Panel</button>
                </Link>
            </div>
        );
    }
}

export default Header;