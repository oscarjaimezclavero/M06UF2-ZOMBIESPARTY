
//Objeto Padre
var Element = function (posicion){
    this.posicion = posicion;  // con esto se tendria acceso externo
    // var posicion = posicion --> con esto seria privado
    var descubierto = Boolean(False); // tambien podria ser  "var descubierto = False;"
}


//Objeto Hijo
var Zombie = function (posicion){
    Element.apply(this, arguments);
    var cargarImagen = function () {
        var imagen = new Image();
        imagen.src = '/img/zombie.png';
    }
}

var Recompensa = function (posicion){
    Element.apply(this, arguments);
}

var Estrella = function (posicion){
    Element.apply(this, arguments);
}


//Objeto Hijo Recompensa
var DoblePuntuacion = function (posicion){
    Recompensa.apply(this, arguments);
}

var MitadZombies = function (posicion){
    Recompensa.apply(this, arguments);
}

var VidaExtra = function (posicion){
    Recompensa.apply(this, arguments);
}

//CREACION OBJETOS
//var zombie = new Zombie(posicion); --> Ejemplo