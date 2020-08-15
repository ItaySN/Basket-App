import React from 'react';




function BasketItem (props) {
    return (

        <div className="basket-item" onClick={()=>props.onClick(props.name)}>
            {
                props.name
            }
        </div>
    )
}

export default BasketItem;

