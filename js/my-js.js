var link = document.querySelector(".callback-popup");
var popup = document.querySelector(".callback");

  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("content-show");
   });