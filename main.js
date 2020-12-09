window.onload = function(){

    let mida = prompt("mida del tauler");
    
}
function revisardato(){
    var datousuario = document.getElementById('valorusuario').value;
    
    if (datousuario < 5 || datousuario > 20){
        alert("dato incorrecto");
    }
    else alert("correcto");
}