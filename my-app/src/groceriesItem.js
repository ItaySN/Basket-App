import React from 'react';
import './groceryItem.css'



const GroceriesItem = (props) => {
    

    return(
        <div className="item-div" onClick={()=>props.onClick(props.name)}>
            {
                props.name
            }
            <button  onClick={()=>props.onClick(props.name)}>Add</button>
        </div>
    )
    
}
export default GroceriesItem;