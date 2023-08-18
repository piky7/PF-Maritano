
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

        
      
        if( jugadoresGimnasia.indexOf(jug) % 2 === 0){
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
let jugadoresGimnasia = []

let toretta = new Jugador('Emiliano Toretta (U23)','B','1,84',21)
let webster = new Jugador('Joshua Webster (E)','B','1,90',26)
let mariani = new Jugador('Guido Mariani','ES','1,98',28)
let gramajo = new Jugador('Iván Gramajo','AL','1,93',27)
let stucky = new Jugador('Emilio Stucky','AP','1,98',29)
let deVaughn = new Jugador('Gerard De Vaughn (E)','AP','2,03',33)
let podesta = new Jugador('Fernando Podestá','P','2,05',31)
let nazione = new Jugador('Brandon Nazione','P','2,03',29)
let villagran = new Jugador('Martín Villagrán','DT','',41)

jugadoresGimnasia.push(toretta,webster,mariani,gramajo,stucky,deVaughn,podesta,nazione,villagran)

cargarJugadores(jugadoresGimnasia)