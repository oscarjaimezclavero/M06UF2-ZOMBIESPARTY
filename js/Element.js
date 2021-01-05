
//Objeto Padre
var Tauler = function (datousuario){
    //this.posicion = posicion;  // con esto se tendria acceso externo
    // var posicion = posicion --> con esto seria privado
    //var descubierto = Boolean(False); // tambien podria ser  "var descubierto = False;"
    var casillas = datousuario;
    var contadorZombi=0;
    var contadorRecompensa=0;
    var contadorEstrella=0;

    this.inicialitzador = function(){
        
        // Hace aparecer los 2 div al tener un valor valido
        document.getElementById("gamediv").style.display = "block";
        document.getElementById("statsdiv").style.display = "block";
        
        var tbl = document.getElementById("tabla");
        var tblBody = document.createElement("tbody");
        var valor = 1;
        for (var i = 0; i < casillas; i++) {
            var fila = document.createElement("tr");
            for (var j = 0; j < casillas; j++) {
                var celda = document.createElement("td");
                //var imagenCelda = document.createElement("img");
                var textoCelda = document.createTextNode(valor);
                celda.setAttribute("id", valor);
                valor ++;
                //imagenCelda.setAttribute("src", "/img/cespedoculto.jpg")
                //celda.appendChild(imagenCelda)
                celda.appendChild(textoCelda);
                fila.appendChild(celda);           
            }
            tblBody.appendChild(fila);
        }
        tbl.appendChild(tblBody);
        tbl.setAttribute("border", "2");



        function escogerCasilla(){
            var totalCasillas = Math.pow(casillas, 2);
            var casillaEscogida;

            function casillaRandom() { 
                casillaEscogida = Math.floor(Math.random()*(totalCasillas+1)-1) + 1;             
            }
            
            while(casillaEscogida != 'g'){
                casillaRandom();
            } 
            escogerObjeto(casillaEscogida); 
            //var cantidad = 0.25 * totalCasillas;
        }


        function escogerObjeto(casilla){
             if(contadorRecompensa==0){
                vidaextra;
                contadorRecompensa=contadorRecompensa+3;
             }else if(contadorRecompesa==3){
                 mitadzombies;
                 contadorRecompensa=contadorRecompensa+2;
             }else if(contadorRecompensa==5){
                doblarpuntuacion;
                contadorRecompensa=contadorRecompensa+1;
             }

            while(cantidad > contadorRecompensa){
                
            }
        }

        function cambiarLetra(){

        }

    }

    function veureImatge(valor){
        var posicion_tauleroculta = taulerrellenado.getElementById(valor);
        var posicion_taulervisible = document.getElementById(valor);
        String.replace(posicion_taulervisible, posicion_tauleroculta);
    }


}


// Tauler.prototype.cargarImagen = function(tipo){
//     switch (tipo){
//         case 'z':
//             document.getElementById("prueba1").src="img/zombie.png";
//             break;
//         case 'e':
//             document.getElementById("prueba1").src="img/estrella.png";
//             break;
//         case 'd':
//             document.getElementById("prueba1").src="img/doblepuntuacion.png";
//             break;
//         case 'm':
//             document.getElementById("prueba1").src="img/mitadzombies.png";
//             break;
//         case 'v':
//             document.getElementById("prueba1").src="img/vidaextra.png";
//             break;
//         default:
//             document.getElementById("prueba1").src="img/cesped.png";
//     }
// }














// //Objeto Hijo
// var Zombie = function (posicion){
//     Tauler.apply(this, arguments);
//     var tipo = z;

// }

// var Recompensa = function (posicion){
//     Tauler.apply(this, arguments);
// }

// var Estrella = function (posicion){
//     Tauler.apply(this, arguments);
//     var tipo = e;
// }
// //EXTEND ELEMENT
// Zombie.prototype = Object.create(Tauler.prototype);
// Zombie.prototype.constructor = Zombie;
// Recompensa.prototype = Object.create(Tauler.prototype);
// Recompensa.prototype.constructor = Recompensa;
// Estrella.prototype = Object.create(Tauler.prototype);
// Estrella.prototype.constructor = Estrella;

// //Objeto Hijo Recompensa
// var DoblePuntuacion = function (posicion){
//     Recompensa.apply(this, arguments);
//     var tipo = d;
// }

// var MitadZombies = function (posicion){
//     Recompensa.apply(this, arguments);
//     var tipo = m;
// }

// var VidaExtra = function (posicion){
//     Recompensa.apply(this, arguments);
//     var tipo = v;
// }

// //EXTEND RECOMPENSA
// DoblePuntuacion.prototype = Object.create(Recompensa.prototype);
// DoblePuntuacion.prototype.constructor = DoblePuntuacion;
// MitadZombies.prototype = Object.create(Recompensa.prototype);
// MitadZombies.prototype.constructor = MitadZombies;
// VidaExtra.prototype = Object.create(Recompensa.prototype);
// VidaExtra.prototype.constructor = VidaExtra;

// //CREACION OBJETOS
// var zombie = new Zombie();