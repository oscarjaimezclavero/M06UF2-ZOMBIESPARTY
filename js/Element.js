
//Objeto Padre
var Tauler = function (datousuario){
    //this.posicion = posicion;  // con esto se tendria acceso externo
    // var posicion = posicion --> con esto seria privado
    //var descubierto = Boolean(False); // tambien podria ser  "var descubierto = False;"
    var casillas = datousuario;
    var contadorZombi=0;
    var contadorRecompensa=0;
    var contadorEstrella=0;

    this.inicialitzador = function(){
        
        // Hace aparecer los 2 div al tener un valor valido
        document.getElementById("gamediv").style.display = "block";
        document.getElementById("statsdiv").style.display = "block";
        
        var tbl = document.getElementById("tabla");
        var tblBody = document.createElement("tbody");
        var valor = 1;
        for (var i = 0; i < casillas; i++) {
            var fila = document.createElement("tr");
            for (var j = 0; j < casillas; j++) {
                var celda = document.createElement("td");
                var imagenCelda = document.createElement("img");
                //var textoCelda = document.createTextNode(valor);
                celda.setAttribute("id", valor);
                valor ++;
                imagenCelda.setAttribute("src", "/img/cespedoculto.jpg")
                celda.appendChild(imagenCelda)
                //celda.appendChild(textoCelda);
                fila.appendChild(celda);           
            }
            tblBody.appendChild(fila);
        }
        tbl.appendChild(tblBody);
        tbl.setAttribute("border", "2");



        function escogerCasilla(){
            var totalCasillas = Math.pow(casillas, 2);
            var casillaEscogida;

            function casillaRandom() { 
                casillaEscogida = Math.floor(Math.random()*(totalCasillas+1)-1) + 1;             
            }
            
            while(casillaEscogida != 'g'){
                casillaRandom();
            } 
            escogerObjeto(casillaEscogida); 
            //var cantidad = 0.25 * totalCasillas;
        }


        function escogerObjeto(casilla){
             if(contadorRecompensa==0){
                vidaextra;
                casillaEscogida = "v";
                contadorRecompensa=contadorRecompensa+3;
             }else if(contadorRecompesa==3){
                 mitadzombies;
                 casillaEscogida = "m";
                 contadorRecompensa=contadorRecompensa+2;
             }else if(contadorRecompensa==5){
                doblarpuntuacion;
                casillaEscogida = "d";
                contadorRecompensa=contadorRecompensa+1;
             }

            while(cantidad > contadorRecompensa){

            }
        }

        function cambiarLetra(){

        }

    }

    function veureImatge(valor){
        var posicion_tauleroculta = taulerrellenado.getElementById(valor);
        var posicion_taulervisible = document.getElementById(valor);
        String.replace(posicion_taulervisible, posicion_tauleroculta);
    }


}





// //CREACION OBJETOS
// var zombie = new Zombie();