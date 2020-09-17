console.log("GASTOS dede JS");


let y = document.getElementById("calc");

y.style.display = "none";

function mostrar() {

    /* recuperar varible por eso .value  comunicación de html a js  */
    /* NOTA si no recuperamos el value se recupera el elemento pero como etiqueta  */
    var cantidad = document.getElementById("dinero").value;

    /* enviar datos al html con innerHTML comunicación del js al HTML */
    document.getElementById("cantidad").innerHTML = `$ ${cantidad}`;

    // console.log("entra a funcion mostrar");
    /* DOM document objet model = html */
    let x = document.getElementById("ingreso");

    /* condcional  */
    /* ¿ el elelemto x en su estado inicial es su atributo style y su propiedad display es gual a none */
    /*  == comparación */
    /*  = asiganción */

    if (x.style.display == "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }

}

function calcula() {

    var cantidad = document.getElementById("dinero").value;


    /* console.log(cantidad); */

    let renta = document.getElementById("renta").value;

    /*  console.log("renta --->", renta); */

    let servicios = document.getElementById("servicios").value;

    /* console.log("servicios --->", servicios); */

    let total = cantidad - renta - servicios;
    /*  console.log("TOTAL ",total); */
    document.getElementById("total").innerHTML = `Te sobran : $ ${total} pesos.`;

    /* 100 */
    if (total >= 100) {
        // console.log("si puedes ir por unos de suadero");
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'si puedes ir por unos de suadero',
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        // console.log("toca ver qe hay en el refri");
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'toca ver qe hay en el refri',
            showConfirmButton: false,
            timer: 1500
        });
    }

}