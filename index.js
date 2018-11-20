var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 //write your code here
 var price = Math.floor(Math.random()*100) + 1;
 cart.push({ itemName: item, itemPrice: price });
 console.log(`${item} has been added to your cart.`);
 return (`${item} has been added to your cart.`);
}

function viewCart() {
  // write your code here
  var newArray = []
  for(var i = 0; i < cart.length; i++) {
    newArray.push(` ${item} at $${price}, `);
    }
    var inCart = "In your cart, you have";
    if (newArray.length ===1) {
      
    }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
