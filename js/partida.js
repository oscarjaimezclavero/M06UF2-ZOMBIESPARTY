let partida = {
    mida_tauler: 0, 
    mida_casselles_tauler: 0, 
    tauler: [],
    elementos:[],
    zombies: [], 
    estrelles: [],
    recompenses:[],
    doblePunts:[],
    meitatZombis:[],
    vidaExtra:[],
    casillaEscogidas: 0,

    // Stats
    ganadas:0,
    perdidas:0,
    abandonadas:0,
    vidas: 3,
    puntos_totales: 0,
    estrellas_creadas:0, 
    estrellas_encontrados: 0,
    zombies_creados:0,
    zombies_encontrados: 0,
    recompensas_creadas:0,
    pdobles_encontrados: 0, 
    vidaextra_encontrados: 0, 
    mitadzombies_encontrados: 0,


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
        this.reinicio();
        this.mida_tauler = mida;
        this.mida_casselles_tauler = mida * mida;
        //creem el tauler amb g
        this.inicialitzar_tauler();
        //modifiquem amb diferents elements el tauler
        this.crear_recompensas();
        this.crear_zombies();
        this.crear_estrelles();
        //finalment afegim el tauler amb divs
        this.pintar_tauler(this.mida_tauler);

        
        

        //Generamos el localStorage de ganadas, perdidas y abandonadas si no existen
        if(localStorage.getItem("ganadas") == null){
            this.ganadas = localStorage.setItem("ganadas", 0);
        }
            else{this.ganadas = localStorage.getItem("ganadas");}      

        if (localStorage.getItem("perdidas") == null) {
            this.perdidas = localStorage.setItem("perdidas", 0);
        }
            else{this.perdidas = localStorage.getItem("perdidas");}



    },
    
    //crea la tabla
    pintar_tauler: function(mida_tauler){
        let taula = "<div id='taulaGeneral'>";

        for (let i = 0; i < mida_tauler ; i++) {
            taula += "<div id='fila'>";
            for (let j = 0; j < mida_tauler ; j++) {
                    taula += "<div id='" + (i+1) + "," + (j+1) + "' class='casilla' ><img src='img/cespedoculto.jpg'></div>";
                }
            taula += "</div>";
        }
        taula += "</div>";
        
        // dentro de la variable taula esta creado con divs la tabla por lo tanto con innerHTML meteremos eso dentro de un div con Id especifico
        document.getElementById('tabla').innerHTML = taula;
    }, 

    cargarImagen: function(tipo){
        switch (tipo.toUpperCase()){
            case 'z':
                return '/img/zombie.png';
            case 'e':
                return '/img/estrella.png';
            case 'd':
                return '/img/doblepuntuacion.png';
            case 'm':
                return '/img/mitadzombies.png';
            case 'v':
                return '/img/vidaextra.png';
            case 'g':
                return '/img/cesped.jpg';
        }
    },

    mirarLetra: function(tipo, valorX, valorY){

        console.log(this.tauler);
        partida.casillaEscogidas++;

        switch (tipo.toUpperCase()) {
            case "D":
                valorX--;
                valorY--;
                for (let i = 0; i < partida.doblePunts.length; i++) {
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
<<<<<<< HEAD
                        this.perdidas++;
                        localStorage.setItem("perdidas", this.perdidas);
=======
                        localStorage.perdidas = Number(localStorage.perdidas) + 1;
                        this.estadisticas();
>>>>>>> 3aa164ef6a26e7bd34e4ae6465502046ab974175
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
                if(partida.estrellas_encontrados==this.mida_tauler){
                    alert("¡You Win!");
                    setTimeout(function() {
<<<<<<< HEAD
                        this.ganadas++;
                        localStorage.setItem("ganadas", this.ganadas);
=======
                        localStorage.ganadas = Number(localStorage.ganadas) + 1;
                        this.estadisticas();
>>>>>>> 3aa164ef6a26e7bd34e4ae6465502046ab974175
                        reiniciar();
                    }, 1000);        
                }
                if (partida.casillaEscogidas<2){
                    this.revelarTablero();
                }
                this.Estadisticas();

            case "G":
                this.puntos_totales += 50;
                this.Estadisticas();
        }
    },

    //Crear Objetos
    crear_estrelles: function(){
        try {
            var estrella = new Estrella();
            while (this.estrellas_creadas < (this.mida_tauler)) {
                do {
                    var x = Math.floor(Math.random() * this.mida_tauler);
                    var y = Math.floor(Math.random() * this.mida_tauler);
                } while (this.tauler[x][y] != "g");
                estrella.x = x;
                estrella.y = y;
                this.tauler[x][y] = "e";
                this.estrellas_creadas++;
                this.estrelles.push(estrella);
            }
        // el catch sirve para que si hay alguna excepcion utilizara lo que haya en catch, que en este caso es "nada" y no hara nada
        } catch (excepcion) {} 
    },

    crear_zombies: function() {
        var zombi = new Zombie();

        while (this.zombies_creados < ((this.mida_casselles_tauler) * 25) / 100) {
            do {
                var x = Math.floor(Math.random() * this.mida_tauler);
                var y = Math.floor(Math.random() * this.mida_tauler);
            } while (this.tauler[x][y] != "g");
            zombi.x = x;
            zombi.y = y;

            this.tauler[x][y] = "z";
            this.zombies_creados++;
            this.zombies.push(zombi);
        }
    },
    
    crear_recompensas: function() {
        //25% del total del tauler tendran que ser recompensas
        var total = ((this.mida_casselles_tauler* 25) / 100);
        this.crear_VidaExtra();
        this.crear_MitadZombie();
        this.crear_DoblePuntos();

        while (this.recompensas_creadas < total) {
            this.crear_VidaExtra();
            this.crear_MitadZombie();
            this.crear_DoblePuntos();
        }

    },

    crear_DoblePuntos: function() {

        try {
            var doblesPuntos = new DoblePuntuacion (1, 0);
            var x = 0,
                y = 0;
            do {
                x = Math.floor(Math.random() * this.mida_tauler);
                y = Math.floor(Math.random() * this.mida_tauler);
            } while (this.tauler[x][y] != "g");
            doblesPuntos.x = x;
            doblesPuntos.y = y;
            this.tauler[x][y] = "d";
            this.recompensas_creadas += 1;
            this.doblePunts.push(doblesPuntos);

        } catch (e) {}
    },

    crear_MitadZombie: function() {

        try {
            var orientacion = Math.floor(Math.random() * 2);
            var mitad = new MitadZombies(2, orientacion);
            mitad.casillas = 0;
            if (orientacion == 0) {
                var x = 0,
                    y = 0;
                do {
                    x = Math.floor(Math.random() * this.mida_tauler);
                    y = Math.floor(Math.random() * this.mida_tauler);
                } while (this.tauler[x][y] != "g" || this.tauler[x + 1][y] != "g" || x <= this.mida_tauler - 2);

                mitad.x = x;
                mitad.y = y;
                mitad.orientacion = orientacion;

                this.tauler[x][y] = "m";
                this.tauler[x + 1][y] = "m";
                this.recompensas_creadas += 2;

            } else {
                var x = 0,
                    y = 0;
                do {
                    x = Math.floor(Math.random() * this.mida_tauler);
                    y = Math.floor(Math.random() * this.mida_tauler);

                } while (this.tauler[x][y] != "g" || this.tauler[x][y + 1] != "g" || y > this.mida_tauler - 2);

                mitad.x = x;
                mitad.y = y;
                mitad.orientacion = orientacion;

                this.tauler[x][y] = "m";
                this.tauler[x][y + 1] = "m";
                this.recompensas_creadas += 2;
            }

            this.MitadZombies.push(mitad);

        } catch (e) {}
    },

    crear_VidaExtra: function() {

        try {
            var orientacion = Math.floor(Math.random() * 2);
            var vida = new VidaExtra(3, orientacion);
            vida.casillas = 0;

            if (orientacion == 0) {
                var x = 0,
                    y = 0;
                do {
                    x = Math.floor(Math.random() * this.mida_tauler);
                    y = Math.floor(Math.random() * this.mida_tauler);

                } while (this.tauler[x][y] != "g" || this.tauler[x - 1][y] != "g" || this.tauler[x + 1][y] != "g" || x > this.tauler - 2 && x <= 0);

                vida.x = x;
                vida.y = y;
                vida.orientacion = orientacion;
                this.tauler[x][y] = "v";
                this.tauler[x + 1][y] = "v";
                this.tauler[x - 1][y] = "v";
                this.recompensas_creadas += 3;

            } else {
                var x = 0,
                    y = 0;
                do {
                    x = Math.floor(Math.random() * this.mida_tauler);
                    y = Math.floor(Math.random() * this.mida_tauler);

                } while (this.tauler[x][y] != "g" || this.tauler[x][y - 1] != "g" || this.tauler[x][y + 1] != "g" || y > this.tauler - 2 && y <= 0);

                vida.x = x;
                vida.y = y;
                vida.orientacion = orientacion;
                this.tauler[x][y] = "v";
                this.tauler[x][y + 1] = "v"
                this.tauler[x][y - 1] = "v"
                this.recompensas_creadas += 3;
            }

            this.vidaExtra.push(vida);

        } catch (e) {}
    },

    revelarTablero: function(){
        for (let i = 1; i <= this.tauler.length; i++) {
            for (let j = 1; j <= this.tauler[0].length; j++) {
                let casilla = this.tauler[i - 1][j - 1];
                document.getElementById(i + "," + j).innerHTML = '<img src="' + this.cargarImagen(casilla) + '" />';
            }
        }
        //  Mostrara durante 3 segundos el tauler descubierto en su totalidad
        setTimeout(function() {
            habilitarBotones();
            //Resetea todo el tauler a X
            for (let i = 1; i <= partida.tauler.length; i++) {
                for (let j = 1; j <= partida.tauler[0].length; j++) {
                    document.getElementById(i + "," + j).innerHTML = '<img src="img/cespedoculto.jpg" />';
                }
            }

            //Muestra los elementos guardados
            for (let y = 0; y < partida.elementos.length; y++) {
                const elem = partida.elementos[y];
                var i = elem[0] + 1;
                var j = elem[1] + 1;
                let casilla = partida.tauler[i - 1][j - 1];
                console.log(elem + " " + i + " " + j);
                document.getElementById(i + "," + j).innerHTML = '<img src="' + partida.cargarImagen(casilla) + '" />';
            }

        }, 3000); 

        deshabilitarBotones();
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
                this.getTauler()[this.zombies[n].x][this.zombies[n].y] = 'g';
            }
            n++;
        }
    },

    // REVISAR
    Estadisticas: function() {

        var ver;

        ver = "<H2>PUNTUACIONES DEL JUEGO:</H2>"
        ver += "Puntos totales: " + this.puntos_totales;
        ver += "</br>";
        ver += "</br>";
        ver += "Estrellas: " + this.estrelles.length;
        ver += "</br>";
        ver += "Estrellas encontradas: " + this.estrellas_encontrados;
        ver += "</br>";
        ver += "Zombies: " + this.zombies.length;
        ver += "</br>";
        ver += "Zombies encontrados: " + this.zombies_encontrados;
        ver += "</br>";
        ver += "Puntos dobles: " + this.doblePunts.length;
        ver += "</br>";
        ver += "Puntos dobles encontrados: " + this.pdobles_encontrados;
        ver += "</br>";
        ver += "Vidas extra: " + this.vidaExtra.length;
        ver += "</br>";
        ver += "Vidas extra encontradas: " + this.vidaextra_encontrados;
        ver += "</br>";
        ver += "Mitad zombie: " + this.meitatZombis.length;
        ver += "</br>";
        ver += "Mitad zombie encontrados: " + this.mitadzombies_encontrados;
        ver += "</br>";
        ver += "Vidas: " + this.vidas;
        ver += "</br>";
        ver += "</br>";
        ver += "</br>";
        ver += "</br>";
        ver += "ESTADISTICAS:";
        ver += "</br>";
        ver += "Partidas ganadas: " + localStorage.ganadas;
        ver += "</br>";
        ver += "Partidas perdidas: " + localStorage.perdidas;
        ver += "</br>";
        ver += "partidas abandonadas: " + localStorage.abandonadas;

        document.getElementById("stats").innerHTML = ver;
    },

    getTauler: function(){
        return this.tauler;
    },

    abandonar: function(){
        partida.abandonadas+=1;
        localStorage.setItem("abandonadas", partida.abandonadas);
        reiniciar();
    },

    reinicio: function(){
        this.tauler=[],
        this.elementos=[],
        this.zombies=[], 
        this.estrelles=[],
        this.recompenses=[],
        this.doblePunts=[],
        this.meitatZombis=[],
        this.vidaExtra=[],
        this.casillaEscogidas=0,
        this.vidas=3,
        this.puntos_totales=0,
        this.estrellas_creadas=0, 
        this.estrellas_encontrados=0,
        this.zombies_creados=0,
        this.zombies_encontrados=0,
        this.recompensas_creadas=0,
        this.pdobles_encontrados=0,
        this.vidaextra_encontrados=0,
        this.mitadzombies_encontrados=0
    }
    // getPosicio: function(x,y){
    //     return tauler[x],[y];
    // },
    
    // setPosicio: function(x,y){
    //     this.tauler[x],[y];
    // },

}
