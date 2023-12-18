function graphicBox(box) {
    if (!document.getElementById) return;
    obj = document.getElementById(box);
    parentobj = obj.parentNode;
    obj.style.display = "none";
    img = document.createElement("img");
    img.addEventListener("click", Toggle);
    img.src = "images/unchecked.png";
    img.style.width = "50px";
    img.id = "img" + box;
    parentobj.insertBefore(img, obj);
}
function Toggle(e) {
    if (!e) var e = window.event;
    img = (e.target) ? e.target : e.srcElement;
    checkid = img.id.substring(3);
    var checkbox = document.getElementById(checkid);

    if (checkbox.checked) {
        checkbox.checked = false;
        file = "images/checked.png";
    } else {
        checkbox.checked = true;
        file= "images/unchecked.png";
    }
    img.src = file;
}
graphicBox("check2");