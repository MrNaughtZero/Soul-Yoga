function openMenu(){
    document.getElementsByClassName('mobile-menu-links')[0].style.top = '0';
    document.getElementsByClassName('mobile-menu')[0].onclick = hideMenu;
}

function hideMenu(){
    document.getElementsByClassName('mobile-menu-links')[0].style.top = '-400px';
    document.getElementsByClassName('mobile-menu')[0].onclick = openMenu;
}

var header = document.getElementById("main-links");
var btns = header.getElementsByClassName("nav-item");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace("active", "");
  this.className += " active";
  });
}