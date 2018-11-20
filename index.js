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
  var newarray = [];
  for(var i = 0; i < cart.length; i++) {
    newarray.push(`${item} at $${price}`);
    }
    var inCart = "In your cart, you have";
    if (newarray.length ===1) {
      inCart += newarray + '.';
    } else if (newarray ===2) {
      inCart += (newarray[0] + 'and' + newarray[1] + '.');
    } else if (newarray > 2) {
      var lastelement = newarray.pop();
      var other_item = newarray.join(', ');
      inCart += (other_item + ', and' + lastelement + '.');
    } else if (newarray === 0) {
      var emptyCart = 'Your shopping cart is empty.';
      inCart = emptyCart;
    }
    return inCart;
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
