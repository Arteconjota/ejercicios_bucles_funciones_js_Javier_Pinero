/*EJERCICIO 9
Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. 
La función debe retornar el miembro más antiguo. Utiliza este array para probar tu función. */

const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  
  function findOldestXMen(xMen) {
    let counter = xMen[0].year;
    for (mutant of xMen){
      if (mutant.year < counter) {
        counter = mutant.year;
      }
    }
    for (elem of xMen) {
      if (elem.year == counter) {
        console.log(elem.name, "es el mutante más antiguo. (", counter, ")");
      }
    }
  }
  
  findOldestXMen(xMen);
  