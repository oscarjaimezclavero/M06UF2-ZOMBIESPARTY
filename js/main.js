window.onload = function() {
    
    iniciarJuego();
        
};

function iniciarJuego(){
// Hace desaparecer los 2 div inicialmente
document.getElementById("textdivinput").style.display = "";
document.getElementById("gamediv").style.display = "none";
document.getElementById("statsdiv").style.display = "none";
//Tampoco aparecera las casillas de coordenadas
document.getElementById("coordenadas").style.display = "none";
}

//funcion que mirara si el valor es correcto o no
function revisardato(){

    var datousuario = document.getElementById('valorusuario').value;
    if (datousuario < 5 || datousuario > 20){
        alert("dato incorrecto");
    }
    else {
        partida.iniciar(datousuario);
    }
    limpiarCasillas('valorusuario');
}

function coordenadas(){
    
    var valorX = document.getElementById('valorX').value;
    var valorY = document.getElementById('valorY').value;
    casillasLinea = partida.mida_tauler + 1;

    if (valorX == "" || valorY == "") {
        alert("Intenta a introducir unas coordenadas correctas");
    } else {
        if (valorX >= 0 && valorX < casillasLinea && valorY >= 0 && valorY < casillasLinea) {
            let objeto = partida.tauler[valorX - 1][valorY - 1];
            //Añadira en el array elementos como ultimo valor
            partida.elementos.push([valorX - 1, valorY - 1]);
            console.log("Objeto: " + objeto);

            if (objeto.toString() === objeto.toLocaleLowerCase()) {
                
                document.getElementById(valorX + "," + valorY).innerHTML = '<img src="' + partida.cargarImagen(objeto) + '" />';
                partida.tauler[valorX - 1][valorY - 1] = objeto.toUpperCase();
                partida.mirarLetra(objeto.toUpperCase(), valorX, valorY);
                
            } else {
                alert("Casilla descubierta");
            }
        } else {
            alert("Las coordenadas no existen");
        }
    }
    limpiarCasillas('valorX');
    limpiarCasillas('valorY');
}

//limpia las casillas con el id correspondiente
function limpiarCasillas(id) {
    document.getElementById(id).value = "";
}

//revisar
function abandonar(){
    localStorage.abandonadas = Number(localStorage.abandonadas) + 1;
    this.estadisticas();
    reiniciar();
}
//revisar
function reiniciar(){
    iniciarJuego();
}
//revisar
function clicar(casilla){
 
}

function deshabilitarBotones(){

    document.getElementById("botonCoord").disabled = true;
    document.getElementById("botonAband").disabled = true;

}

function habilitarBotones(){

    document.getElementById("botonCoord").disabled = false;
    document.getElementById("botonAband").disabled = false;

}
