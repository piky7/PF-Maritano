// -- Boca Jrs


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

let jugadoresBoca = []

let jVildoza = new Jugador('José Vildoza', 'B', '1,91',27)
let defelippo = new Jugador('José Defelippo','B','1,86',26)
let guerrero = new Jugador('Juan Martin Guerrero (U23)','B','1,88',20)
let schattmann = new Jugador('Leonel Schattmann','ES','1,94',36)
let mata = new Jugador('Marcos Mata','AL','2,01',36)
let mRodriguez = new Jugador('Manuel Rodríguez (U23)','AL','2,03',21)
let vega = new Jugador('Sebastián Vega','AL','2,00',35)
let mainoldi = new Jugador('Leonardo Mainoldi','AP','2,04',38)

jugadoresBoca.push(jVildoza,defelippo,guerrero,schattmann,mata,mRodriguez,vega,mainoldi)

cargarJugadores(jugadoresBoca)