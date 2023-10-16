//ACCESO AL DOM

//1.ACCEDER A LOS ELEMENTOS POR SU ETIQUETA

let parrafos;
let primerArticulo;
let articulos;
let barraLateral;


//CARGAR LA PAGINA
/*
//METODO 1
window.onload = function(){
	parrafos = document.getElementsByTagName("p");
	primerArticulo = parrafos[0];
}



//METODO 2 W3C (gestion de eventos con listeners)

window.addEventListener("load",inicializar);

function inicializar(){
	parrafos = document.getElementsByTagName("p");
	primerArticulo = parrafos[0];
}

//METODO 3 W3C (gestion de eventos con listener)

window.addEventListener("load", function(){
	parrafos = document.getElementsByTagName("p");
	primerArticulo = parrafos[0];
})

*/
//METODO 4 W3C (gestion de eventos con listeners) LAMBDA (arrow)

window.addEventListener("load", () =>{
	parrafos = document.getElementsByTagName("p");
	primerArticulo = parrafos[0];

	//ACCESO A ELEMENTOS POR LA CLASE
	articulos = document.getElementsByClassName("articulo");
