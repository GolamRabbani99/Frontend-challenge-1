var menuBtn = document.getElementById("menu-btn");

//side nav adding
var menuNav = document.getElementById("side-nav");

//from icon or image
var menu = document.getElementById("menu");
menuNav.style.right = "-250px";

menuBtn.onclick = function () {
    if (menuNav.style.right == "-250px") {
        menuNav.style.right = "0";
        menu.src = "images/menu-image/close.png";

    } else {
        menuNav.style.right = "-250px";
        menu.src = "images/menu-image/menu.png";
    }
}
