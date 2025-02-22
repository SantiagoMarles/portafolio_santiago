const boton = document.querySelector('.menuHamburguesa');
const items = document.querySelectorAll('.menu_item');

boton.addEventListener('click', function () {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.toggle('mostrar'); 
    }
});
