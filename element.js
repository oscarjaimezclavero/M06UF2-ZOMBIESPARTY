
//Objeto Padre
var Tauler = function (){
    //this.posicion = posicion;  // con esto se tendria acceso externo
    // var posicion = posicion --> con esto seria privado
    //var descubierto = Boolean(False); // tambien podria ser  "var descubierto = False;"
    function inicialitzador(datousuario){
        
        // Hace aparecer los 2 div al tener un valor valido
        document.getElementById("gamediv").style.display = "block";
        document.getElementById("statsdiv").style.display = "block";
        
        var tbl = document.getElementById("tabla");
        var tblBody = document.createElement("tbody");
        var valor = 1;
        for (var i = 0; i < datousuario; i++) {
            var fila = document.createElement("tr");
            for (var j = 0; j < datousuario; j++) {
                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(valor);
                valor ++;
                celda.setAttribute("id", valor);
                celda.appendChild(textoCelda);
                fila.appendChild(celda);           
            }
            tblBody.appendChild(fila);
        }
        tbl.appendChild(tblBody);
        tbl.setAttribute("border", "2");
    
    
    }

    function veureImatge(){

    }
}

// Element.prototype.cargarImagen = function(tipo){
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
//     Element.apply(this, arguments);
//     var tipo = z;
// }

// var Recompensa = function (posicion){
//     Element.apply(this, arguments);
// }

// var Estrella = function (posicion){
//     Element.apply(this, arguments);
//     var tipo = e;
// }
// //EXTEND ELEMENT
// Zombie.prototype = Object.create(Element.prototype);
// Zombie.prototype.constructor = Zombie;
// Recompensa.prototype = Object.create(Element.prototype);
// Recompensa.prototype.constructor = Recompensa;
// Estrella.prototype = Object.create(Element.prototype);
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