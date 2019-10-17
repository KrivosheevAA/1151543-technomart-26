var link = document.querySelector(".callback-popup");
var popup = document.querySelector(".callback");
var close = popup.querySelector(".close");
var login = popup.querySelector("[name=fio]");
var form = popup.querySelector(".callback-form");
var password = popup.querySelector("[name=e-mail]");
  
  link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("content-show");
    login.focus();
  });
   
  
  close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("content-show");
    popup.classList.remove("modal-error");
  });
  

   form.addEventListener("submit", function (event) {
    if (!login.value || !password.value) {
    	 event.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
  });


  
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      event.preventDefault();
      if (popup.classList.contains("content-show")) {
        popup.classList.remove("content-show");
        popup.classList.remove("modal-error");
      }
    }
  });