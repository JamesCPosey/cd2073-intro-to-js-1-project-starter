/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
{
  name: "cherry",
  price: 0.50,
  quantity: 0,
  productId: 55490,
  image: "../images/cherry.jpg"
},
{
  name: "orange",
  price: 0.45,
  quantity: 0,
  productId: 55491,
  image: "../images/orange.jpg"
},
{
  name: "strawberry",
  price: 0.60,
  quantity: 0,
  productId: 55492,
  image: "../images/strawberry.jpg"
}
];
/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
//making findProduct function for peace of mind for iteration

function findProduct(aProductId) { //takes in productId value, iterates loop to find and return product
  for (let i = 0; i < products.length; i++) {
      if (products[i].productId === aProductId) {
         // console.log("Found product!"); used for testing to make sure code is being called
          return products[i];
      }
  }
  //console.log("Oopsie!");
  return undefined; // Return undefined after checking all products
}
function findProductInCart(aProductId) { // same code to find in cart instead of products
  for (let i = 0; i < cart.length; i++) {
      if (cart[i].productId === aProductId) {
         // console.log("Found product!"); used for testing to make sure code is being called
          return cart[i];
      }
  }
  //console.log("Oopsie!");
  return undefined; // Return undefined after checking all products
}
function addProductToCart(aProductId) {
  let existingProductInCart = findProductInCart(aProductId);

      if (existingProductInCart) {
          increaseQuantity(aProductId);
          return;
      }
const existingProduct = findProduct(aProductId);
  if (existingProduct) {
      cart.push(existingProduct);
      increaseQuantity(aProductId);
      return;
  } else { 
     return undefined;
  }
}


/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(aProductId){
  const existingProduct = findProduct(aProductId);
  if (existingProduct) {
      existingProduct.quantity++;
      return;
  }
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(sampleId){
  const existingProduct = findProduct(sampleId);
  if (existingProduct && existingProduct.quantity > 1) {
      existingProduct.quantity--;
      return;
  } else {
    removeProductFromCart(sampleId);
    return;
  }
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(aProductId){
  let existingProductInCart = findProductInCart(aProductId);
  const index = cart.findIndex(product => product.id === aProductId);
      if (existingProductInCart) {
        existingProductInCart.quantity = 0;
        cart.splice(index, 1);
        return;
      }else {
        return undefined;
  }
  }

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal(){
  let cartSum = 0;
  for (let k = 0; k < cart.length; k++) {
    cartSum += cart[k].price*cart[k].quantity;
  } 
// console.log(cartSum);
return cartSum;

}
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  for (let i = 0; i < cart.length; i++){
    removeProductFromCart(cart[i].productId);
  }
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount){
 let amountOwed = cartTotal();
 let change = 0;
  if (amountOwed === amount){
    //console.log("Thank you, have a nice day!");
    return change;
  } else {
    change = amount - amountOwed;
   // console.log("You had"+change+"left over")
    return change;
  }
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
