document.addEventListener("DOMContentLoaded", function () {
  var params = new URLSearchParams(window.location.search);
  var rabiCoeg = params.get("no");
  if (rabiCoeg !== null) {
    document.title = "Contoh tema " + rabiCoeg;
    var rabi = "tm-" + rabiCoeg;
    var base = "aHR0cHM6Ly93d3cua2FsYWhhcnUueHl6Lw==";
    var awkey = window.atob(base) + rabi;
    var value = document.getElementById("ngent").src;
    document.getElementById("ngent").setAttribute("src", awkey);
  } else {
    window.location.href = "/";
  }
});
