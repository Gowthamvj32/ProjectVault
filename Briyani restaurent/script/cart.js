let carts = document.querySelectorAll(".add-cart");
let products = [
  {
    name: "Do Gosht ki Dum Biryani",
    tag: "do_gosht_ki_dum_biryani",
    price: 360,
    inCart: 0,
  },
  {
    name: "Dum Gosht Biryani",
    tag: "dum_gosht_biryani",
    price: 520,
    inCart: 0,
  },
  {
    name: "Lazeez Bhuna Murgh Biryani",
    tag: "lazeez_bhuna_murgh_biryani",
    price: 420,
    inCart: 0,
  },
  {
    name: "Murgh Afghani Tikka Biryani",
    tag: "murgh_afghani_tikka_biryani",
    price: 530,
    inCart: 0,
  },
  {
    name: "Paneer Subz Biryani",
    tag: "paneer_subz_biryani",
    price: 760,
    inCart: 0,
  },
  {
    name: "Shaandaar Briyani",
    tag: "shaandaar_briyani",
    price: 1260,
    inCart: 0,
  },
  {
    name: "Shahi Ramadan Briyani",
    tag: "shahi_ramadan_briyani",
    price: 1340,
    inCart: 0,
  },
  {
    name: "Subz-e-Biryani",
    tag: "subz_e_biryani",
    price: 740,
    inCart: 0,
  },
  {
    name: "Tokhm-e-Biryani",
    tag: "tokhm_e_biryani",
    price: 370,
    inCart: 0,
  },
  {
    name: "Zaikedaar Paneer Biryani",
    tag: "zaikedaar_paneer_biryani",
    price: 420,
    inCart: 0,
  },
];

carts.forEach((cart, i) => {
  cart.addEventListener("click", () => {
    updateLocalStorage(products[i], "add");
    displayCart();
  });
});

function onLoadCartNumbers() {
  const productNumbers = parseInt(getLocalStorage("cartNumbers")) || 0;
  updateCartNumbers(productNumbers);
}

function updateLocalStorage(item, action) {
  let cartItems = JSON.parse(getLocalStorage("productsInCart")) || {};
  let cartCost = parseInt(getLocalStorage("totalCost")) || 0;
  let productNumbers = parseInt(getLocalStorage("cartNumbers")) || 0;

  if (action === "add") {
    productNumbers++;
    cartCost += item.price;

    if (cartItems[item.tag]) {
      cartItems[item.tag].inCart++;
    } else {
      item.inCart = 1;
      cartItems[item.tag] = item;
    }
  } else if (action === "remove" && cartItems[item.tag]) {
    const removedItemTotal =
      cartItems[item.tag].price * cartItems[item.tag].inCart;
    productNumbers -= cartItems[item.tag].inCart;
    cartCost -= removedItemTotal;
    cartItems[item.tag].inCart = 0;
    delete cartItems[item.tag];
  }

  setLocalStorage("cartNumbers", productNumbers);
  setLocalStorage("totalCost", cartCost);
  setLocalStorage("productsInCart", JSON.stringify(cartItems));

  updateCartNumbers(productNumbers);
}

function getLocalStorage(key) {
  return localStorage.getItem(key);
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function updateCartNumbers(quantity) {
  document.querySelector(".cart-number").textContent = quantity;
}

function displayCart() {
  let cartItems = JSON.parse(getLocalStorage("productsInCart")) || {};
  let productContainer = document.querySelector(".cart-items");
  let grandTotal = 0;

  if (productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).forEach((item) => {
      const itemTotal = item.price * item.inCart;
      grandTotal += itemTotal;
      productContainer.innerHTML += `
      <tr>
        <td>
          <img src="../assest/${item.tag}.avif" alt="item-img"><br>${item.name}
        </td>
        <td>Rs. ${item.price}</td>
        <td>${item.inCart}</td>
        <td>Rs. ${itemTotal}</td>
        <td class="remove-icon" onclick="removeItem('${item.tag}')">&#10006;</td>
      </tr>`;
    });

    document.querySelector(".grand-total").textContent = `₹${grandTotal}`;
  }
}

function removeItem(tag) {
  updateLocalStorage({ tag: tag }, "remove");
  displayCart();
}

function redirectToPayment() {
  window.location.href = "payment.html";
}

onLoadCartNumbers();
displayCart();
