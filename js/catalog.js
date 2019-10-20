var cataloglink = document.querySelectorAll(".buy");
var catalogpopup = document.querySelector(".cart");
var catalogclose = catalogpopup.querySelector(".close");
var catalognext = catalogpopup.querySelector(".btn-next")

  
for (var i = 0; i < cataloglink.length; i++) cataloglink[i].addEventListener("click", function(event) {
    event.preventDefault(), catalogpopup.classList.add("cart-show")
});


  catalogclose.addEventListener("click", function (event) {
    event.preventDefault();
    catalogpopup.classList.remove("cart-show");
  });
  
  catalognext.addEventListener("click", function (event) {
    event.preventDefault();
    catalogpopup.classList.remove("cart-show");
  });

  
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      event.preventDefault();
      if (catalogpopup.classList.contains("cart-show")) {
        catalogpopup.classList.remove("cart-show");
      }
    }
  });