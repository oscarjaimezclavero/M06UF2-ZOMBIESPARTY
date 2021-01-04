window.onload = function() {
    // Hace desaparecer los 2 div inicialmente
    document.getElementById("gamediv").style.display = "none";
    document.getElementById("statsdiv").style.display = "none";
};



function revisardato(){
    var datousuario = document.getElementById('valorusuario').value;
    
    if (datousuario < 5 || datousuario > 20){
        alert("dato incorrecto");
        
    }
    else crearTabla(datousuario);

}



function crearTabla(datousuario){
    
    // Hace aparecer los 2 div al tener un valor valido
    document.getElementById("gamediv").style.display = "block";
    document.getElementById("statsdiv").style.display = "block";


    var tbl = document.getElementById("tabla");
    var tblBody = document.createElement("tbody");
    for (var i = 0; i < datousuario; i++) {
        var fila = document.createElement("tr");
        for (var j = 0; j < datousuario-1; j++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(i+"-"+j);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);           
        }
        tblBody.appendChild(fila);
    }
    tbl.appendChild(tblBody);
    tbl.setAttribute("border", "2");
}


