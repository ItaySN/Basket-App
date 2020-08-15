import React from 'react';
import BasketItem from './BasketItem';



const BasketList = (props) => {
    return(
        <div className = "basket-div">
        {
            
            props.list.map((obj,index) => {
                debugger;
                return (
                    <BasketItem name = {obj.name} onClick = {props.onClick}/>
                );
            })
        }
    
    
    </div>
    )

}

export default BasketList;