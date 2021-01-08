var DoblePuntuacion = function (){
    //Herencia Recompensa.js
    Recompensa.apply(this, arguments);

}

// EXTEND RECOMPENSA
DoblePuntuacion.prototype = Object.create(Recompensa.prototype);
DoblePuntuacion.prototype.constructor = Recompensa;
DoblePuntuacion.prototype.Draw = function(dibujar) {

    dibujar[this.x][this.y] = "d";

}