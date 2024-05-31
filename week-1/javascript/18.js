/**
 * Create a shopping cart that allows the user to add items to the cart and remove items from the cart. An item is a javascript object with the following properties:
 * - name: the name of the item
 * - price: the price of the item
 *
 * The shopping cart should be able to store up to 10 items.
 * The shopping cart should be able to display the total price of the items in the cart.
 * The shopping cart should be able to display the total number of items in the cart.
 *
 * Example:
 * - add item "apple" to cart
 * - remove item "apple" from cart
 * - display total price of items in cart
 * - display total number of items in cart
 *
 * @param {string[]} items
 * @returns {string}
 */

let items = [{name:'apple', price: 10},
            {name:'banana', price: 20},
]
function display() {
    let sum = 0;
    let totalItems = items.length
    for(x in items){
        sum += items[x].price
    }

    console.log(items);
    console.log( `The cart has ${totalItems} total number of items and a total price of ${sum}`)
}

function addItem(itemName, itemPrice){
    if(items.length >= 10){
        console.log('The cart is already full');
    }

    items.push({name:itemName, price:itemPrice})
    console.log( `${itemName} added with a price of ${itemPrice}`);
    display()
    

}

function removeItem(index) {
    if (index >= 0 && index < items.length) {
        items.splice(index, 1);
        console.log(`Item at index ${index} removed from the cart`);
        display();
    }
}

removeItem(0);
addItem("large intestine", 100000)