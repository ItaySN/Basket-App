import React from 'react';
import './groceryItem.css';
import { MdAddShoppingCart } from 'react-icons/md';




const GroceriesItem = (props) => {
    

    return(
        <div className="item-div" onClick={()=>props.onClick(props.name)}>
            {
                props.name
            }
            <button onClick = {props.onClick}><MdAddShoppingCart /></button>
        </div>
    )
    
}
export default GroceriesItem;