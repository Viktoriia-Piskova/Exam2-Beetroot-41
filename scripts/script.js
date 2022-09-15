//script fo gallery

const photos = document.querySelectorAll('.gallery__photo');

const modal = document.getElementById('modal_background');
const modalImage = document.getElementById('modal_content');

photos.forEach(img => img.addEventListener('click', displayModal))


function displayModal() {
    modal.style.display = "block";
    modalImage.src = this.firstChild.src;
}

const closeModal = document.getElementById('modal_close');
closeModal.onclick = function () {
    modal.style.display = "none";
}


//script for burger menu animation

let menuOpen = false;
const burgerButton = document.querySelector('.burger_menu')

burgerButton.addEventListener('click', () =>{
    if(!menuOpen){
        burgerButton.classList.add('open');
        menuOpen = true    
    } else {
        burgerButton.classList.remove('open');
        menuOpen = false
    }

})