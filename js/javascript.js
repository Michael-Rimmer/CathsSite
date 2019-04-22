function underlineNavBarLink() {

    var path = window.location.pathname;
    var link;

    if (path.endsWith("index.html")) {
        link = document.getElementById("indexLink");
        link.style.textDecoration = "underline";
    } else if (path.endsWith("gallery.html")) {
        link = document.getElementById("galleryLink");
        link.style.textDecoration = "underline";
    } else if (path.endsWith("contact.html")) {
        link = document.getElementById("contactLink");
        link.style.textDecoration = "underline";
    }

}



window.onload = function () {

    underlineNavBarLink();

};