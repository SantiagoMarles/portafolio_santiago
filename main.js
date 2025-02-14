const menu_uno = document.getElementById('menu_uno');
const menu_dos = document.getElementById('menu_dos');
const menu_tres = document.getElementById('menu_tres');
const menu_cuatro = document.getElementById('menu_cuatro');
const menu_cinco = document.getElementById('menu_cinco');

let menu = [menu_uno, menu_dos, menu_tres, menu_cuatro, menu_cinco];

for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', function () {

        for (let j = 0; j < menu.length; j++) {
            const enlace = menu[j].querySelector('a');
            enlace.style.color = ''; // Elimina el estilo en línea
        }

        const enlaceSeleccionado = menu[i].querySelector('a');
        enlaceSeleccionado.style.color = 'lightblue';
    });
}
