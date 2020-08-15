import React from 'react';
import './groceriesList.css'
import GroceriesItem from './groceriesItem';



const GroceriesList = (props) => {
    
    return(
        <div id = "list-div">
            {
                props.list.map((name) => {
                    return (
                        <GroceriesItem name = {name} onClick = {props.onClick} />
                    );
                })
            }
        
        
        </div>
            
        )
}

export default GroceriesList; 