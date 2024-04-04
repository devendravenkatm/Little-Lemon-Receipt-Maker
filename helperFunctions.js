// helperFunctions.js

// Given variables
const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
  ];
  const tax = 1.2;
  
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
  
  module.exports = {
    calculateTotalPrice,
    calculateTotalPriceWithTax,
  };
  