
var burger = document.getElementById("burger-img");
var navToggle = document.getElementById("nav-hidden");
var scrWidth = screen.width;
var navBar = document.getElementById("nav");


burger.addEventListener("click", function () {
    navToggle.classList.toggle("nav-active");
    navToggle.classList.toggle("li-active");
    console.log(" burger worked")
});

function myFunction() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;
    if (w > 1162) {
        navToggle.classList.remove("nav-active");
        navToggle.classList.remove("li-active");
        console.log("remove")
    }
}

var k = document.getElementById("about-click");
var l = document.getElementById("features-click");
var i = document.getElementById("compare-click");

var c = document.getElementById("wallets-click");
var kk = document.getElementById("exchanges-click");
var b = document.getElementById("explorer-click");

var a = document.getElementById("community-click");
var r = document.getElementById("faq-click");
var rr = document.getElementById("contacts-click");

k.addEventListener("click", function () {
    navToggle.classList.toggle("nav-active");
    navToggle.classList.toggle("li-active");
    console.log("aaa worked")
});

l.addEventListener("click", function () {
    navToggle.classList.toggle("nav-active");
    navToggle.classList.toggle("li-active");
    console.log("aaa worked")
});

i.addEventListener("click", function () {
    navToggle.classList.toggle("nav-active");
    navToggle.classList.toggle("li-active");
    console.log("aaa worked")
});

c.addEventListener("click", function () {
    navToggle.classList.toggle("nav-active");
    navToggle.classList.toggle("li-active");
    console.log("aaa worked")
});

kk.addEventListener("click", function () {
    navToggle.classList.toggle("nav-active");
    navToggle.classList.toggle("li-active");
    console.log("aaa worked")
});

b.addEventListener("click", function () {
    navToggle.classList.toggle("nav-active");
    navToggle.classList.toggle("li-active");
    console.log("aaa worked")
});

a.addEventListener("click", function () {
    navToggle.classList.toggle("nav-active");
    navToggle.classList.toggle("li-active");
    console.log("aaa worked")
});

r.addEventListener("click", function () {
    navToggle.classList.toggle("nav-active");
    navToggle.classList.toggle("li-active");
    console.log("aaa worked")
});

rr.addEventListener("click", function () {
    navToggle.classList.toggle("nav-active");
    navToggle.classList.toggle("li-active");
    console.log("aaa worked")
});



