let partida = {
    mida_tauler: 0, 
    mida_casselles_tauler: 0, 
    tauler: [],
    elementos:[],
    zombies: [], /*25% de mida_caselles_tauler*/
    estrelles: [], /* mida_tauler */
    recompenses:[],
    doblePunts:[],
    meitatZombis:[],
    vidaExtra:[],
    casillaEscogidas: 0,
    ganadas:0,
    perdidas:0,
    vidas: 3,
    puntos_totales: 0,
    //cuando encuentre zombie: vida -=1; puntos_totales -= 100;
    //if vidas = 0: juego nuevo y actualizar localStorage;
    //cuando encuentre estrella: puntos_totales += 200;
    //cuando destape cesped: puntos_totales += 50;

    estrellas_totales: this.mida_tauler, 
    estrellas_encontrados: 0,
    //if destapa estrellas_encontrados estrellas encontrados += 1;

    zombies_totales: this.mida_casselles_tauler * 0.25, 
    zombies_encontrados: 0,
    //if mitad_zombies se activa zombies_totales / 2;
    //if destapa zombie zombies_encontrados += 1;

    pdobles_totales: 0, 
    pdobles_encontrados: 0,
    // cuando haga el random para escoger que recompensas poner: pdobles_totales += 1;
    // if destapa pdobles_encontrados += 1;

    vidaaextra_totales: 0, 
    vidaextra_encontrados: 0,
    // cuando haga el random para escoger que recompensas poner: vidaaextra_totales += 1;
    // if destapa vidaextra_encontrados += 1;

    mitadzombies_totales: 0, 
    mitadzombies_encontrados: 0,
    // cuando haga el random para escoger que recompensas poner: mitadzombies_totales += 1;
    // if destapa mitadzombies_totales += 1;


    // Nos llenara la tabla con cesped y segun la medida que nos diga el usuario
    inicialitzar_tauler: function() {
        for (let i = 0; i < this.mida_tauler; i++) {
            this.tauler[i] = [];
            for (let j = 0; j < this.mida_tauler; j++) {
                /* iniciar tauler */
                this.tauler[i][j]='g';
            }
        }
        console.log(this.tauler);

        // Hace aparecer los 3 div ocultos
        document.getElementById("gamediv").style.display = "block";
        document.getElementById("statsdiv").style.display = "block";
        document.getElementById("coordenadas").style.display = "block";
        // Hace desaparecer el div del valor de tablero
        document.getElementById("textdivinput").style.display = "none";
    },

    //esta funcion es donde controlará todos los objetos
    iniciar: function(mida){
        this.mida_tauler = mida;
        this.mida_casselles_tauler = mida * mida;

        this.inicialitzar_tauler();
        this.pintar_tauler();

        //this.crear_Estrelles();
        //this.crear_Recompensas();
        //this.crear_Zombis();


        //stats partidas ganadas:
        if(localStorage.getItem("ganadas") == null){
            ganadas = localStorage.setItem("ganadas", 0);
        }
            else{guanyades = localStorage.getItem("guanyades");}      

        if (localStorage.getItem("perdidas") == null) {
            perdidas = localStorage.setItem("perdidas", 0);
        }
            else{perdudes = localStorage.getItem("perdudes");}

        estadistiques.innerHTML = "ganadas: " + ganadas + "<br> perdidas: " + perdidas;

        //cuando se gane actualizar localStorage, IDEM con perdidas

    },
    
    //crea la tabla
    pintar_tauler: function(){

        let taula = "<div id='taulaCentral'>";

        for (let i = 1; i < this.mida_tauler + 1; i++) {
            taula += "<div>";
            for (let j = 1; j < this.mida_tauler + 1; j++) {
                    taula += "<div id='" + i + "," + j + "' onclick='clicar(this.id)'><img src='/img/cespedoculto.jpg'></div>";
            }
            taula += "</div>";
        }
        taula += "</div>";
        
        // dentro de la variable taula esta creado con divs la tabla por lo tanto con innerHTML meteremos eso dentro de un div con Id especifico
        document.getElementById('tabla').innerHTML = taula;
    }, 
    
    cargarImagen: function(tipo){
        switch (tipo.toUpperCase){
            case 'Z':
                return '/img/zombie.png';
            case 'E':
                return '/img/estrella.png';
            case 'D':
                return '/img/doblepuntuacion.png';
            case 'M':
                return '/img/mitadzombies.png';
            case 'V':
                return '/img/vidaextra.png';
            case 'G':
                return '/img/cesped.jpg';
        }
    },

    mirarLetra: function(tipo, valorX, valorY){

        this.inicialitzar_tauler;
        partida.casillaEscogidas++;

        switch (tipo.toUpperCase()) {
            case "D":
                valorX--;
                valorY--;
                for (let i = 0; i < partida.doblePuntos.length; i++) {
                    //Si encuentra en esa posicion que tiene las mismas coordenadas que yo suma las estadisticas
                    if (valorX == partida.doblePunts[i].x && valorY == partida.doblePunts[i].y) { 
                        partida.pdobles_encontrados++;
                        partida.doblePunts[i].seleccionado = true;
                    }
                }
                //Dobla la puntuación
                this.puntos_totales = this.puntos_totales * 2; 
                this.Estadisticas();
                
            case "M":
                valorX--;
                valorY--;
                for (i = 0; i < partida.meitatZombis.length; i++) {
                    var objeto = partida.meitatZombis[i];
                    if (valorX == objeto.x && valorY == objeto.y || //centro
                        valorX - 1 == objeto.x && valorY == objeto.y || //izquierda
                        valorX + 1 == objeto.x && valorY == objeto.y || //derecha
                        valorX == objeto.x && valorY - 1 == objeto.y || //abajo
                        valorX == objeto.x && valorY + 1 == objeto.y) { //arriba
                            objeto.casillas++;
                            objeto.seleccionado = true;
                        if (objeto.casillas == 2) {
                            partida.mitadzombies_encontrados++;
                            partida.eliminarMitadZombies();
                        }
                    }
                }
                this.Estadisticas();

            case "V":
                valorX--;
                valorY--;
                for (i = 0; i < partida.vidaExtra.length; i++) {
                    var objeto = partida.vidaExtra[i];
                    if (valorX == objeto.x && valorY == objeto.y || //centro
                        valorX - 1 == objeto.x && valorY == objeto.y || //izquierda
                        valorX + 1 == objeto.x && valorY == objeto.y || //derecha
                        valorX == objeto.x && valorY - 1 == objeto.y || //abajo
                        valorX == objeto.x && valorY + 1 == objeto.y) { //arriba
                            objeto.casillas++;
                            objeto.seleccionado = true;
                        if (objeto.casillas == 3) {
                            partida.vidas++;
                            partida.vidaextra_encontrados++;
                        }
                    }
                }
                this.Estadisticas();
                return '#7FED7E';

            case "Z":
                this.zombies_encontrados++;
                if (this.puntos_totales < 100){
                    this.puntos_totales = 0;
                }else{
                    this.puntos_totales = this.puntos_totales - 100;
                }
                this.vidas--;
                this.Estadisticas();
                if (this.vidas == 0) {
                    alert("¡GAME OVER!");
                    setTimeout(function() {
                        reiniciar();
                    }, 1000);
                }

            case "E":
                partida.estrellas_encontrados++;
                this.puntos_totales += 200;
                for (i = 0; i < partida.estrelles.length; i++) {
                    if (partida.estrelles[i].valorX == valorX && partida.estrelles[i].valorY == valorY) {
                        partida.estrelles[i].seleccionado = true;
                    }
                }
                if(partida.estrellas_encontrados==5){
                    alert("¡You Win!");
                    setTimeout(function() {
                        reiniciar();
                    }, 1000);        
                }
                if (partida.casillaEscogidas<2){
                    console.log(partida.casillaEscogidas);
                    this.RevelarTablero();
                }
                this.Estadisticas();

            case "G":
                this.puntos_totales += 50;
                this.Estadisticas();
        }
    },




    crear_estrelles: function(){
        let estrelles_creades = 0;
        while(estrelles_creades < 5){
            let Estrella = new Estrella();
            //para añadir un objeto al array al final
            this.estrelles.push(estrella);
            estrelles_creades++;
            this.setPosicio(i,j);
        }
    },

    eliminarMitadZombies: function() {
        let zombiesDescubiertos = 0;

        for (i = 0; i != this.zombies.length; i++) {
            if (this.zombies[i].seleccionado == false) {
                zombiesDescubiertos++;
            }
        }

        let mitadZombiesDescubiertos = (zombiesDescubiertos / 2);
        n = 0;

        while (mitadZombiesDescubiertos >= 0) {
            if (!this.zombies[n].seleccionado) {
                this.zombies[n].seleccionado = true;
                mitadZombiesDescubiertos--;
                this.getTablero()[this.zombies[n].x][this.zombies[n].y] = 'g';
            }
            n++;
        }
    },
    // REVISAR
    Estadisticas: function() {

        var ver;

        ver = "<H2>PUNTUACIONES DEL JUEGO:</H2>"
        ver += "Puntos totales: " + this.puntos;
        ver += "</br>";
        ver += "</br>";
        ver += "Estrellas: " + this.estrellas.length;
        ver += "</br>";
        ver += "Estrellas encontradas: " + this.estrellasEncontradas;
        ver += "</br>";
        ver += "Zombies: " + this.zombies.length;
        ver += "</br>";
        ver += "Zombies encontrados: " + this.zombiesEncontrados;
        ver += "</br>";
        ver += "Puntos dobles: " + this.doblePuntos.length;
        ver += "</br>";
        ver += "Puntos dobles encontrados: " + this.doblesPuntosEncontrados;
        ver += "</br>";
        ver += "Vidas extra: " + this.vidaExtra.length;
        ver += "</br>";
        ver += "Vidas extra encontradas: " + this.vidasExtrasEncontradas;
        ver += "</br>";
        ver += "Mitad zombie: " + this.mitadZombie.length;
        ver += "</br>";
        ver += "Mitad zombie encontrados: " + this.mitadZombiesEncontrados;
        ver += "</br>";
        ver += "Vidas: " + this.vidas;
        ver += "</br>";
        ver += "</br>";
        ver += "</br>";
        ver += "</br>";
        ver += "ESTADISTICAS:";
        ver += "</br>";
        ver += "Partidas ganadas: ";
        ver += "</br>";
        ver += "Partidas perdidas: ";
        ver += "</br>";
        ver += "partidas abandonadas: ";

        document.getElementById("centerStats").innerHTML = ver;
    },

    getTauler: function(){
        return this.tauler;
    },

    getPosicio: function(x,y){
        return tauler[x],[y];
    },
    
    setPosicio: function(x,y){
        tauler[x],[y];
    },

}
