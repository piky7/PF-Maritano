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

let jugadoresLaUnion = []

let guerra = new Jugador('Luciano Guerra','B','1,85',25)
let alonso = new Jugador('Gonzalo Alonso (U23)','B','1,77',20)
let mFernandez = new Jugador('Martín Fernández','ES','1,93',26)
let cardo = new Jugador('Cristian Cardo','ES','1,98',24)
let saglietti = new Jugador('Marcos Saglietti','ES','1,90',37)
let edintas = new Jugador('Matías Edintas','ES','1,85',28)
let robinson = new Jugador('Elijah Robinson (E)','AL','1,96',28)
let rattero = new Jugador('Ramiro Rattero','AP','2,03',23)
let efambe = new Jugador('David Efambé (E) (U23)','AP','2,01',22)
let spicer = new Jugador('Khaliq Spicer (E)','P','2,06',29)
let ginobili = new Jugador('Sebastían Ginóbili','DT','',51)

jugadoresLaUnion.push(guerra,alonso,mFernandez,cardo,saglietti,edintas,robinson,rattero,efambe,spicer,ginobili)

cargarJugadores(jugadoresLaUnion)