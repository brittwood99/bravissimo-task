console.log('loadProducts.js version --- 14:52');

async function loadProducts() {
  console.log('loading products');
  
//try to get the product feed from the json:

    try {
      //1. pull directly from json:
      const response = 
      ///await fetch('data/data.json'); 

            //2. http request for node js server:
            //const response = await fetch('/api/products');

           await fetch('https://3000-firebase-bravissimo-task-1749821916900.cluster-ombtxv25tbd6yrjpp3lukp6zhc.cloudworkstations.dev/api/products');

    console.log('received response from /api/products:');
    console.log(response); // Log the full Response object


            //console logs to check if it is working:

      console.log('back to loading products');
      console.log(response.status);

      //if error:

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      else{
        
      }
  
      const products = await response.json(); 
  
      //if it works:

      console.log("Products loaded from data/data.json:", products); // Log for debugging
      console.log("Printing product names:");
      products.forEach(product => {
        console.log(product.name);
        const productCardElement = createProductCard(product); // Get the created product card element
        productsContainer.appendChild(productCardElement);
      });

      //return

      return products; // Return the loaded products array
  
      //errors 

    } catch (error) {
      console.error('Error loading products from data/data.json:', error);
      // Return an empty array or handle the error as needed
      return [];
    }
  }

  