/* Toggle between showing and hiding the navigation menu
links when the user clicks on the hamburger menu / bar icon */

var widthMedia = window.matchMedia("(max-width:900px)")
widthMedia.addEventListener(myFunction)

function myFunction(widthMedia) {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block" && widthMedia === true) {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


