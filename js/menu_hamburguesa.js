document.addEventListener("DOMContentLoaded", function () {
    const boton = document.querySelector('.contenedor_menuHamburguesa');
    const menu = document.querySelector('.contenedor_menu');

    boton.addEventListener('click', function () {
        menu.classList.toggle('spreed');
    });
});
