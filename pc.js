var caret = document.getElementById("curentItemCaret")
var my_projects = document.getElementById("my_projects")
var navItems = document.getElementsByClassName("navItem")

caret.style.top = `0px`

function chooseItem(li) {
    caret.style.top = `${(indexInParent(li) - 1) * 75}px`
    removeIds(li)
    li.setAttribute("id", "curentItem")
}

function indexInParent(node) {
    var children = node.parentNode.childNodes;
    var num = 0;
    for (var i = 0; i < children.length; i++) {
        if (children[i] == node) return num;
        if (children[i].nodeType == 1) num++;
    }
    return -1;
}

function removeIds(node) {
    var children = node.parentNode.childNodes;
    for (var i = 1; i < children.length; i++) {
        if (children[i].id == "curentItem") {
            children[i].removeAttribute("id")
        }
    }
}


window.onscroll = function() {

    var my_projects_rect = my_projects.getBoundingClientRect()
    if (my_projects_rect.top <= 0 && my_projects_rect.top > -window.innerHeight) {
        chooseItem(navItems[0])
    }
    if (my_projects_rect.top <= -window.innerHeight && my_projects_rect.top > -2 * window.innerHeight) {
        chooseItem(navItems[2])
    }
    if (my_projects_rect.top <= -2 * window.innerHeight && my_projects_rect.top >= -3 * window.innerHeight) {
        chooseItem(navItems[3])
    }
}

const icons = document.querySelectorAll('.openTab');
icons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open")
        icon.parentElement.getElementsByClassName("hideCont")[0].classList.toggle("open")

        // if (icon.parentElement.getElementsByTagName("p")[0].style.display == "block") {
        //     
        // }
    });
});

setTimeout(function() {
    document.body.className = "";
}, 1000);