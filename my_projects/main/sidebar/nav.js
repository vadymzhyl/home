const tab = document.querySelector("#activeTab")
const ul = document.querySelector("#link-cont")

function goTo(link) {
    tab.style.top = `${link.offsetTop}px`

    for (var i = 0; i < ul.getElementsByTagName("li").length; i++) {
        ul.getElementsByTagName("li")[i].removeAttribute("id")
    }
    link.setAttribute("id", "active-link")
}

const open = document.querySelector("#open-menu")
const ulm = document.querySelector("#menu")

function openNav() {

    if (ulm.getElementsByTagName("li")[0].offsetTop < 16) {
        for (var i = 0; i < ulm.getElementsByTagName("li").length; i++) {
            ulm.getElementsByTagName("li")[i].style.top = `${10 + 75 * (i + 1)}px`
            ulm.getElementsByTagName("li")[i].style.zIndex = `-${i+1}`
        }
        open.style.transform = "rotate(90deg)"
    }

    if (ulm.getElementsByTagName("li")[0].offsetTop > 17) {
        for (var i = 0; i < ulm.getElementsByTagName("li").length; i++) {
            ulm.getElementsByTagName("li")[i].style.top = `15px`
        }
        open.style.transform = "rotate(0deg)"
    }


}