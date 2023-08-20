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

let jugadoresPlatense = []

let mayora = new Jugador('Manuel Mayora (E)','B','1,86',25)
let flor = new Jugador('Eric Flor','ES','1,90',30)
let barrales = new Jugador('Santiago Barrales','AL','1,98',24)
let mazzucchelli = new Jugador('Santiago Mazzucchelli (U23)','AL','1,96',19)
let yarza = new Jugador('Alvaro Yarza (U23','AL','1,95',22)
let goicoechea = new Jugador('Mariano Goicoechea (U23)','AL','1,95',19)
let sMorales = new Jugador('Sebastián Morales','AP','2,02',35)
let ianguas = new Jugador('Pedro Ianguas (E)','P','2,03',24)
let aVazquez = new Jugador('Alejandro Vázquez','DT','',53)

jugadoresPlatense.push(mayora,flor,barrales,mazzucchelli,yarza,goicoechea,sMorales,ianguas,aVazquez)

cargarJugadores(jugadoresPlatense)