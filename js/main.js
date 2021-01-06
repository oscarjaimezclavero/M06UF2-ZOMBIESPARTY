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
    else {
        partida.iniciar(datousuario);
    }
    
}






