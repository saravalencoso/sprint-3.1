// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        quantity: 0,
        subtotal: 0,
        subtotalWithDiscount: 0,
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery',
        quantity: 0,
        subtotal: 0,
        subtotalWithDiscount: 0
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5.0,
        type: 'grocery',
        quantity: 0,
        subtotal: 0,
        subtotalWithDiscount: 0,
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260.0,
        type: 'beauty',
        quantity: 0,
        subtotal: 0,
        subtotalWithDiscount: 0
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty',
        quantity: 0,
        subtotal: 0,
        subtotalWithDiscount: 0
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty',
        quantity: 0,
        subtotal: 0,
        subtotalWithDiscount: 0
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15.0,
        type: 'clothes',
        quantity: 0,
        subtotal: 0,
        subtotalWithDiscount: 0
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes',
        quantity: 0,
        subtotal: 0,
        subtotalWithDiscount: 0
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes',
        quantity: 0,
        subtotal: 0,
        subtotalWithDiscount: 0
    }
]

// Array with products (objects) added directly with push(). 
// Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), 
// but each one has a quantity field to define its quantity, 
// so these products are not repeated.
let cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for(let i=0; i<products.length; i++) {
        if (products[i].id === id) {
            cartList.push(products[i]); console.log(products[i]);
            break;
        }
    } 
    
    console.log(cartList);
    console.log(cart);
    calculateTotal();
}

// Exercise 2
function cleanCart() {

    cartList = []; console.log(cartList)
    cart = []; console.log(cart)

    total = 0;

    for(let i=0; i<products.length; i++) {
        products[i].quantity = 0;
    }

    let cartItems = document.getElementById("cart_list");
    cartItems.innerHTML = "";

    let totalPrice = document.getElementById("total_price");
    totalPrice.innerHTML = 0;

} 

// Exercise 3

function calculateTotal() {

    let totalPrice = 0;

    for(let i=0; i<cart.length; i++){
        totalPrice += cart[i].price*cart[i].quantity; 
    }

    return totalPrice;

}

// Exercise 4

function generateCart() { 

    let cartItems = document.getElementById("cart_list");
    cartItems.innerHTML = ""; // Cada cop que es clica Generate Cart, primer se'n buida el contingut

    let i;

    for(i=0; i<cartList.length; i++) { //Si s'afegeix l'igual (=) el bucle falla
        const FOUND = cart.find(item => {
                return item.id === cartList[i].id;
        }); 

        if(FOUND) {
            FOUND.quantity++;
        } else {
            cartList[i].quantity++;
            cart.push(cartList[i]);
        }
    } 
    
    cartList.length = 0;
    calculateTotal();
    applyPromotionsCart();
    printCart();

    console.log(cartList);
    console.log(cart);
} 

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    // Si l'usuari compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros.
    // Quan es compren 10 o més productes per a fer pastís, el seu preu es rebaixa a 2/3.

    let i;   

    for (i=0; i<cart.length; i++) {
        if (cart[i].id===1 && cart[i].type==`grocery` && cart[i].quantity>=3){
            cart[i].price = 10;
            console.log("Tens descompte en l'oli.");
            break;
        } 
    }

    for (i=0; i<cart.length; i++) {
        if (cart[i].id===3 && cart[i].type==`grocery` && cart[i].quantity>=10){
            cart[i].price = (5*2/3).toFixed(2);
            console.log("Tens descompte en els productes per a fer pastís.");
            break;
        }
    }

    // for (i=0; i<cart.length; i++) {
    //     if (cart[i].id===1 && cart[i].type==`grocery` && cart[i].quantity>=3){
    //         cart[i].price = 10;
    //         console.log("Tens descompte en l'oli.");
    //         break;
    //     } else if (cart[i].id===3 && cart[i].type==`grocery` && cart[i].quantity>=10){
    //         cart[i].price = (5*2/3).toFixed(2);
    //         console.log("Tens descompte en els productes per a fer pastís.");
    //         break;
    //     } else {
    //         break;
    //     }
    // }
}

// Exercise 6

function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    let productName, price, quantity, total;
    let cartItems = document.getElementById("cart_list");
    let total_Price = document.getElementById("total_price");

    for (let i=0; i<cart.length; i++) { // for loop to iterate through the cart and get productName, price, quantity and total
        productName = cart[i].name; 
        price = cart[i].price; 
        quantity = cart[i].quantity; 
        total = price*quantity;

        cartItems.insertAdjacentHTML("beforeend", 
        `<tr class="cart_item">
            <th scope="row">${productName}</th>
            <td>${price}</td>
            <td>${quantity}</td>
            <td>${"$" + total}</td>
        </tr>`);

        total_Price.innerHTML = (calculateTotal()).toFixed(2);

    }

}


// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// ** Nivell II **

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}