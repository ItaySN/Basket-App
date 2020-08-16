import React from 'react';
import './basketItem.css';
import { FiDelete } from 'react-icons/fi';
import { GiTakeMyMoney } from 'react-icons/gi';


const switchDecoration = (event) => {
    if (event.currentTarget.parentElement.style.textDecoration === 'line-through') {
        event.currentTarget.parentElement.style.textDecoration = '';
    } else {
        event.currentTarget.parentElement.style.textDecoration = 'line-through';
    }
}




function BasketItem (props) {

    return (

        <div  className="basket-item">
            <span>{props.name}</span> 
            <span>{props.count}</span> 
            <button onClick={()=>props.onClick(props.name)}><FiDelete /></button>
            <button onClick={(event) => switchDecoration(event)}><GiTakeMyMoney /></button>
        </div>
    )
}


export default BasketItem;

