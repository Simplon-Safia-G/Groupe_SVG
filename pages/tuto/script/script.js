var navbar = document.getElementById("navbar");
var chapters = Array.from(document.getElementsByClassName("chapters"));
for (let i = 0; i < chapters.length; i++) {
    let title = chapters[i].firstElementChild;
    title.setAttribute("id", `${"chapter" + i}`);
    let li = document.createElement("li");
    navbar.appendChild(li);
    let a = document.createElement("a");
    a.setAttribute("href", `${"#chapter" + i}`);
    a.innerHTML = title.innerHTML;
    a.innerHTML = a.innerHTML.split("-")[0];
    a.innerHTML = a.innerHTML.split(":")[0];
    li.appendChild(a);
    var parts = chapters[i].getElementsByClassName("sous-titre");
    var ul;
    if (parts.length != 0) {
        ul = document.createElement("ul");
        li.appendChild(ul);
    }
    ;
    for (let e = 0; e < parts.length; e++) {
        parts[e].setAttribute("id", `${"part" + i + "-" + e}`);
        let li = document.createElement("li");
        ul.appendChild(li);
        let a = document.createElement("a");
        a.setAttribute("href", `${"#part" + i + "-" + e}`);
        a.innerHTML = parts[e].innerHTML;
        a.innerHTML = a.innerHTML.split("-")[0];
        a.innerHTML = a.innerHTML.split(":")[0];
        li.appendChild(a);
    }
    ;
}
;
