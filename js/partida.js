let partida = {
    mida_tauler: 0, 
    mida_casselles_tauler: 0, 
    tauler: [],
    zombies: [], /*25% de mida_caselles_tauler*/
    estrelles: [], /* mida_tauler */
    recompenses:[],
    doblePunts:[],
    meitatZombis:[],
    vidaExtra:[],

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


        var ganadas; var perdidas;
        // no tocar;
        //---------------
        

        var vidas = 3; var puntos_totales = 0;
        //cuando encuentre zombie: vida -=1; puntos_totales -= 100;
        //if vidas = 0: juego nuevo y actualizar localStorage;
        //cuando encuentre estrella: puntos_totales += 200;
        //cuando destape cesped: puntos_totales += 50;


        var estrellas_totales = this.mida_tauler; var estrellas_encontrados = 0;
        //if destapa estrellas_encontrados estrellas encontrados += 1;

        var zombies_totales = this.mida_casselles_tauler * 0.25; var zombies_encontrados = 0;
        //if mitad_zombies se activa zombies_totales / 2;
        //if destapa zombie zombies_encontrados += 1;
 
        var pdobles_totales = 0; var pdobles_encontrados = 0;
        // cuando haga el random para escoger que recompensas poner: pdobles_totales += 1;
        // if destapa pdobles_encontrados += 1;

        var vidaaextra_totales = 0; var vidaextra_encontrados = 0;
        // cuando haga el random para escoger que recompensas poner: vidaaextra_totales += 1;
        // if destapa vidaextra_encontrados += 1;

        var mitadzombies_totales = 0; var mitadzombies_totales = 0;
        // cuando haga el random para escoger que recompensas poner: mitadzombies_totales += 1;
        // if destapa mitadzombies_totales += 1;

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
            taula += "<div class='row'>";
            for (let j = 1; j < this.mida_tauler + 1; j++) {
                    taula += "<div id='" + i + "," + j + "' onclick='clicar(this.id)'><img src='/img/cespedoculto.jpg'></div>";
            }
            taula += "</div>";
        }
        taula += "</div>";
        
        // dentro de la variable taula esta creado con divs la tabla por lo tanto con innerHTML meteremos eso dentro de un div con Id especifico
        document.getElementById('tabla').innerHTML = taula;
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
}


// getPosicio: function(x,y){
//     return tauler[x],[y];
// }

// setPosicio: function(x,y){
//     tauler[x],[y];
// }