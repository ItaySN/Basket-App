import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import Footer from './footer.js';
import SearchArea from './searchArea.js';
import GroceriesList from './groceriesList.js';
import GroceriesItem from './groceriesItem';
import BasketList from './basketList.js';
import { FiSpeaker } from 'react-icons/fi';

function App() {
  const [GroceriesArr, setGroceriesList] = useState(['Strawberry', 'Blueberry', 'Orange', 'Banana', 'Apple',
    'Carrot', 'Celery', 'Mushroom', 'Green Pepper', 'Eggs',
    'Cheese', 'Butter', 'Chicken', 'Beef']);
  const [Basket, setBasket] = useState([]);


  function addItemtoBasket(itemName) {
    let tempBasket = Basket.slice();
    debugger;
    tempBasket.some((obj,i) => obj.name === itemName) ? 
    tempBasket.find(obj => obj.name === itemName).count += 1 : 
    tempBasket.push({name : itemName , count : 1});
    setBasket(tempBasket);
  }
    

  function deleteItemFromBasket(itemName) {
    let tempBasket = Basket.slice();
    let indexOfObject = tempBasket.findIndex(obj => obj.name === itemName);
    if (indexOfObject !== -1) {
      tempBasket[indexOfObject].count--;
      if (!tempBasket[indexOfObject].count) {
        tempBasket.splice(indexOfObject, 1);
      }
    }
    setBasket(tempBasket);
  }

  /*
  const buyItemFromBasket = (itemName) => {
    let tempBasket = Basket.slice();
    tempBasket.forEach(obj => {
      debugger;
      if(obj.name === itemName && !obj.buy)
      {
        obj.buy=true;
        
      }
      else if(obj.name === itemName && obj.buy)
      {
        obj.buy=false;
      }
      
    }) 
    
  } 
*/
const deleteAll = () => {
  let tempBasket = Basket.slice();
  tempBasket =[];
  setBasket(tempBasket);
};

  return (
    <>
      <Header />
      <SearchArea />
      <div className="main">
        <GroceriesList list={GroceriesArr} onClick={addItemtoBasket}  />
        <BasketList list={Basket} onClick={deleteItemFromBasket} reset={deleteAll}/>
      </div>

      <Footer />
    </>
  );
}

export default App;

