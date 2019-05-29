import React from 'react';
import InventoryItem from "./InventoryItem";

export default class AdminInventoryList extends React.Component {


    render() {
        let inventoryList = <div>No books in inventory</div>;
        if (Array.isArray(this.props.books)) {
            inventoryList = this.props.books
                .map((book) => {
                    return (<InventoryItem
                        key={book.name}
                        book={book} removeFromInventory={this.props.removeFromInventory}
                        editModeHandler={this.props.editModeHandler}/>)
                })
        }
        return (
            <div className='inventory col-md-6'>
                <h2>Cart: </h2>
                {inventoryList}
            </div>
        )
    }
}