
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
      
        if( jugadoresArgentino.indexOf(jug) % 2 === 0){
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



// -- Argentino de Junin

let jugadoresArgentino = []

let alliende = new Jugador('Guillermo Aliende' , 'B' , '1,78' , 26)
let slider = new Jugador('Jonathan Slider' , 'ES' , '1,92' , 36)
let cangelosi = new Jugador('Juan Cangelosi', 'AL', '1,95' , 42)
let gimenez = new Jugador('Nicolás Giménez','AL', '2,02', 29)
let faccelo = new Jugador('Agustín Facello', 'B', '1,83', 23)
let payton = new Jugador('Manny Payton (E)', 'ES', '1,83',26)
let romegialli = new Jugador('Santino Romegialli (U23)' , 'P' , '2,04' , 20 )

jugadoresArgentino.push(alliende,faccelo,slider,payton,cangelosi,gimenez,romegialli)

// Carga de equipos
cargarJugadores(jugadoresArgentino)


