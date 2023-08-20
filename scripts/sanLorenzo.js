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

let jugadoresSanLorenzo = []

let lPerez = new Jugador('Lucas Pérez','B','1,85',35)
let conrradi = new Jugador('Francisco Conrradi (U23)','B','1,86',19)
let lugo = new Jugador('Sebastián Lugo','ES','1,91',25)
let dupuy = new Jugador('Ezequiel Dupuy','ES','1,83',26)
let lLatorre = new Jugador('Lucas Latorre (U23)','ES','1,89',20)
let marin = new Jugador('Federico Marín','AL','2,01',41)
let gCordoba = new Jugador('Gastón Córdoba','AL','2,00',28)
let roca = new Jugador('Thiago Roca (U23)','AL','1,92',19)
let grun = new Jugador('Federico Grun','AL','1,92',26)
let nesci = new Jugador('Valentino Nesci','AP','2,02',19)
let cerino = new Jugador('Ian Cerino (U23)','P','2,06',21)
let basualdo = new Jugador('Iván Basualdo','P','2,03',33)
let kHernandez = new Jugador('Kevin Hernández','P','2,05',32)
let costa = new Jugador('Leonardo Costa','DT','',44)

jugadoresSanLorenzo.push(lPerez,conrradi,lugo,dupuy,lLatorre,marin,gCordoba,roca,grun,nesci,cerino,basualdo,kHernandez,costa)

cargarJugadores(jugadoresSanLorenzo)