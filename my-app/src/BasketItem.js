import React from 'react';
import './basketItem.css'




function BasketItem (props) {
    return (

        <div className="basket-item">
            {
                props.name + ' :   ' + props.count 
            }
            <button onClick={()=>props.onClick(props.name)}>Delete</button>
        </div>
    )
}

export default BasketItem;

