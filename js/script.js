let cajaNombre;
let botonJugar;
let botonSeleccion;
let cajaNombreJugador;
let cajaRespuesta;
let cajaResultado;
let cajaPuntuacion;
let seleccionJugador;
let jugador;
let ordenador;
let identificador;
let caja;
let parentId = "";
let cajaResolucion;
let solucion ;
let opciones;
let rutas = ["imagenes/piedra.png", "imagenes/papel.png","imagenes/tijeras.png", "imagenes/lagarto.png", "imagenes/spock.png"]

function activarBotonJugar(){
		botonJugar.disabled = false;
		cajaNombreJugador.value = cajaNombre.value;
		
}

function escribirNombre(){
	let nombre = cajaNombre.value;
	caja.value = cajaNombre.value;
	if(nombre != ""){
		activarBotonJugar();
	}
}

function aumentarTamaño(){
	let img = document.getElementById("jugador");
	function aumentarTamaño(){
		
		img.width = "180px";
		img.height = "auto";

	}
	
}

function seleccionar(){
	let jugador = document.getElementById("jugador");

	function clickId() {
		let eleccion = event.target;
//eleccion es la etiqueta

		parentId = event.target.parentNode.id;
		//parentId me da el nombre de la opcion elegida

		//añadir imagen seleccionada
		let ruta = eleccion.getAttribute("src");

		const contenedor = document.getElementById("humano");

		let img = document.createElement("img");
		img.width = "100";
		img.src = ruta;
		
		contenedor.appendChild(img);
		
		event.stopPropagation();
	}

	jugador.addEventListener("click", clickId,true);
}





function seleccionOrdenador(){
	let opciones  = ["piedra", "papel", "tijeras", "lagarto", "spock"];
	let aleatorio = opciones[Math.floor(Math.random() * opciones.length)];

	if(aleatorio === "piedra"){
		ruta = "imagenes/piedra.png";
	}else if(aleatorio === "papel"){
		ruta = "imagenes/papel.png";
	}else if(aleatorio === "tijeras"){
		ruta = "imagenes/tijeras.png";
	}else if(aleatorio === "lagarto"){
		ruta = "imagenes/lagarto.png";
	}else if(aleatorio === "spock"){
		ruta = "imagenes/spock.png";
	}

		function juego(){
		if(aleatorio === "piedra"){
			if(parentId === aleatorio){
				cajaResolucion.value = "EMPATE";
			}else if(parentId === "papel"){
				solucion = document.getElementById("resolucion"); 
				solucion.innerText += "GANASTE";
			}else if(parentId === "tijeras"){
				solucion = document.getElementById("resolucion"); 
				solucion.innerText +="PERDISTE";
			}else if(parentId.value === "lagarto"){
				solucion = document.getElementById("resolucion"); 
				solucion.innerText += "PERDISTE";
			}else if(parentId === "spock"){
				solucion = document.getElementById("resolucion"); 
				solucion.innerText += "GANASTE";
			}
		}

		if(aleatorio === "papel"){
			if(parentId === aleatorio){
				cajaResolucion.value = "EMPATE";
			}else if(parentId === "piedra"){
				solucion = document.getElementById("resolucion");
				solucion.innerText += "GANASTE";
			}else if(parentId === "tijeras"){
				solucion = document.getElementById("resolucion");
				solucion.innerText += "PERDISTE";
			}else if(parentId.value === "lagarto"){
				solucion = document.getElementById("resolucion");
				solucion.innerText += "GANASTE";
			}else if(parentId === "spock"){
				solucion = document.getElementById("resolucion");
				solucion.innerText += "PERDISTE";	
			}
		}

		if(aleatorio === "tijeras"){
			if(parentId === aleatorio){
				solucion.innerText += "EMPATE";
			}else if(parentId === "piedra"){
				solucion = document.getElementById("resolucion");
				solucion.innerText += "GANASTE";
			}else if(parentId === "papel"){
				solucion = document.getElementById("resolucion");
				solucion.innerText += "PERDISTE";
			}else if(parentId.value === "lagarto"){
				solucion = document.getElementById("resolucion");
				solucion.innerText += "PERDISTE";
			}else if(parentId === "spock"){
				solucion = document.getElementById("resolucion");
				solucion.innerText += "GANASTE";
			}
		}

		if(aleatorio === "lagarto"){
			if(parentId === aleatorio){
				solucion.innerText += "EMPATE";
			}else if(parentId === "papel"){
				solucion = document.getElementById("resolucion");
				solucion.innerText += "PERDISTE";
				
			}else if(parentId === "tijeras"){
				solucion = document.getElementById("resolucion");
				solucion.innerText += "GANASTE";
				
			}else if(parentId.value === "piedra"){
				solucion = document.getElementById("resolucion");
				solucion.innerText += "GANASTE";
				
			}else if(parentId === "spock"){
				solucion = document.getElementById("resolucion");
				solucion.innerText += "PERDISTE";
				
			}
		}

		if(aleatorio === "spock"){
			if(parentId === aleatorio){
				cajaResolucion.value = "EMPATE";
			}else if(parentId === "papel"){
				solucion = document.getElementById("resolucion");
				solucion.innerText += "GANASTE";
				
			}else if(parentId === "tijeras"){
				solucion = document.getElementById("resolucion");
				solucion.innerText += "PERDISTE";
				
			}else if(parentId.value === "lagarto"){
				solucion = document.getElementById("resolucion");
				solucion.innerText += "GANASTE";
				
			}else if(parentId === "piedra"){
				solucion = document.getElementById("resolucion");
				solucion.innerText += "PERDISTE";
				 
			}
		}
	}


//añadir imagen generada aleatoria
	let contenedor1 = document.getElementById("ordenadorOpcion");
	let img1 = document.createElement("img");
	img1.width = "100";
	img1.src = ruta;

	contenedor1.appendChild(img1);
	event.stopPropagation();
	

}


function inicializarVariables(){
	cajaNombre = document.getElementById("cajaNombre");
	botonJugar = document.getElementById("botonJugar");
	botonSeleccion = document.getElementsByClassName("botonJugador");
	cajaNombreJugador = document.getElementById("cajaNombreJugador");
	seleccionJugador = document.getElementById("seleccion");
	cajaResultado = document.getElementById("cajaResultado");
	cajaRespuesta = document.getElementById("cajaRespuesta");
	cajaPuntuacion = document.getElementById("cajaPuntuacion");
	jugador = document.getElementById("jugador");
	caja = document.getElementById("caja");
	cajaResolucion = document.getElementById("resolucion");
}

function setListeners(){
	cajaNombre.addEventListener("input", escribirNombre);
	botonJugar.addEventListener("click", seleccionOrdenador);
	jugador.addEventListener("click", seleccionar);
	jugador.addEventListener("mouseover",aumentarTamaño);
	
}

window.addEventListener("load",()=>{
	inicializarVariables();
	setListeners();
	
	botonJugar.disabled = true;
});