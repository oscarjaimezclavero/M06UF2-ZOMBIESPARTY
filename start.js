function revisardato(){
    var datousuario = document.getElementById('valorusuario').value;
    
    if (datousuario < 5 || datousuario > 20){
        alert("dato incorrecto");
        
    }
    else crearTabla(datousuario);

}
//var miTabla = new Array();


function crearTabla(datousuario){
    var tbl = document.getElementById("tabla");
    var tblBody = document.createElement("tbody");
    for (var i = 0; i < datousuario; i++) {
        var fila = document.createElement("tr");
        for (var j = 0; j < datousuario; j++) {
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
