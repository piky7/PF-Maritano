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

let jugadoresObera = []

let gallegos = new Jugador('Rodrigo Gallegos','B','1,86',32)
let laterza = new Jugador('Ignacio Laterza','B','1,75',26)
let torresi = new Jugador('Jonathan Torresi','ES','1,90',29)
let quiroga = new Jugador('Nicolas Quiroga (U23)','ES','1,90',20)
let azpilicueta = new Jugador('Alejo Azpilicueta (U23)', 'AL','2,01',21)
let evans = new Jugador('Jerry Evans (E)','AP','2,03',32)
let barreiro = new Jugador('Agustín Barreiro','P','2,03',24)
let filippetti = new Jugador('Enzo Filippetti (U23)','P','2,01',22)
let mitchell = new Jugador('Charles Mitchell (E)','P','2,03',29)
let demti = new Jugador('Fabio Demti','DT','',54)

jugadoresObera.push(gallegos,laterza,torresi,quiroga,azpilicueta,evans,barreiro,filippetti,mitchell,demti)

cargarJugadores(jugadoresObera)