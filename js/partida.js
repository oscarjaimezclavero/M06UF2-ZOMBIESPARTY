let partida = {
    mida_tauler: 0, 
    mida_casselles_tauler = 0, 
    tauler: [],
    zombies: [], /*25% de mida_caselles_tauler*/
    estrelles: [], /* mida_tauler */
    recompenses:[],
    doblePunts:[],
    meitatZombis:[],
    vidaExtra:[],

    inicialitzar_tauler: function() {
        for (let i = 0; i < mida_tauler.length; i++) {
            this.tauler[i] = [];
            for (let j = 0; j < array.length; j++) {
                /* iniciar tauler */
                this.tauler[i][j]='g';
            }
        }
        console.log(this.tauler);
    },

    //esta funcion es donde controlará todos los objetos

    iniciar: function(mida){
        this.mida_tauler = mida;
        this.mida_casselles_tauler = mida * mida;
        this.inicialitzar_tauler();

        this.crear_estrelles();
    }, /*modificar campos de los recuadros*/

    pintar_tauler: function(){

    }, 
    
    crear_estrelles: function(){
        let estrelles_creades = 0;
        while(estrelles_creades < 5){
            let Estrella = new Estrella();
            this.estrelles.push(estrella);
            estrelles_creades++;
            this.setPosicio(i,j);
        }
    },
}


getPosicio: function(x,y){
    return tauler[x],[y];
}

setPosicio: function(x,y){
    tauler[x],[y];
}