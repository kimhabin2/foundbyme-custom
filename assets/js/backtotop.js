document.addEventListener("DOMContentLoaded", function() {
  var btn = document.getElementById("back-to-top");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 20) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  btn.addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
});
