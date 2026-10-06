// The cart is saved in this browser under this name, so it is still there
// when you open another page or come back tomorrow.
const CART_KEY = "vivestand-cart";

// Read the cart. It is a list of items like:
// { sport: "football", mark: "FB", name: "Nike Mercurial Boots", price: 3500, quantity: 1 }
function loadCart() {
    const saved = localStorage.getItem(CART_KEY);
    if (saved === null) {
        return [];
    }
    return JSON.parse(saved);
}

// Save the cart and update the number in the header straight away.
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    showCartCount();
}

// Count every piece in the cart (2 boots + 1 ball = 3) and show it in the header.
function showCartCount() {
    const cart = loadCart();
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
        count = count + cart[i].quantity;
    }

    const countSpots = document.querySelectorAll(".cart-count");
    for (let i = 0; i < countSpots.length; i++) {
        countSpots[i].textContent = count;
    }
}

showCartCount();
