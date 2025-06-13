// productPage.js

let productName = '';
const basketMap = new Map(); // Initialize the basketMap

document.addEventListener('DOMContentLoaded', () => {
  getProductName();
  loadBasket();

 });

function getProductName(){
  const urlParams = new URLSearchParams(window.location.search);
   productName = urlParams.get('product');

  const productInfoContainer = document.getElementById('product-info-container'); // Get the container element

  if (productName) {
    const decodedProductName = decodeURIComponent(productName);
    const productNameElement = document.createElement('h1'); // Create a new h1 element
  //add button
    const addButton = document.createElement('button');
    addButton.id = `add-${productName.replace(/\s+/g, '-')}`;
    addButton.textContent = '+1';
    productNameElement.textContent = decodedProductName;
    addButton.addEventListener("click", function() {
      let clicks=0;
        clicks++;
        if (basketMap.has(productName)) {
          basketMap.set(productName, basketMap.get(productName) + clicks);
        } else {
          basketMap.set(productName, clicks);
        } 
        
      saveBasket();
      
      // console.log(`${product.name} clicks: ${product.clicks}`);
      });
    //add to container
    if (productInfoContainer) {
      productInfoContainer.appendChild(productNameElement);
      productInfoContainer.appendChild(addButton);
    } else {
      console.error("Product info container not found."); // Log an error if the container is missing
    }
  } else {
    console.warn("Product name parameter not found in URL.");
    if (productInfoContainer) {
      productInfoContainer.innerHTML = "<p>Product information not available.</p>"; // Display a message in the container
    }
  }
}

const productPageContainer = document.getElementById('product-page-container');

function createProductPageCard(productName) {
  const productPageCard = document.createElement('div');
  productPageCard.classList.add('product-page-card');


//id is add + name of product
//listen for clicks


productPageCard.appendChild(productName);
productPageCard.appendChild(addButton);
//productCard.appendChild(removeButton);
//productCard.appendChild(clearButton);
return productPageCard;
}
