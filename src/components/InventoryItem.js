import React from 'react';
import {connect} from "react-redux";


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
                <div className='col-md-4'>
                    <button className='btn btn-danger' onClick={this.removeFromInventory}>Remove</button>
                    <button className='btn btn-danger' onClick={this.editInventory}>Edit</button>
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
        editModeHandler: (book) => dispatch({
            type: 'EDIT_MODE_HANDLER',
            payload: book
        })
    }
};

const AdminInventoryView = connect(mapStateToProps, mapDispatchToProps)(InventoryItem);

export default AdminInventoryView;