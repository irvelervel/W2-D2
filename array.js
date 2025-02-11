// ARRAYS
// Un array è una LISTA ORDINATA di VALORI
// Si tratta di un'unica entità complessa per racchiudere molteplici valori separati da virgola
// Assomiglia all'oggetto, ma nell'array non ci sono le CHIAVI (ci sono solo i valori)

const italianCities = [
  'Roma', // 0
  'Milano', // 1
  'Firenze', // 2
  'Bologna', // 3
  'Catania', // 4 --> Cellino S. Marco
  'Napoli', // 5
]

console.log('italianCities', italianCities)

const myFavoriteNumbers = [3, 7, 100, 1000]

const mixedArray = ['Stefano', 10, true, 3, 'EPICODE']

const personArray = [
  { firstName: 'Stefano', age: 18 },
  { firstName: 'Topogigio', age: 66 },
]

personArray[1].age // 66
personArray[1].age = 67 // Auguri Topogigio!

personArray.push({
  firstName: 'ENGI',
  age: 18,
})

console.log('IO ABITO A ' + italianCities[2]) // "IO ABITO A FIRENZE"
console.log(italianCities[6]) // undefined

italianCities.length // 6
myFavoriteNumbers.length // 4

// REGOLE GENERALI DEGLI ARRAY
// - il primo elemento dell'array avrà SEMPRE posizione 0
// - l'ultimo elemento dell'array avrà SEMPRE posizione lunghezza-1

italianCities[5] // napoli
italianCities[italianCities.length - 1]

// MODIFICA DI UN ELEMENTO IN UN ARRAY
italianCities[4] = 'Cellino S. Marco'
console.log('italianCities', italianCities)

// AGGIUNGERE UN ELEMENTO IN CODA ALL'ARRAY
italianCities.push('Gorizia', 'Palermo')
console.log('italianCities', italianCities)

// AGGIUNGERE UN ELEMENTO IN CIMA ALL'ARRAY
italianCities.unshift('Ancona')
// ora italianCities ha lunghezza 9!
console.log('italianCities', italianCities)

// UTILIZZO DI DELETE (SCONSIGLIATO)
// delete italianCities[8] // rimuovo Palermo
// console.log('italianCities', italianCities)

italianCities.pop() // pop() rimuove l'ULTIMO elemento dell'array
// ha rimosso "Palermo" e ha accorciato l'array
console.log('italianCities', italianCities)

italianCities.shift() // rimuove il PRIMO elemento dell'array
console.log('italianCities', italianCities)

// Bologna è il 4° elemento dell'array (quindi con indice 3)
italianCities.splice(3, 1)
console.log('italianCities', italianCities)

// aggiungiamo un elemento in centro all'array (dopo Firenze)
italianCities.splice(3, 0, 'Aosta')
console.log('italianCities', italianCities)
