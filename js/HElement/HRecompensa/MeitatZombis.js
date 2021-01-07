var MitadZombies = function (posicion){
    //Herencia recompensa.js
    Recompensa.apply(this, arguments);
    var casillas = 0;
}

//EXTEND RECOMPENSA

MitadZombies.prototype = Object.create(Recompensa.prototype);
MitadZombies.prototype.constructor = Recompensa;
MitadZombies.prototype.Draw = function(dibujar) {

    dibujar[this.x][this.y] = "m";

}
