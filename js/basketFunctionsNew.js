

// load the basketMap from local storage

function loadBasket() {
    const storedBasket = localStorage.getItem('basket');
    if (storedBasket) {
      const basketEntries = JSON.parse(storedBasket);
      basketMap.clear(); 
      for (const [key, value] of basketEntries) {
        basketMap.set(key, value);
      }
      console.log("Basket loaded from localStorage:", basketMap); 

    }
  }
  
// save the basketMap to local storage

function saveBasket() {
    if (basketElement) {
        let mapString = "";
        if (basketMap.size === 0) {
          basketElement.textContent = "your basket is empty";
      }
      else{
        basketMap.forEach((value, key) => {
          mapString += `${key}: ${value}\n`; 
        });
            
        basketElement.textContent =mapString;
      }
        basketElement.style.whiteSpace = 'pre-wrap';
      } else {
        console.error("Element with ID 'mapContent' not found!");
      }  

  console.clear();
  console.log(basketMap);
    localStorage.setItem('basket', JSON.stringify(Array.from(basketMap.entries())));
  }

  function saveBasket2() {}


//add to basket function

function test(){
  console.log("test function called");
}

function addtoBasket(productName) {
  console.log("Finished defining addtoBasket."); // Add this

  let clicks=0;
    clicks++;
    if (basketMap.has(productName)) {
      basketMap.set(productName, basketMap.get(productName) + clicks);
    } else {
      basketMap.set(productName, clicks);
    } 
    
  saveBasket();
  
  }
//variables

const basketElement = document.getElementById('basket');

  