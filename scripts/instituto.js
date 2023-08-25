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

let jugadoresInstituto = []

let lVildoza = new Jugador('Leandro Vildoza','B','1,80',28)
let pomoli = new Jugador('Nicola Pomoli (E)','ES','1,95',24)
let elias = new Jugador('Federico Elias','ES','1,88',23)
let cosolito = new Jugador('Mauro Cosolito','AL','1,95',34)
let lugarini = new Jugador('Bautista Lugarini (U23)','AL','2,03',22)
let jefferson = new Jugador('Bryan Jefferson (E)','AP','2,01',29)
let saiz = new Jugador('Javier Saiz','P','2,06',29)
let acunia = new Jugador('Ricardo Acuña','P','2,06',32)
let victoriano = new Jugador('Lucas Victoriano','DT','',45)

jugadoresInstituto.push(lVildoza,pomoli,elias,cosolito,lugarini,jefferson,saiz,acunia,victoriano)

cargarJugadores(jugadoresInstituto)