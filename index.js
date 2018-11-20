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
  var inCart = "In your cart, you have";
  var listCart = []
  for(var i = 0; i < cart; i++) {
    if (i > 1) {
    listCart.push(` ${item} at $${price}, `);
    }
    if (i === 1) {
      listCart.push
    }
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
