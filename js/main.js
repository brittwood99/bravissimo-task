// Add a variable to store all fetched products
let allProducts = [];


//load basket and products

document.addEventListener('DOMContentLoaded', async () => {
  loadBasket();
  console.log('loaded basket, going to load products');
  //loadProducts(); //links to loadProducts.js and then app.js to start http request for products json
  const products = await loadProducts(); // <-- Await the result of loadProducts()
  allProducts = products; // Store the fetched products
  displayProducts(allProducts);
  console.log('setting up search');

  // Get the search input element and add the event listener here
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    console.log('got search input');
     searchInput.addEventListener('input', (event) => {
       const searchTerm = event.target.value.toLowerCase();
       const filteredProducts = allProducts.filter(product =>
         product.name.toLowerCase().includes(searchTerm)
       );
       displayProducts(filteredProducts);
     });
  } else {
      console.error('Search input element with ID "search-input" not found.');
  }
});

// Function to display products (either all or filtered)
function displayProducts(productsToDisplay) {
  productsContainer.innerHTML = ''; // Clear the current products

  if (productsToDisplay.length === 0) {
    productsContainer.textContent = 'No products found.';
    return;
  }

  productsToDisplay.forEach(product => {
    const productCardElement = createProductCard(product);
    productsContainer.appendChild(productCardElement);
  });
}



//create container to display all products

const productsContainer = document.getElementById('products-container');


//create product card

function createProductCard(product) {
  console.log('creating product card');
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  //image placeholder

  const productBoxPlaceholder = document.createElement('div');
  productBoxPlaceholder.classList.add('product-image-placeholder'); // Add a class for styling
  productBoxPlaceholder.textContent = product.name;



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
productCard.appendChild(productBoxPlaceholder);
productCard.appendChild(quantityCheck);
productCard.appendChild(viewButton);
//productCard.appendChild(addButton); maybe re-add later

return productCard;
}
