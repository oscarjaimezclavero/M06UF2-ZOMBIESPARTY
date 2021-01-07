var Recompensa = function (orientacion, space){

    //Herencia Element.js
    Element.apply(this, arguments);

    this.space = space;
    this.orientacion = orientacion;


// //EXTEND ELEMENT
Recompensa.prototype = Object.create(Element.prototype);
Recompensa.prototype.constructor = Element;
}