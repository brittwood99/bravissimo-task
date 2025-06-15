//variables

const basketMap = new Map(); 

//loads up basket from local storage on page load

document.addEventListener('DOMContentLoaded', () => {
    loadBasket();
    saveBasket();
   });

//clear basket function and button

   function clearBasket(){
    basketMap.clear();
    saveBasket();
    loadBasket();
    
   }

   const clearBasketButton = document.getElementById('clear-basket-button');
   if (clearBasketButton) {
    clearBasketButton.addEventListener('click', () => {
      clearBasket();
      console.log("Basket cleared!"); 
         });
  }
