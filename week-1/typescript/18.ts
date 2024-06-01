type itemType = { name: string, price: number }[];

let item: itemType = [
    { name: "apple", price: 10 },
    { name: "banana", price: 20 },
];

function disp(): { totalItems: number, totalPrice: number } {
    let totalPrice = 0;
    let totalItems = item.length;
    for (let x in item) {
        totalPrice += item[x].price;
    }
    return { totalItems, totalPrice };
}

function addItems(itemName: string, itemPrice: number): void {
    if (item.length >= 10) {
        console.log("The cart is already full");
        return;
    }

    item.push({ name: itemName, price: itemPrice });
    console.log(`${itemName} added with a price of ${itemPrice}`);
    const { totalItems, totalPrice } = disp();
    console.log(`The cart has ${totalItems} total number of items and a total price of ${totalPrice}`);
}

function removeItems(index: number): string {
    if (index >= 0 && index < item.length) {
        item.splice(index, 1);
        const { totalItems, totalPrice } = disp();
        return `Item at index ${index} removed from the cart. The cart now has ${totalItems} total number of items and a total price of ${totalPrice}`;
    } else {
        return "Invalid index. Item not removed from the cart.";
    }
}

console.log(removeItems(0));
addItems("large intestine", 100000);
