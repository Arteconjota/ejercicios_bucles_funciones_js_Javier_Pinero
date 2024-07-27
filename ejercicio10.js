/*EJERCICIO 10
Desarrolla una función que reciba un país por parámetro y devuelva su capital.
Utiliza un objeto para almacenar los países y sus capitales.
La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.*/

const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };

  let countries = Object.keys(capitals);
  let capital = Object.values(capitals);
  let newList = [];

  for (i = 0; i < countries.length; i++) {
    newList.push({'name' : countries[i], 'capital' : capital[i]});
  }

  /*Sólo he sido capaz de plantear el ejercicio y "resolverlo" de esta forma, pero sólo funciona escribiendo el parámetro entre comillas... */

  function getCapital(country) {
    let counter = 0;
    for (c of newList) {
      if (country == c.name) {
        counter++;
        console.log("La capital de", c.name, "es:", c.capital);
      } 
    }
    if (counter == 0) {
      console.log("Ese país no se encuentra en la lista.");
    }
  }  
  
  getCapital('Spain');
  getCapital('Rumania');
  getCapital('Italy');
  getCapital('Ireland');
  