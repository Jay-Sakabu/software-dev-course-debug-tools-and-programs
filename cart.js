const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

const emptyCart = [
];

const cartOneItem = [
  { name: "Big Laptop", price: 1300 },
]
function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Changed <= to <
      total += cartItems[i].price; // DevTools helped loop through to see that calculate total was going outside of array bounds
  }
  return total;
}

function passedInNaN(variable)
{
  throw new Error(`${variable} was passed in as ${typeof variable}`); // Function to throw error for NaN where number should be passed in
}

function applyDiscount(total, discountRate) {
  if(isNaN(discountRate))
  {
    passedInNaN(discountRate)
  }
  return total - total * discountRate; 
}

function generateReceipt(cartItems, total) {
  if(isNaN(total))
  {
    passedInNaN(total)
  }
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // passedInNaN ensure number is passed 
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

//Added tests
//Empty edge case
const totalEdgeCase1 = calculateTotal(emptyCart);
const discountedTotalEdgeCase1 = applyDiscount(totalEdgeCase1, 0.2);
const receiptEdgeCase1 = generateReceipt(emptyCart, discountedTotalEdgeCase1);

//One item cart edge case
const totalEdgeCase2 = calculateTotal(cartOneItem);
const discountedTotalEdgeCase2 = applyDiscount(totalEdgeCase2, 0.2);
const receiptEdgeCase2 = generateReceipt(cartOneItem, discountedTotalEdgeCase2);

//Discount of 0 edge case
const totalEdgeCase3 = calculateTotal(cart);
const discountedTotalEdgeCase3 = applyDiscount(totalEdgeCase3, 0.0);
const receiptEdgeCase3 = generateReceipt(cart, discountedTotalEdgeCase3);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;

//Tests
document.getElementById("totalEdgeCase1").textContent = `Total: $${discountedTotalEdgeCase1}`;
document.getElementById("receiptEdgeCase1").textContent = receiptEdgeCase1;

document.getElementById("totalEdgeCase2").textContent = `Total: $${discountedTotalEdgeCase2}`;
document.getElementById("receiptEdgeCase2").textContent = receiptEdgeCase2;

document.getElementById("totalEdgeCase3").textContent = `Total: $${discountedTotalEdgeCase3}`;
document.getElementById("receiptEdgeCase3").textContent = receiptEdgeCase3;