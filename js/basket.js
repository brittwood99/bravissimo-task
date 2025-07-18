//variables
const basketMap = new Map();

//loads up basket from local storage and renders basket on page load
document.addEventListener('DOMContentLoaded', () => {
  loadBasket();
  renderBasketDisplay();
});

//clear basket button
const clearBasketButton = document.getElementById('clear-basket-button');
if (clearBasketButton) {
  clearBasketButton.addEventListener('click', () => {
    clearBasket();
    console.log("Basket cleared!");
  });

}

//render basket function
function renderBasketDisplay() {
  const basketItemsContainer = document.getElementById('basket-container'); 

  if (basketItemsContainer) {
    basketItemsContainer.innerHTML = '';

    if (basketMap.size === 0) {
      basketItemsContainer.textContent = "Your basket is empty.";
    } else {
      basketMap.forEach((quantity, productIdentifier) => {

        // individual container for the basket item
        const basketItemDiv = document.createElement('div');
        basketItemDiv.classList.add('basket-item'); 

        // basket item name
        const itemElement = document.createElement('p');
        itemElement.textContent = `${productIdentifier}: ${quantity}`;

        //increase button
        const increaseButton = document.createElement('button');
        increaseButton.textContent = `+1`;
        increaseButton.addEventListener('click', () => {
          addtoBasket(productIdentifier);
          renderBasketDisplay();
          console.log("increased");
        });

        //decrease button
        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = `-1`;
        decreaseButton.addEventListener('click', () => {
          decreaseFromBasket(productIdentifier);
          renderBasketDisplay();
          console.log("decreased");
        });

        //remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = `remove`;
        removeButton.addEventListener('click', () => {
          removeFromBasket(productIdentifier);
          renderBasketDisplay();
          console.log("removed");
        });

        //add view button
        const viewButton = document.createElement('button');
        viewButton.textContent = 'view';

        // view button functionality
        const encodedProductName = encodeURIComponent(productIdentifier);
        viewButton.addEventListener('click', () => {
          window.location.href = `productPage.html?product=${encodedProductName}`;
        });

        //placeholder image
        const productBoxPlaceholder = document.createElement('div');
        productBoxPlaceholder.classList.add('product-image-placeholder'); 
        productBoxPlaceholder.textContent = productIdentifier;

        //add items to basket container
        basketItemDiv.appendChild(itemElement);
        basketItemDiv.appendChild(productBoxPlaceholder);
        basketItemDiv.appendChild(increaseButton);
        basketItemDiv.appendChild(decreaseButton);
        basketItemDiv.appendChild(removeButton);
        basketItemDiv.appendChild(viewButton);
        basketItemsContainer.appendChild(basketItemDiv); 

      });
    }
  } else {
  }
}
