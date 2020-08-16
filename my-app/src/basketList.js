import React from 'react';
import BasketItem from './BasketItem';
import './basketList.css';
import { FaTrashAlt } from 'react-icons/fa';




const BasketList = (props) => {
    return(

        <div className = "basket-div" >
            <h3>Basket List : </h3>
            <button onClick={props.reset}><FaTrashAlt /></button>
            {(props.list.length===0) ? <p className="empty-basket">Your basket is empty</p> : 
                    props.list.map((obj,index) => {
                        debugger;
                        return (
                            <BasketItem name = {obj.name} count = {obj.count} onClick = {props.onClick} buyClick ={props.buyClick} buy ={obj.buy} />
                        );
                    })
            }
    </div>
    )

}

export default BasketList;