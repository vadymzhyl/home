const open = document.querySelector("#open-menu")
const ulm = document.querySelector("#menu")

function openNav() {

    var rt = window.innerWidth - ulm.getElementsByTagName("li")[0].getBoundingClientRect().right

    if (rt < 17) {
        for (var i = 0; i < ulm.getElementsByTagName("li").length; i++) {
            ulm.getElementsByTagName("li")[i].style.right = `${10 + 75 * (i + 1)}px`
        }
        open.style.transform = "rotate(90deg)"
    }

    if (rt > 15) {
        for (var i = 0; i < ulm.getElementsByTagName("li").length; i++) {
            ulm.getElementsByTagName("li")[i].style.right = `15px`
        }
        open.style.transform = "rotate(0deg)"
    }
}

var scrollToTop = document.querySelector("#scrollToTop")

window.onscroll = function() {
    if (window.pageYOffset < 100) { scrollToTop.style.opacity = "0" }
    if (window.pageYOffset > 100) { scrollToTop.style.opacity = "1" }
}