function revisardato(){
    var datousuario = document.getElementById('valorusuario').value;
    
    if (datousuario < 5 || datousuario > 20){
        alert("dato incorrecto");
    }
    else alert("correcto");
}

dibujar_tablero: function(){
    for (let n = 0; n < this.datousuario; n++) {
        document.write("<tr><td> g </td></tr>");
        
    }
}

crear_tablero: function(){
    this.dibujar_tablero;
}

crear_tablero();

