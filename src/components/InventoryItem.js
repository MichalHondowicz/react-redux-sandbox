import React from 'react';

export default class InventoryItem extends React.Component{

    removeFromInventory = () => {
        this.props.removeFromInventory(this.props.book)
    };

    render() {
        return(
            <div className='orderItem row'>
                <div className='col-md-8'>
                    <b>{this.props.book.name}</b><br/>
                    <i>{this.props.book.author}</i><br/>
                </div>
                <div className='col-md-4'>
                    <button className='btn btn-danger' onClick={this.removeFromInventory}>Remove from Inventory</button>
                </div>
            </div>
        )
    }

}