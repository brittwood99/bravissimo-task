//variables

let productName = '';
const basketMap = new Map(); 
const productPageContainer = document.getElementById('product-page-container');

//load product and basket contents on page load

document.addEventListener('DOMContentLoaded', () => {
  getProductName();
  loadBasket();

 });

 //get product name from previous view button push

function getProductName(){
  const urlParams = new URLSearchParams(window.location.search);
   productName = urlParams.get('product');

  const productInfoContainer = document.getElementById('product-info-container'); 

  if (productName) {
    const decodedProductName = decodeURIComponent(productName);
    const productNameElement = document.createElement('h1'); 
 
//add to basket button

    const addButton = document.createElement('button');
    addButton.id = `add-${productName.replace(/\s+/g, '-')}`;
    addButton.textContent = '+1';
    productNameElement.textContent = decodedProductName;
    addButton.addEventListener("click", addtoBasket);

//add name and button to container

    if (productInfoContainer) {
      productInfoContainer.appendChild(productNameElement);
      productInfoContainer.appendChild(addButton);
    } else {
      console.error("Product info container not found."); 
    }
  } else {
    console.warn("Product name parameter not found in URL.");
    if (productInfoContainer) {
      productInfoContainer.innerHTML = "<p>Product information not available.</p>"; 
    }
  }
}


