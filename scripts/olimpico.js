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

let jugadoresOlimpico = []

let aguirre = new Jugador('Nicolás Aguirre','B','1,89',35)
let machuca = new Jugador('Jonathan Machuca','B','1,85',34)
let arengo = new Jugador('Juan Arengo','ES','1,85',27)
let zanzottera = new Jugador('Tomás Zanzottera','ES','1,90',29)
let tabarez = new Jugador('Patricio Tabarez','AL','1,95',32)
let negrete = new Jugador('Alex Negrete (U23)','AL','1,93',21)
let losito = new Jugador('Hernan Losito (U23)','AL','1,98',22)
let romano = new Jugador('Nicolás Romano','AP','2,00',35)
let collier = new Jugador('Devon Collier (E)','AP','2,03',32)
let lockett = new Jugador('Phillip Lockett (E)','P','2,02',35)
let gutierrez = new Jugador('Leonardo Gutierrez','DT','',45)

jugadoresOlimpico.push(aguirre,machuca,arengo,zanzottera,tabarez,negrete,losito,romano,collier,lockett,gutierrez)

cargarJugadores(jugadoresOlimpico)