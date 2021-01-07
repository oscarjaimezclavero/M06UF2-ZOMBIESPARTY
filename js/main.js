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

            if (objeto.toString() == objeto.toLocaleLowerCase()) {
                
                document.getElementById(valorX + "," + valorY).innerHTML = '<img src="' + partida.cargarImagen(objeto) + '" class="L_cont_cell" />'; //futuro alt
                partida.tauler[valorX - 1][valorY - 1] = objeto.toUpperCase();
                partida.mirarLetra(objeto.toUpperCase(), valorX, valorY);
                //document.getElementById(valorX + "," + valorY).style.backgroundColor = partida.mirarLetra(objeto.toUpperCase(), valorX, valorY);
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
    reiniciar()
}
//revisar
function reiniciar(){
    iniciarJuego();
}
//revisar
function clicar(casilla){
    
    var id = casilla.split(',');
    var posX = id[0];
    var posY = id[1];

    max = partida.medidaTablero + 1;

    if (posX >= 0 && posX < max && posY >= 0 && posY < max) {

        let ficha = partida.tablero[posX - 1][posY - 1];
        partida.inputs.push([posX - 1, posY - 1]);
        console.log("ficha: " + ficha);

        if (ficha.toString() === ficha.toLocaleLowerCase() && perdut != true) {

            if (partida.medidaTablero >= 5 && partida.medidaTablero <= 8){

                document.getElementById(posX + "," + posY).innerHTML = '<img src="' + partida.GetImageByLetter(ficha) + '" class="L_cont_cell" />'; //futuro alt

            } else if (partida.medidaTablero >= 9 && partida.medidaTablero <= 12){

                document.getElementById(posX + "," + posY).innerHTML = '<img src="' + partida.GetImageByLetter(ficha) + '" class="M_cont_cell" />'; //futuro alt

            } else if (partida.medidaTablero >= 13 && partida.medidaTablero <= 17){

                document.getElementById(posX + "," + posY).innerHTML = '<img src="' + partida.GetImageByLetter(ficha) + '" class="S_cont_cell" />'; //futuro alt

            } else {

                document.getElementById(posX + "," + posY).innerHTML = '<img src="' + partida.GetImageByLetter(ficha) + '" class="XS_cont_cell" />'; //futuro alt

            }



            partida.tablero[posX - 1][posY - 1] = ficha.toUpperCase();
            document.getElementById(posX + "," + posY).style.backgroundColor = partida.comprovarLetra(ficha.toUpperCase(), posX, posY);
            //TODO funcionalidad de las letras
        } else if (perdut){

            alert("Has perdido, no puedes continuar jugando");

        } else {

            alert("Ficha descubierta");

        }

    }

}

function deshabilitarBotones(){

    document.getElementById("botonCoord").disabled = true;
    document.getElementById("botonAband").disabled = true;

}

function habilitarBotones(){

    document.getElementById("botonCoord").disabled = false;
    document.getElementById("botonAband").disabled = false;

}
