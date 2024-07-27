/*EJERCICIO 12
Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y 
retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder.*/

const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantByPower(mutants, power) {
    let confirmation = new Boolean(false);
    for (hero of mutants) {
      if (power == hero.power) {
        confirmation = true;
        console.log("El/los mutante/s con el super poder buscado es/son:", hero.name);
      }
    }
    if (confirmation == false) {
      console.log("No existen mutantes con ese super poder");
    }
  }

  findMutantByPower(mutants, 'break glass');
  findMutantByPower(mutants, 'shape-shifting');
  findMutantByPower(mutants, 'steel skin');
  findMutantByPower(mutants, 'eating hot dogs quickly');
  
  