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
function getProductName() {
  productPageContainer.innerHTML = '';
  const urlParams = new URLSearchParams(window.location.search);
  productName = urlParams.get('product');
  const decodedProductName = decodeURIComponent(productName);
  const productNameElement = document.createElement('h2');

  //show current quantity
  const quantityCheck = document.createElement('p');
  if (basketMap.has(decodedProductName)) {
    const quantity = basketMap.get(decodedProductName);
    quantityCheck.textContent = `${decodedProductName} in basket: ${quantity}`;
  } else {
    quantityCheck.textContent = `none in basket`;
  }

  //add button
  const addButtonProductPage = document.createElement('button');
  addButtonProductPage.textContent = 'add to basket';
  productNameElement.textContent = decodedProductName;
  addButtonProductPage.addEventListener("click", () => {
    addtoBasket(decodedProductName);
    getProductName();
  });

  //placeholder image
  const productBoxPlaceholder = document.createElement('div');
  productBoxPlaceholder.classList.add('product-image-placeholder');
  productBoxPlaceholder.textContent = decodedProductName;

  //add to container
  productPageContainer.appendChild(productNameElement);
  productPageContainer.appendChild(productBoxPlaceholder);
  productPageContainer.appendChild(addButtonProductPage);
  productPageContainer.appendChild(quantityCheck);


}


