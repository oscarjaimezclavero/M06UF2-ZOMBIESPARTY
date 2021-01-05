let partida = {
    mida_tauler: 5, 
    mida_casselles_tauler = 25, 
    tauler: [],
    zombies: [], /*25% de mida_caselles_tauler*/
    estrelles: [], /* mida_tauler */

    inicialitzar_tauler: function() {
        for (let i = 0; i < mida_tauler.length; i++) {
            tauler[i] = [];
            for (let j = 0; j < array.length; j++) {
                /* iniciar tablero */
                
            }
        }
    }

    //esta funcion es donde controlará todos los objetos

    iniciar: function(mida){
        this.mida_tauler = mida;
        this.mida_casselles_tauler = mida * mida;
        this.crear_estrelles();
    }, /*modificar campos de los recuadros*/

    pintar_tauler: function(){

    } 
    
    crear_estrelles: function(){
        let estrelles_creades = 0;
        while(estrelles_creades < 5){
            let estreall = new estrella();
            this.estrelles.push(estrella);
            estrelles_creades++;
            this.setPosicio(i,j);
        }
    },
}

[['g'/*j=0*/],['g'/*j=1*/],['g'],['g'],['g'],['g'],['g'],['g'],['g'],['g'],] // i = 0;
[['g'],['g'],['g'],['g'],['g'],['g'],['g'],['g'],['g'],['g'],] // i = 1;
[]
[]
[]


getPosicio: function(x,y){
    return tauler[x],[y];
},

setPosicio: function(x,y){
    tauler[x],[y];
}