import React from 'react';
import BasketItem from './BasketItem';
import './basketList.css'




const BasketList = (props) => {
    return(

        <div className = "basket-div">
            <h3>Basket List : </h3>
            {(props.list.length===0) ? <p className="empty-basket">Your basket is empty</p> : 
                    props.list.map((obj,index) => {
                        debugger;
                        return (
                            <BasketItem name = {obj.name} count = {obj.count} onClick = {props.onClick}/>
                        );
                    })
            }
    </div>
    )

}

export default BasketList;