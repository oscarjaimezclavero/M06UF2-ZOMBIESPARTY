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

        // Hace aparecer los 2 div ocultos
        document.getElementById("gamediv").style.display = "block";
        document.getElementById("statsdiv").style.display = "block";
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