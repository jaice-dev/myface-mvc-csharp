/* Toggle between showing and hiding the navigation menu
links when the user clicks on the hamburger menu / bar icon */

var max_width = 700;

function toggleBurgerMenu(){
    var widthMediaSmall = window.matchMedia(`(max-width: ${max_width}px )`)
    var x = document.getElementById("myLinks");
    if (widthMediaSmall){
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
}

function turnOnOrOffBurgerMenu(){
    var x = document.getElementById("myLinks");
    
    if(window.innerWidth > max_width){
        if (x.style.display === "block" || x.style.display === "none"){
            x.style.display = "flex";
        }
    } else if (window.innerWidth < max_width){
        if (x.style.display === "flex"){
            x.style.display = "none";
        }
    }
    
}
var x = document.getElementById("myLinks");
x.style.display = "none";
window.onresize = turnOnOrOffBurgerMenu;
turnOnOrOffBurgerMenu()


