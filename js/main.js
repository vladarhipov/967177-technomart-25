var link = document.querySelector(".show-write-us-form");
var popup = document.querySelector(".write-us");
var form = popup.querySelector("form");
var close = document.querySelector(".write-us .close-modal-button");
var email = document.querySelector(".write-us input[name=email]");
var namesername = document.querySelector(".write-us input[name=name-surname]");
var comment = document.querySelector(".write-us textarea[name=comment]");

var mappopup = document.querySelector(".modal-map");
var maplink = document.querySelector(".show-map");
var mapclose = document.querySelector(".modal-map .close-modal-button");


var isStorageSupport = true;
var storagename = "";
var storagemail = "";

try {
  storagename = localStorage.getItem("namesername");
  storagemail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storagename) {
    namesername.value = storagename;
    email.value = storagemail;
    email.focus();
  } else {
    namesername.focus();
  }

  if (storagemail) {
    comment.focus();
  } else {
    email.focus();
  }

});

form.addEventListener("submit", function (evt) {
  if (!namesername.value || !email.value || !comment.value) {
    evt.preventDefault();
    if (!namesername.value) {namesername.classList.add("red-border")};
    if (!email.value) {email.classList.add("red-border")};
    if (!comment.value) {comment.classList.add("red-border")};
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("namesername", namesername.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  namesername.classList.remove("red-border");
  email.classList.remove("red-border");
  comment.classList.remove("red-border");
});


maplink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mappopup.classList.add("modal-show");
});

mapclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mappopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mappopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mappopup.classList.remove("modal-show");
    }
  }
});
