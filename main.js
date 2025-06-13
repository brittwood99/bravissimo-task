//defining product

class Product {
  constructor(name) {
    this.name = name;
  }
}

//product list example to be replaced by real data

const products = [
  new Product("newproduct1"),
  new Product("newproduct2")
];


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

//add product card to container

productCard.appendChild(productName);
productCard.appendChild(viewButton);

return productCard;
}
