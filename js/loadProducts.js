//console log to check for updated version
console.log('loadProducts.js version --- 14:52');

async function loadProducts() {
  console.log('loading products');

  //try to get the product feed from the json:
  try {
    //1. pull directly from json:
    const response =
      ///await fetch('data/data.json'); 

      //2. http request for node js server:
      //const response = await fetch('/api/products'); - did not work with port 3000/9000 error

      await fetch('https://3000-firebase-bravissimo-task-1749821916900.cluster-ombtxv25tbd6yrjpp3lukp6zhc.cloudworkstations.dev/api/products');

    //console logs to check if it is working:
    console.log('received response from /api/products:');
    console.log(response);
    console.log('back to loading products');
    console.log(response.status);

    //if error:
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    else {

    }

    const products = await response.json();

    //if it works:
    console.log("Products loaded from data/data.json:", products); 
    console.log("Printing product names:");
    
    return products; 

    //errors 
  } catch (error) {
    console.error('Error loading products from data/data.json:', error);
    return [];
  }
}

