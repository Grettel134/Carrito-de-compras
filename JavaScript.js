

let cantidad = 1;

function aumentarCantidad() {
    cantidad++;
    document.getElementById("cantidad").innerText = cantidad;
}

function disminuirCantidad() {
    if (cantidad > 1) {
        cantidad--;
        document.getElementById("cantidad").innerText = cantidad;
    }
}



function mostrarDescripcion() {
    document.getElementById("descripcion").style.display = "block";
}

function ocultarDescripcion() {
    document.getElementById("descripcion").style.display = "none";
}



function myFunction() {
    document.getElementById('demo3').style.fontSize = '35px';
    document.getElementById("demo3").innerHTML = "Cambió con JS Externo a color ROJO y a 35px"; document.getElementById("demo3").style.color = "red";
}

function aumentar() {
    document.getElementById('demo2').style.fontSize = '35px';
    document.getElementById('demo2').style.color = 'red';
}