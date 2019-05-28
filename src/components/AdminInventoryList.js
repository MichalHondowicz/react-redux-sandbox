import React from 'react';
import InventoryItem from "./InventoryItem";

export default class AdminInventoryList extends React.Component {


    render() {
        let inventoryList;
        if (this.props.books) {
            inventoryList = this.props.books.map(book => {
               return <InventoryItem book={book} removeFromInventory={this.props.removeFromInventory}/>
            })
        } else {
            inventoryList = <div>No books in inventory</div>
        }
        return (
            <div className='inventory col-md-6'>
                <h2>Cart: </h2>
                {inventoryList}
            </div>
        )
    }
}