//variables
const basketElement = document.getElementById('basket');

//clear basket function and button

function clearBasket(){
  basketMap.clear();
  saveBasket();
  loadBasket();
  renderBasketDisplay();
  
 }

// load the basketMap from local storage

function loadBasket() {
  console.log('loading basket');
    const storedBasket = localStorage.getItem('basket');
    console.log(storedBasket);

    if (storedBasket) {
      basketMap.clear();
      const basketEntries = JSON.parse(storedBasket);
      for (const [key, value] of basketEntries) {
        basketMap.set(key, value);
      }
      console.log("Basket loaded from localStorage:", basketMap); 

    }
  }
  
// save the basketMap to local storage

function saveBasket() {
  console.log('saving basket:');
  console.log(basketMap);
    localStorage.setItem('basket', JSON.stringify(Array.from(basketMap.entries())));
  }

//add to basket function

function addtoBasket(productName) {
  console.log('adding to basket');

  let clicks=0;
    clicks++;
    if (basketMap.has(productName)) {
      basketMap.set(productName, basketMap.get(productName) + clicks);
    } else {
      basketMap.set(productName, clicks);
    } 
    saveBasket();

  
  }

  //decrease from basket function

  function decreaseFromBasket(productName) {
  
    let clicks=0;
      clicks--;
      if (basketMap.has(productName)) {
        clicks=clicks+basketMap.get(productName);
        if(clicks<1){
          clicks=1;
        }
        basketMap.set(productName, clicks);
      } else {
        basketMap.set(productName, clicks);
      } 
      saveBasket();
  
    
    }

    //remove fully from basket

    function removeFromBasket(productName) {
    
        if (basketMap.has(productName)) {
         
          basketMap.delete(productName);
        } else {
          
        } 
        saveBasket();
    
      
      }

