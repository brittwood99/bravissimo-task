
//load basket

document.addEventListener('DOMContentLoaded', () => {
  loadBasket();
  console.log('loaded basket, going to load products...');
  loadProducts(); //links to loadProducts.js and then app.js to start http request for products json
 });

//create container to display all products

const productsContainer = document.getElementById('products-container');


//create product card

function createProductCard(product) {
  console.log('creating product card');
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

//create product heading 

  const productName = document.createElement('h3');
  productName.textContent = product.name;

//add view button

const viewButton = document.createElement('button');
viewButton.textContent = 'view';

// view button functionality

const productNameText = productName.textContent; 

const encodedProductName = encodeURIComponent(productNameText); 

viewButton.addEventListener('click', () => {
window.location.href = `productPage.html?product=${encodedProductName}`;
});

//add add button

const addButton = document.createElement('button');
addButton.textContent = 'add to basket';
addButton.addEventListener("click", () => {

  addtoBasket(product.name);
  // Add this log

});

   //show current quantity
   const quantityCheck = document.createElement('p');

   if (basketMap.size === 0) {
    quantityCheck.textContent = `none in basket`;
   } else {
    if (basketMap.has(product.name)) {
      
        quantityCheck.textContent = `in basket: ${basketMap.get(product.name)}`;
    } else {
        quantityCheck.textContent = `none in basket`;
    }
   }



//add product card to container

productCard.appendChild(productName);
productCard.appendChild(quantityCheck);
productCard.appendChild(viewButton);
//productCard.appendChild(addButton); maybe re-add later

return productCard;
}
