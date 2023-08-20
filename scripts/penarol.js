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

let jugadoresPenarol = []

let valinotti = new Jugador('Joaquín Valinotti','B','1,85',24)
let whitfield = new Jugador('Robert Whitfield (E)','ES','1,90',26)
let ruiz  = new Jugador('Julián Ruiz','B','1,88',25)
let monacchi = new Jugador('Tomás Monacchi','ES','1,96',25)
let tolosa = new Jugador('Facundo Tolosa (U23)','ES','1,82',21)
let sarmiento = new Jugador('Octavio Sarmiento (U23)','AL','1,97',21)
let morales = new Jugador('Julián Morales','AL','1,93',28)
let filippa = new Jugador('Francisco Filippa','AP','2,02',27)
let lado = new Jugador('Mogga Lado (E)','AP','2,02',27)
let mRodriguez = new Jugador('Mariano Rodriguez','DT','',42) 

jugadoresPenarol.push(valinotti,ruiz,whitfield,monacchi,tolosa,sarmiento,morales,filippa,lado,mRodriguez)

cargarJugadores(jugadoresPenarol)