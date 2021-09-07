
document.addEventListener('DOMContentLoaded',() => {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.gallery-img');
    for(let i = 1; i<=12; i++) {
        const img = document.createElement('IMG');
        img.src = `build/img/thumb/${i}.webp`;
        img.dataset.imagenId = i;
        //Añadir la funcion mostrar imagen
        img.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(img);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {
    const body = document.querySelector('body');
    const id = parseInt(e.target.dataset.imagenId);
    const img = document.createElement('IMG');
    img.src = `build/img/grande/${id}.webp`;
    const overlay = document.createElement('DIV');
    overlay.appendChild(img);
    overlay.classList.add('overlay');
    //Cuando se da click, cerrar imagen
    overlay.onclick = function () {
        overlay.remove();
        body.classList.remove('fixed');
    }

    //Boton para cerrar la imagen
    const cerrarImg = document.createElement('P');
    cerrarImg.textContent = 'X';
    cerrarImg.classList.add('btn-close');

    //Cuando se presiona cierra la img
    cerrarImg.onclick = function() {
        overlay.remove();
        body.classList.remove('fixed');
    }
    overlay.appendChild(cerrarImg);
    //Mostrar en el HTML
    
    body.appendChild(overlay);
    body.classList.add('fixed');
}