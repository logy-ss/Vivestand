// The cart page: what you picked in the Equipment shop, how many of each,
// the total price, and a form to "order" it. There is no real shop behind
// it yet, so placing an order only shows a thank-you message.
// loadCart() and saveCart() come from ../Components/cart-count.js.

// Make one element with a class and some text, e.g. makeElement("h3", "title", "Hello").
function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    return element;
}

// 3500 becomes "EGP 3,500".
function formatPrice(price) {
    return "EGP " + price.toLocaleString("en-EG");
}

// Add one more (+1) or one less (-1) of the item at this spot in the cart.
// When it gets to 0, the item leaves the cart.
function changeQuantity(spot, change) {
    const cart = loadCart();
    cart[spot].quantity = cart[spot].quantity + change;
    if (cart[spot].quantity === 0) {
        cart.splice(spot, 1);
    }
    saveCart(cart);
    showCart();
}

// One row: mark, name, price, − quantity +, and the row's total.
function makeCartRow(item, spot) {
    const row = makeElement("div", "cart-row", "");
    row.appendChild(makeElement("span", "cart-mark", item.mark));
    row.appendChild(makeElement("span", "cart-name", item.name));
    row.appendChild(makeElement("span", "cart-price", formatPrice(item.price)));

    const amount = makeElement("span", "cart-amount", "");
    const lessButton = makeElement("button", "amount-button", "−");
    lessButton.type = "button";
    lessButton.addEventListener("click", function () {
        changeQuantity(spot, -1);
    });
    const moreButton = makeElement("button", "amount-button", "+");
    moreButton.type = "button";
    moreButton.addEventListener("click", function () {
        changeQuantity(spot, 1);
    });
    amount.appendChild(lessButton);
    amount.appendChild(makeElement("span", "cart-quantity", "×" + item.quantity));
    amount.appendChild(moreButton);
    row.appendChild(amount);

    row.appendChild(makeElement("strong", "cart-row-total", formatPrice(item.price * item.quantity)));
    return row;
}

// Draw the whole cart again from what is saved.
function showCart() {
    const cart = loadCart();
    const list = document.getElementById("cart-list");
    list.textContent = "";

    if (cart.length === 0) {
        document.getElementById("cart-empty").style.display = "block";
        document.getElementById("cart-full").style.display = "none";
        return;
    }

    document.getElementById("cart-empty").style.display = "none";
    document.getElementById("cart-full").style.display = "block";

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        list.appendChild(makeCartRow(cart[i], i));
        total = total + cart[i].price * cart[i].quantity;
    }
    document.getElementById("cart-total").textContent = formatPrice(total);
}

// Show a red message when something is missing.
function showProblem(text) {
    document.getElementById("form-message").textContent = text;
}

function placeOrder(event) {
    // Stay on this page instead of letting the form reload it.
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if (name === "") {
        showProblem("Please fill in your name.");
        return;
    }
    if (phone === "") {
        showProblem("Please fill in your phone number.");
        return;
    }
    if (address === "") {
        showProblem("Please fill in your address.");
        return;
    }

    document.getElementById("order-summary").textContent =
        "Thanks, " + name + "! This is a demo, nothing was sent. We'd deliver to: " + address + ".";

    // The order is "done", so the cart starts empty again.
    saveCart([]);
    showCart();
    document.getElementById("cart-empty").style.display = "none";
    document.getElementById("order-placed").style.display = "block";
}

document.getElementById("delivery-form").addEventListener("submit", placeOrder);
showCart();
