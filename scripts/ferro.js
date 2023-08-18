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

let jugadoresFerro = []

let lezcano = new Jugador('Emiliano Lezcano (U23)','B','1,90',22)
let spano = new Jugador('Tomás Spano','B','1,85',25)
let borsellino = new Jugador('Franco Borsellino','B','1,85',36)
let fRodriguez = new Jugador('Felipe Rodriguez (U23)','ES','1,95',20)
let bettiga = new Jugador('Valentín Bettiga','ES','1,93',23)
let buemo = new Jugador('Carlos Buemo','AL','1,95',27)
let mare = new Jugador('Lautaro Mare','AP','1,97',25)
let fierro = new Jugador('Mariano Fierro','AP','2,00',37)
let luchi = new Jugador('Marco Luchi','P','1,98',30)
let tintorelli = new Jugador('Damian Tintorelli','P','2,05',41)
let fFernandez = new Jugador('Federico Fernández','DT','',38)

jugadoresFerro.push(lezcano,spano,borsellino,fRodriguez,bettiga,buemo,mare,fierro,luchi,tintorelli,fFernandez)

cargarJugadores(jugadoresFerro)