//variables

let productName = '';
const basketMap = new Map(); 
const productPageContainer = document.getElementById('product-page-container');

//load product and basket contents on page load

document.addEventListener('DOMContentLoaded', () => {
  loadBasket();
  getProductName();

 });

 //get product name from previous view button push

function getProductName(){
  productPageContainer.innerHTML = '';
  const urlParams = new URLSearchParams(window.location.search);
   productName = urlParams.get('product');
    const decodedProductName = decodeURIComponent(productName);
    const productNameElement = document.createElement('h1'); 

   //show current quantity
   const quantityCheck = document.createElement('p');

   if (basketMap.size === 0) {
   } else {
     basketMap.forEach((quantity, productIdentifier) => { 
 
       // basket item name
       quantityCheck.textContent = `${productIdentifier}: ${quantity}`; 
 
     });
   }

   //add button

   const addButtonProductPage = document.createElement('button');
   addButtonProductPage.textContent = 'add to basket';
   productNameElement.textContent = decodedProductName;
   addButtonProductPage.addEventListener("click", () => {
     addtoBasket(decodedProductName);
     getProductName();
    }
     
     
    );

   

   productPageContainer.appendChild(productNameElement);
   productPageContainer.appendChild(addButtonProductPage);
   productPageContainer.appendChild(quantityCheck);
   
  




}


