var link = document.querySelector(".callback-popup");
var popup = document.querySelector(".callback");
var close = popup.querySelector(".close");
var login = popup.querySelector("[name=fio]");
var form = popup.querySelector("callback-form");
var password = popup.querySelector("[name=e-mail]");
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("content-show");
    login.focus();
  });
   
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("content-show");
    popup.classList.remove("modal-error");
  });
  

   form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
      evt.preventDefault();
      popup.classList.add("modal-error");
    }
  });

  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("content-show")) {
        popup.classList.remove("content-show");
        popup.classList.remove("modal-error");
      }
    }
  });