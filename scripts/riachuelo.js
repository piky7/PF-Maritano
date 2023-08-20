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

let jugadoresRiachuelo = []

let beigier = new Jugador('Mateo Beigier (U23)','B','1,86',22)
let vFernandez = new Jugador('Víctor Fernández','B','1,76',23)
let dalpino = new Jugador('Francisco Dalpino (U23','B','1,82',19)
let deLosSantos = new Jugador('Nicolás De Los Santos','B','1,85',35)
let llerena = new Jugador('Yustin Llerena (U23) (E)','ES','1,96',21)
let maldonado = new Jugador('Jonathan Maldonado','ES','1,89',33)
let arese = new Jugador('Santiago Arese','AL','1,95',36)
let mosley = new Jugador('Latraius Mosley (E)','AL','1,97',33)
let forestier = new Jugador('Valentín Forastier (U23)','AL','1,94',20)
let ibarguen = new Jugador('Andrés Ibarguen (E)','AP','2,01',27)
let young = new Jugador('Anthony Young (E)','AP','2,00',33)
let ginobili = new Jugador('Sebastián Ginobili','DT','',46)

jugadoresRiachuelo.push(deLosSantos,vFernandez,beigier,dalpino,llerena,maldonado,arese,mosley,forestier,ibarguen,young,ginobili)

cargarJugadores(jugadoresRiachuelo)