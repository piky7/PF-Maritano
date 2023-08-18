class Jugador{

    constructor(nombre , posicion , altura , edad){
        this.nombre = nombre
        this.posicion = posicion
        this.altura = altura
        this.edad = edad
    }
}

let tablaContenedor = document.getElementById('tablaPlantilla')

function cargarJugadores (listaJugadores) {
    listaJugadores.forEach((jug) => {
    
        let infoJugador = document.createElement('tr')
      
        if( listaJugadores.indexOf(jug) % 2 === 0){
          infoJugador.className = 'impar'
        } else {
          infoJugador.className = 'par'
        }

        if(jug.posicion === 'DT'){
          infoJugador.className = 'impar dt'
        }
      
        infoJugador.innerHTML = `
          <td>${jug.posicion}</td>  
          <td>${jug.nombre}</td>  
          <td>${jug.edad}</td>  
          <td>${jug.altura}</td>  
        `     
        tablaContenedor.append(infoJugador)
      })
}

let jugadoresIndependiente = []

let noblega = new Jugador('Joaquin Noblega','B','1,90',26)
let paz = new Jugador('Ezequiel Paz (U23)','B','1,90',22)
let banegas = new Jugador('Jorge Banegas','ES','1,93',30)
let alonso = new Jugador('Augusto Alonso','ES','1,87',25)
let marucci = new Jugador('Nicolas Marucci (U23)','ES','1,83',21)
let pautasso = new Jugador('Agustín Pautasso','AL','1,92',25)
let berman = new Jugador('Matías Berman (U23)','AP','1,89',21)
let giletto = new Jugador('Salvador Giletto','AP','1,95',30)
let barroso = new Jugador('Franco Barroso','P','2,07',29)
let scaramuzzino = new Jugador('Cristian Scaramuzzino','P','2,05',31)
let nally = new Jugador('Tomas Nally (U23)','P','2,02',20)
let gonzales = new Jugador('Martin Gonzáles','DT','',41)

jugadoresIndependiente.push(noblega,paz,banegas,alonso,marucci,pautasso,berman,giletto,barroso,scaramuzzino,nally,gonzales)

cargarJugadores(jugadoresIndependiente)