/* Toggle between showing and hiding the navigation menu
links when the user clicks on the hamburger menu / bar icon */

function toggleBurgerMenu(){
    var widthMediaSmall = window.matchMedia("(max-width: 900px)")
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
    
    if(window.innerWidth > 900){
        if (x.style.display === "block" || x.style.display === "none"){
            x.style.display = "flex";
        }
    } else if (window.innerWidth < 900){
        if (x.style.display === "flex"){
            x.style.display = "none";
        }
    }
    
}
var x = document.getElementById("myLinks");
x.style.display = "none";
window.onresize = turnOnOrOffBurgerMenu;


