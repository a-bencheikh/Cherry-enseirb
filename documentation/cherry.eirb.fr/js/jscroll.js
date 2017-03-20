function jscroll() {
  var lst=10000;
  window.addEventListener('scroll', function(e){
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > 5) {
      document.getElementById("navbar").classList.add("navbar-over");
    }else {
      document.getElementById("navbar").classList.remove("navbar-over");
    }
    if (st > 150) {
      if (lst-st < 0) {
        document.getElementById("navbar").classList.add("navbar-scroll");
      } else {
        document.getElementById("navbar").classList.remove("navbar-scroll");
      }
    }
    lst=st;
    document.getElementById("nav").checked = false;
  });
}
window.onload = jscroll();
