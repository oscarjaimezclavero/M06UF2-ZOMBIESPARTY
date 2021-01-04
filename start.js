function revisardato(){
    var datousuario = document.getElementById('valorusuario').value;
    
    if (datousuario < 5 || datousuario > 20){
        alert("dato incorrecto");
        
    }
    else dibujar_tablero(datousuario);
    
}

 function dibujar_tablero(datousuario){
    var tabla = document.createElement("table");
    document.getElementById("tabla").innerHTML = tabla;
    var tblBody = document.createElement("tbody");

    for (var i = 0; i < datousuario; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");
    
        for (var j = 0; j < datousuario; j++) {
          // Crea un elemento <td> y un nodo de texto, haz que el nodo de
          // texto sea el contenido de <td>, ubica el elemento <td> al final
          // de la hilera de la tabla
          var celda = document.createElement("td");
          var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
          celda.appendChild(textoCelda);
          hilera.appendChild(celda);
        }
     // agrega la hilera al final de la tabla (al final del elemento tblbody)
     tblBody.appendChild(hilera);
    }
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
     // appends <table> into <body>
     body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
     tabla.setAttribute("border", "2");
}




















/*for (let n = 0; n < this.datousuario; n++) {
        document.getElementById("tabla").innerHTML("<tr>");
        for (let i = 0; i < this.datousuario; i++) {
            document.getElementById("tabla").innerHTML("<td></td>");
            
        }
        document.getElementById("tabla").innerHTML("</tr>");
    }*/