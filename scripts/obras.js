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

let jugadoresObras = []

let barral = new Jugador('Pedro Barral','B','1,87',28)
let venegas = new Jugador('Juan Pablo Vengas (E)','B','1,83',23)
let spight = new Jugador('Andre Spight (E)','ES','1,91',28)
let solarin = new Jugador('Jeff Solarin (E)','AP','1,93',30)
let andela = new Jugador('Rodrigue Andela (E)','AP','2,03',23)
let calfani = new Jugador('Mathías Calfani (E)','P','2,02',31)
let dominguez = new Jugador('Peter Dominguez (E)','DT','','')

jugadoresObras.push(barral,venegas,spight,solarin,andela,calfani,dominguez)

cargarJugadores(jugadoresObras)

