//create container to display all products

const productsContainer = document.getElementById('products-container');

products.forEach(product => productsContainer.appendChild(createProductCard(product)));

//create product card

function createProductCard(product) {
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
addButton.textContent = '+1';
addButton.addEventListener("click", () => {

  addtoBasket(product.name);
  // Add this log

});




//add product card to container

productCard.appendChild(productName);
productCard.appendChild(viewButton);
productCard.appendChild(addButton);

return productCard;
}
