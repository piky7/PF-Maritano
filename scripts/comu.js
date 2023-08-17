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
          infoJugador.className = 'par'
        } else {
          infoJugador.className = 'impar'
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

let jugadoresComu = []

let deshields = new Jugador('Keron Deshields (E)', 'B', '1,90',31)
let zenclussen = new Jugador('Cristian Zenclussen','B','1,82',25)
let montes = new Jugador('Alejo Montes','ES','1,90',31)
let assum = new Jugador('Santiago Assum','AL','1,94',24)
let giorgi = new Jugador('Facundo Giorgi','AL','2,05',37)
let maxwell = new Jugador('Evan Maxwell (E)','P','2,08',28)
let strings = new Jugador('Justin Strings','P','2,01',26)
let mThomas = new Jugador('Marcus Thomas (E)','ES','1,90',28)


jugadoresComu.push(deshields,zenclussen,montes,mThomas,assum,giorgi,maxwell,strings)

cargarJugadores(jugadoresComu)