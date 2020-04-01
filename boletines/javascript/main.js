// console.log("Hola Mundo.");

/* representación virtual */
// DOM
/* let links = document.querySelectorAll("a");

links.forEach(function (links) {
    console.log(links);
}) */

/* let celdas = document.querySelectorAll("td");

celdas.forEach(function (td) {
    td.addEventListener('click',function () {
        console.log((this));
    })
}); */

/*
    obtener los elementos de la lcase .close
    recorerlos
    Agregar un  evento click a cada uno de ellos
*/

/* let links = document.querySelectorAll(".close");
// console.log(links);

links.forEach(function (link) {

    link.addEventListener('click',function (evento) {
        evento.preventDefault();
        let content = document.querySelector(".content");
        
        content.classList.remove("rubberBand");
        content.classList.remove("animated");

       
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        
        setInterval(() => {
            
        }, interval);
        setTimeout(() => {
            
        }, timeout);
         

        setTimeout(() => {
            location.href="/";
        }, 800);

        return false;


    })
    link.addEventListener('mouseover',function () {
        console.log("dio click en un boton");

    }) 
}); */


/*
let iconos = document.querySelectorAll("i");

iconos.forEach(function (icono) {
    icono.classList.remove("far");
    icono.classList.add("fa");

    return false
}) */


// obteniendo elementos
let links = document.querySelectorAll(".close");
// recorrerlos
links.forEach(function (link) {

    link.addEventListener('click',function (evento) {
        evento.preventDefault();
        let content = document.querySelector(".content");
        // quitar
        content.classList.remove("rubberBand");
        content.classList.remove("animated");

        // agregar
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        // tiempo
        setTimeout(() => {
            location.href="/";
        }, 800);

        return false;
    })
});