const basketElement = document.getElementById('basket');

// Function to load the basketMap from localStorage
function loadBasket() {
    const storedBasket = localStorage.getItem('basket');
    if (storedBasket) {
      const basketEntries = JSON.parse(storedBasket);
      // Clear the current basketMap before populating it
      basketMap.clear(); 
      // Populate the basketMap with loaded data
      for (const [key, value] of basketEntries) {
        basketMap.set(key, value);
      }
      console.log("Basket loaded from localStorage:", basketMap); // Optional: log for debugging
    }
  }


// Function to save the basketMap to localStorage
function saveBasket() {
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
    
   
  console.clear();
  console.log(basketMap);
    localStorage.setItem('basket', JSON.stringify(Array.from(basketMap.entries())));
  }
  