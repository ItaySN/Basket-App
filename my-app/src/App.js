import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import Footer from './footer.js';
import SearchArea from './searchArea.js';
import GroceriesList from './groceriesList.js';
import GroceriesItem from './groceriesItem';
import BasketList from './basketList.js';

function App() {
        const [GroceriesArr,setGroceriesList] = useState(['Strawberry','Blueberry','Orange','Banana','Apple',
        'Carrot','Celery','Mushroom','Green Pepper','Eggs',
        'Cheese','Butter','Chicken','Beef']);
        const [Basket,setBasket] = useState([]);

        function addItemtoBasket(itemName){
        let tempBasket = Basket.slice();
        let check = false;
        tempBasket = tempBasket.map(obj => {
          if(obj.name === itemName)
          {
            check = true;
            obj.count += 1;
          }  
        })
        if(!check)
        {
          tempBasket.push({name : itemName , count : 1});
        }
        console.log(tempBasket + "temp Basket");
        debugger;
        setBasket(tempBasket);
        
          
      }
      
      function deleteItemFromBasket(itemName){  
        let tempBasket = Basket.slice();
        let indexOfObject  = tempBasket.findIndex(obj => obj.name === itemName);
        if(indexOfObject !== -1)
        {
          tempBasket[indexOfObject].count--;
          if(!tempBasket[indexOfObject].count){
            tempBasket.splice(indexOfObject, 1);
          }
        }
        setBasket(tempBasket);
      }
      
      return (
        <>
        <Header />
        <SearchArea />
        <GroceriesList list = {GroceriesArr} onClick = {addItemtoBasket}/>
        <BasketList list = {Basket} onClick = {deleteItemFromBasket}/>
        <Footer />
        </>
  );
}

export default App;

