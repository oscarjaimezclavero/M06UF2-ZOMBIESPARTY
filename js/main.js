window.onload = function() {
    // Hace desaparecer los 2 div inicialmente
    document.getElementById("gamediv").style.display = "none";
    document.getElementById("statsdiv").style.display = "none";
    
    
    
};

var datousuario;

function revisardato(){
    datousuario = document.getElementById('valorusuario').value;
    
    if (datousuario < 5 || datousuario > 20){
        alert("dato incorrecto");
        
    }
    else {
        inicioJuego();
    }
    
}

function inicioJuego(){
    var tauler = new Tauler(datousuario);
    tauler.inicialitzador();
}




