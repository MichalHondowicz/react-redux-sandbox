import React from 'react';
import {connect} from "react-redux";
import {sendBookToEdit} from "../actions/actions";

class InventoryItem extends React.Component {

    removeFromInventory = () => {
        this.props.removeFromInventory(this.props.book)
    };

    editInventory = () => {
        this.props.editModeHandler(this.props.book)
    };

    render() {
        return (
            <div className='orderItem row'>
                <div className='col-md-8'>
                    <b>{this.props.book.name}</b><br/>
                    <i>{this.props.book.author}</i><br/>
                </div>
                <div className="ui buttons">
                    <button className="ui button" onClick={this.removeFromInventory}>Remove</button>
                    <div className="or"></div>
                    <button className="ui positive button" onClick={this.editInventory}>Edit</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        editModeHandler: (book) => dispatch(sendBookToEdit(book))
    }
};

const AdminInventoryView = connect(mapStateToProps, mapDispatchToProps)(InventoryItem);

export default AdminInventoryView;