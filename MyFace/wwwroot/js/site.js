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

// Delete specific element
// var toDelete = document.getElementById("delete-this");
// toDelete?.addEventListener('click', () => {
//     toDelete.remove()
// })
//
// Delete all elements with a specific class
// var postImages = document.querySelectorAll(".post-image")
// postImages.forEach(picture => {
//     picture.addEventListener('click', () => {
//         picture.remove()
//     })
// })

//Delete anything that is clicked on
// window.addEventListener('click', (e) => {
//     var deleteTarget = e.target;
//     console.log(e);
//     deleteTarget.style.display = "none";
// })

// Stop Create post link from working
let createPostLink = document.querySelector("#create-post-link");
createPostLink.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.querySelector(createPostLink.dataset.modalTarget)
    openModal(modal)
})

const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}