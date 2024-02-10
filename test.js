var tabHeaders = document.querySelectorAll(".tab-header");

tabHeaders.forEach(function(tabHeader) {
  tabHeader.addEventListener("click", function() {
    var tabNumber = this.id.split("-")[2];
    document.querySelector(".tab-header.active").classList.remove("active");
    document.querySelector(".tab-content.active").classList.remove("active");
    this.classList.add("active");
    document.getElementById("tab-content-" + tabNumber).classList.add("active");
  });
});
