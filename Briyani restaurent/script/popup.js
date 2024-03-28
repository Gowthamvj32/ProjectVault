let addToCartBtn = document.getElementsByClassName("add-cart");

for (let i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].addEventListener("click", addToCart);
}

function addToCart(event) {
  let btn = event.target;
  let btn_grandparent = btn.parentElement.parentElement;

  // Get the .item-added-pop-up element
  let itemAddedPopup = btn_grandparent.querySelector(".item-added-pop-up");

  // Show the itemAddedPopup by changing its opacity
  itemAddedPopup.style.opacity = "1";

  // You can optionally add a delay to hide the message after a few seconds
  setTimeout(function () {
    // Hide the itemAddedPopup by changing its opacity
    itemAddedPopup.style.opacity = "0";
  }, 500); // Adjust the delay (in milliseconds) as needed
}
