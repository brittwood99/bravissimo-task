class Product {
  constructor(name) {
    this.name = name;
  }
}

const products = [
  new Product("newproduct1"),
  new Product("newproduct2")
];


//add product to container

const productsContainer = document.getElementById('products-container');

products.forEach(product => productsContainer.appendChild(createProductCard(product)));

function createProductCard(product) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

//create product heading 

  const productName = document.createElement('h3');
  productName.textContent = product.name;

//add buttons

const viewButton = document.createElement('button');
viewButton.textContent = 'view';

// Get the text content of the product name element
const productNameText = productName.textContent; 

const encodedProductName = encodeURIComponent(productNameText); 

viewButton.addEventListener('click', () => {
window.location.href = `productPage.html?product=${encodedProductName}`;
});

productCard.appendChild(productName);
productCard.appendChild(viewButton);

return productCard;
}
