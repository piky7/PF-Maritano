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

let jugadoresQuimsa = []

let jBrussino = new Jugador('Juan Brussino','B','1,85',32)
let sansimoni = new Jugador('Bruno Sansimoni','B','1,93',27)
let rolfi = new Jugador('Fortunato Rolfi (U23)','ES','1,86',22)
let basabe = new Jugador('Emiliano Basabe','AL','1,91',31)
let rBarrios = new Jugador('Fabián Ramírez Barrios','AL','1,97',33)
let zezular = new Jugador('Federico Zezular (U23)','AL','1,97',21)
let acevedo = new Jugador('Sebastián Acevedo','AP','1,98',32)
let gallizzi = new Jugador('Tayavek Gallizzi','P','2,06',30)
let vasirani = new Jugador('Eduardo Vasirano','P','2,06',32)
let ramella = new Jugador('Leandro Ramella','DT','',49)

jugadoresQuimsa.push(jBrussino,sansimoni,rolfi,basabe,rBarrios,zezular,acevedo,gallizzi,vasirani,ramella)

cargarJugadores(jugadoresQuimsa)