var VidaExtra = function (posicion){
    //Herencia Recompensa.js
    Recompensa.apply(this, arguments);

}

// //EXTEND RECOMPENSA
VidaExtra.prototype = Object.create(Recompensa.prototype);
VidaExtra.prototype.constructor = Recompensa;
VidaExtra.prototype.Draw = function(dibujar) {
    dibujar[this.x][this.y] = "v";
}