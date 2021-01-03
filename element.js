
//Objeto Padre
var Element = function (){

}


//Objeto Hijo
var Zombie = function (){
    Element.apply(this, arguments);
}

var Recompensa = function (){
    Element.apply(this, arguments);
}

var Estrella = function (){
    Element.apply(this, arguments);
}


//Objeto Hijo Recompensa
var DoblePuntuacion = function (){
    Recompensa.apply(this, arguments);
}

var MitadZombies = function (){
    Recompensa.apply(this, arguments);
}

var VidaExtra = function (){
    Recompensa.apply(this, arguments);
}