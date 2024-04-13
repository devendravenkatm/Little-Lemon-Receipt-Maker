// Given variables
const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
  ];
  const tax = 0.20;
  
  // Function to calculate the total price without tax
  function calculateTotalPrice(selectedDishes) {
    return selectedDishes.reduce((total, selectedDish) => {
      const dish = dishData.find(item => item.name === selectedDish.name);
      return dish ? total + (dish.price * selectedDish.quantity) : total;
    }, 0);
  }
  
  // Function to calculate the total price with tax
  function calculateTotalPriceWithTax(selectedDishes) {
    const totalPrice = calculateTotalPrice(selectedDishes);
    return totalPrice * tax;
  }
  
  // Function to generate receipt message
  function generateReceipt(selectedDishes, numGuests, includeTax) {
    const totalPrice = includeTax ? calculateTotalPriceWithTax(selectedDishes) : calculateTotalPrice(selectedDishes);
    const formattedPrice = totalPrice.toFixed(2);
    return `Total Price for ${numGuests} guests ${includeTax ? 'with' : 'without'} Tax: $${formattedPrice}`;
  }
  
  // Event listener for the Calculate button
  function handleCalculateButtonClick() {
    const selectedDishes = Array.from(document.querySelectorAll('.dish-item')).map(dishItem => {
      const quantity = parseInt(dishItem.querySelector('.quantity').textContent);
      if (quantity > 0) {
        const dishName = dishItem.dataset.name;
        return { name: dishName, quantity };
      }
      return null;
    }).filter(Boolean);
  
    const numGuests = parseInt(document.getElementById('guestsInput').value);
    const includeTax = document.getElementById('taxCheckbox').checked;
  
    const receipt = generateReceipt(selectedDishes, numGuests, includeTax);
    document.getElementById('output').innerHTML = receipt;
  }
  
  // Function to generate dish items dynamically
  function generateDishItems() {
    const dishesContainer = document.getElementById('dishesContainer');
    dishData.forEach(dish => {
      const dishItem = document.createElement('div');
      dishItem.classList.add('dish-item');
      dishItem.dataset.name = dish.name;
      dishItem.innerHTML = `
        <div class="dish-info">
          <span>${dish.name} - $${dish.price}</span>
          <div class="quantity-selector">
            <button type="button" class="quantity-btn minus">-</button>
            <span class="quantity">0</span>
            <button type="button" class="quantity-btn plus">+</button>
          </div>
        </div>
      `;
      dishesContainer.appendChild(dishItem);
    });
  
    // Event listener for the quantity buttons
    document.querySelectorAll('.quantity-btn').forEach(button => {
      button.addEventListener('click', function() {
        const quantityDisplay = this.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityDisplay.textContent);
  
        if (this.classList.contains('plus')) {
          quantity++;
        } else if (this.classList.contains('minus')) {
          quantity = Math.max(quantity - 1, 0);
        }
  
        quantityDisplay.textContent = quantity;
      });
    });
  }
  
  // Call the function to generate dish items when the page loads
  window.onload = function() {
    generateDishItems();
    document.getElementById('calculateBtn').addEventListener('click', handleCalculateButtonClick);
  };
  
