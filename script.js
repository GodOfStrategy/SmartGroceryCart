// array to store grocery items
let cart = [];
//add item function 
function addItem() {
    // get item name and price from input fields
    const name = document.getElementById('itemName').value.trim();
    const price = parseFloat(document.getElementById('itemPrice').value);
    const qty = parseInt(document.getElementById('itemQty').value);

    // validate inputs
    if (name === '' || isNaN(price) || price <= 0 || isNaN(qty) || qty <= 0) {
        alert('Please enter valid item name, price, and quantity.');
        return;
    }

    // create a new item object
    const item = {
        name: name,
        price: price,
        quantity: qty,
        getTotal: function() {
            return this.price * this.quantity;
        }
    };

    // add the new item to the cart array
    cart.push(item);

    // clear input fields
    clearInputs()

    // update the cart display
    updateCart();
}

function updateCart() {
    const tbody = document.querySelector('#cartTable tbody');
    tbody.innerHTML = ''; // clear existing rows
    let total = 0;
    // loop through each item in the cart
    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>${item.getTotal().toFixed(2)}</td>
            <td><button class="remove-btn" onclick="removeItem(${index})">Remove</button></td>
        `;
        tbody.appendChild(row);
        total += item.getTotal();
    });
    // update the total display
    document.getElementById('totalAmount').textContent = total.toFixed(2);
}
//function to remove item
function removeItem(index) {
    cart.splice(index, 1); // remove item from cart
    updateCart(); // update the cart display
}
// function to clear screen
document.getElementById('clearCart').addEventListener('click', function() {
    cart = []; // clear the cart array
    updateCart(); // update the cart display
});