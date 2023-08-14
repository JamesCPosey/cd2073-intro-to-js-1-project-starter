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
  price: "$0.50",
  quantity: 0,
  productId: 55490,
  image: "../images/cherry.jpg"
},
{
  name: "orange",
  price: "$0.45",
  quantity: 0,
  productId: 55491,
  image: "../images/orange.jpg"
},
{
  name: "strawberry",
  price: "$0.60",
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
//making findProduct function for peace of mind

function findProduct(aProductId){
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === aProductId) {
      return products[i];
    } else {
      return undefined;
    }
}
}

function addProductToCart(aProductId){
  const existingProductInCart = false; // create boolean to check if product is in cart
  for (let j = 0; j < this.length; j++) {
    if (this[j].id === aProductId) {
      existingProductInCart = true;
      increaseQuantity(aProductId); 
      return; // will exit immediately if the product is in the cart 
    } else {
        const existingProduct = findProduct(aProductId);
        if (existingProduct) {
            cart.push(existingProduct);
            increaseQuantity(aProductId);
        } else {
            console.log("Product not found.");
        }
    }
}
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(aProductId){
  const existingProduct = products.find(({ productId }) => products.productId === aProductId);
  if (existingProduct) {
      existingProduct.quantity += 1;
      return;
  }
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(products, productID){}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(products, productID){}
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal(){
  let fullCart = 0;
  let cartSum = 0;
  while (fullCart < cart.length){
    
  }

}
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  this.splice(0);
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount){}/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


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
