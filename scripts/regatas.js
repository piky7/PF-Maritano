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

let jugadoresRegatas = []

let jaime = new Jugador('Andrés Jaime','B','1,85',23)
let franchela = new Jugador('Tobías Franchela (U23)','B','1,82',21)
let giordano = new Jugador('Marco Giordano','B','1,88',23)
let fVieta = new Jugador('Franco Vieta','ES','1,91',30)
let safar = new Jugador('Selem Safar','ES','1,92',36)
let carreras = new Jugador('Xavier Carreras','AL','1,98',28)
let pinero = new Jugador('Facundo Piñero','AL','2,02',34)
let diez = new Jugador('Alejandro Diez','AP','2,01',36)
let mcGhee = new Jugador('Gary McGhee (E)','P','2,11',34)
let calvi = new Jugador('Fernando Calvi','DT','',42)

jugadoresRegatas.push(jaime,franchela,giordano,fVieta,safar,carreras,pinero,diez,mcGhee,calvi)

cargarJugadores(jugadoresRegatas)
