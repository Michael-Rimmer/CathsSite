function underlineNavBarLink() {

    var path = window.location.pathname;
    var link;

    if (path.endsWith("home.html")) {
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

// might add back to have insta logo change colour
// function hoverOn(element) {
//     //element.setAttribute('src', 'imgs/instaLogoHover.png');
// }

// function hoverOff(element) {
//     //element.setAttribute('src', 'imgs/instaLogo.png');
// }


window.onload = function () {

    underlineNavBarLink();

};