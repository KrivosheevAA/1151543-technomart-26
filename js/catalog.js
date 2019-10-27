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

var cataloginbookmarks = document.querySelectorAll(".in-bookmarks");
var catalogbookmark = document.querySelector(".bookmark");
var catalogbuy = document.querySelectorAll(".buy");
var catalogbasket = document.querySelector(".basket");


for (var i = 0; i < cataloginbookmarks.length; i++) cataloginbookmarks[i].addEventListener("click", function(event) {
    event.preventDefault(), catalogbookmark.classList.add("added")
});

for (var i = 0; i < catalogbuy.length; i++) catalogbuy[i].addEventListener("click", function(event) {
    event.preventDefault(), catalogbasket.classList.add("added")
});
