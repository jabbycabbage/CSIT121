function myFunction() {
    var x = document.getElementById("bottomNav");
    var y = document.getElementById("bottomNav2");
    if (x.style.display === "grid") {
      x.style.display = "none";
      y.style.display = "none";
    } else {
      x.style.display = "grid";
      y.style.display = "grid";
    }
  }