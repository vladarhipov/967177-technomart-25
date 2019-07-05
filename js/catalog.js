var cartPopup = document.querySelector(".cart-popup");
var cartLink = document.querySelectorAll(".add-to-cart-button");
var cartClose = document.querySelectorAll(".close-modal-button");
var bookmarkButton = document.querySelectorAll(".add-to-bookmarks-button");

var bookmarkLink = document.querySelector(".header-bookmark");
var orderLink = document.querySelector(".header-cart");

for (var i = 0; i < cartLink.length; i++) {
  cartLink[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
    orderLink.classList.add("item-added");
  });
}

for (var i = 0; i < cartClose.length; i++) {
cartClose[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});

for (var i = 0; i < bookmarkButton.length; i++) {
  bookmarkButton[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    bookmarkLink.classList.add("item-added");
  });
}
