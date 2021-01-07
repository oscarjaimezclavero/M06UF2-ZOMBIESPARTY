window.onload = function() {
    // Hace desaparecer los 2 div inicialmente
    document.getElementById("gamediv").style.display = "none";
    document.getElementById("statsdiv").style.display = "none";
    //Tampoco aparecera las casillas de coordenadas
    document.getElementById("coordenadas").style.display = "none";
};

//funcion que mirara si el valor es correcto o no
function revisardato(){
    var datousuario = document.getElementById('valorusuario').value;
    if (datousuario < 5 || datousuario > 20){
        alert("dato incorrecto");
    }
    else {
        partida.iniciar(datousuario);
    }
}
//revisar
function coordenadas(){
    
    var valorX = document.getElementById('valorX').value;
    var valorY = document.getElementById('valorY').value;
    
    max = partida.medidaTablero + 1;

    if (posX == "" || posY == "") {

        alert("No has dado bien las coordenadas");

    } else {

        if (posX >= 0 && posX < max && posY >= 0 && posY < max) {

            let ficha = partida.tablero[posX - 1][posY - 1];
            partida.inputs.push([posX - 1, posY - 1]);
            console.log("ficha: " + ficha);

            if (ficha.toString() === ficha.toLocaleLowerCase()) {

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
            } else {

                alert("Ficha descubierta");

            }

        } else {

            alert("Coordenada incorrecta");

        }

    }

    limpiarCasillas();
}

function limpiarCasillas() {
    document.getElementById("valorX").value = "";
    document.getElementById("valorY").value = "";
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


