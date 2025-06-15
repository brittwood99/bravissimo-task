
async function loadProducts() {
  console.log('loading products');

    try {
      // when using mock json file, I could get the data like this:
      //const response = await fetch('data/data.json'); 
      // but this is how i need to get it by using server side code with node.js talking to the json instead of the front end:
     //this is a http request:
      const response = await fetch('/api/products');//this is a route
      //this sends to a url connected to this web app
      //need to make my nodejs server respond to requests at this url
      console.log('back to loading products');
      //throwing error here even though json is at api/products
      console.log(response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      else{
        
      }

      //response
  
      const products = await response.json(); // Parse the JSON data
  
      //printing for proof

      console.log("Products loaded from data/data.json:", products); // Log for debugging
      console.log("Printing product names:");
      // Iterate over the products array
      products.forEach(product => {
        // Access the 'name' property of each product object
        console.log(product.name);
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

  