/* Toggle between showing and hiding the navigation menu
links when the user clicks on the hamburger menu / bar icon */

function test(widthMedia) {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block" && widthMedia) {
        x.style.display = "none";
    } else if (widthMedia){
        x.style.display = "block";
    }
}

function myFunction(){
    var widthMedia = window.matchMedia("(max-width: 900px)")
    test(widthMedia)
}


