//basket
const basketMap = new Map(); // Export the map

const basketElement = document.getElementById('basket');

//define product class

class Product {
    constructor(name) {
      this.name = name;
    }
  }

//create product card

  function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

 //create product heading 

    const productName = document.createElement('h3');
    productName.textContent = product.name;

//add buttons


const addButton = document.createElement('button');
//button text
addButton.textContent = '+1';
//id is add + name of product
addButton.id = `add-${product.name.replace(/\s+/g, '-')}`;
//listen for clicks
product.clicks=0;
addButton.addEventListener("click", function() {
    product.clicks++;
    basketMap.set(product.name, product.clicks);
    if (basketElement) {
        // Build a simple string representation of the map
        let mapString = "";
        basketMap.forEach((value, key) => {
          mapString += `${key}: ${value}\n`; // Use \n for newlines
        });
    
        // Set the text content of the display element
        basketElement.textContent = mapString;
    
        // To make the line breaks (\n) appear, add this CSS (inline or in a style tag)
        basketElement.style.whiteSpace = 'pre-wrap';
      } else {
        console.error("Element with ID 'mapContent' not found!");
      }
    ////mine
   
  console.clear();
  console.log(basketMap);

 // console.log(`${product.name} clicks: ${product.clicks}`);
});


productCard.appendChild(productName);
productCard.appendChild(addButton);
//productCard.appendChild(removeButton);
//productCard.appendChild(clearButton);

return productCard;
}

const products = [
   new Product("new product!"),
   new Product("new product 2!")
];


//add product to container

const productsContainer = document.getElementById('products-container');

products.forEach(product => productsContainer.appendChild(createProductCard(product)));
