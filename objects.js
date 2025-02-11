// immaginate di avere 5 proprietà che "appartengono" alla stessa "entità"
// invece di fare 5 proprietà distinte...
let firstName = 'Mario'
let lastName = 'Bros'
let age = 22
let eyeColor = 'brown'
let canDrive = true

// ...potreste creare un OGGETTO:

// OGGETTI
// Un oggetto in JS è un contenitore di valori che appartengono alla stessa "entità"
// è possibile inserire n coppie chiave/valore, separate da VIRGOLA
// per effettuare un'assegnazione del valore alla chiave si utilizzano i DUE PUNTI (:)
const person = {
  firstName: 'Mario', // coppia chiave:valore
  lastName: 'Bros',
  age: 22,
  eyeColor: 'brown',
  canDrive: true,
}

console.log('PERSON', person)

// LEGGERE LE PROPRIETÀ INDIVIDUALI DAGLI OGGETTI
// Uno dei metodi più comuni per leggere un singolo valore di una proprietà
// da un oggetto è utilizzare la cosiddetta "DOT NOTATION"
// nomeoggetto.nomechiave

person.firstName // 'Mario'
person.canDrive // true

const marioDescription =
  person.firstName + // 'Mario'
  ' ' +
  person.lastName + // 'Bros'
  ' ' +
  'ha ' +
  person.age + // 22
  ' anni e gli occhi di colore ' +
  person.eyeColor // 'marrone'

console.log('DESCRIZIONE DI MARIO', marioDescription)

// METODO ALTERNATIVO PER ACCEDERE AD UNA PROPRIETÀ DI UN OGGETTO
// "SQUARE BRACKETS NOTATION"
person['firstName'] // 'Mario'

// MODIFICARE LE PROPRIETÀ DI UN OGGETTO
// Mario fa il compleanno!
person.age = 23 // ora Mario ha 23 anni
person.eyeColor = 'azure' // Mario ha subito un trapianto di cornea

console.log('ora Mario ha ' + person.age + ' anni')
console.log('PERSON', person)
// l'ordine delle proprietà in un oggetto non conta niente, è indifferente!

// è anche possibile (con le stesse tecniche AGGIUNGERE ex-novo proprietà a person)
person.numberOfHands = 2
person.girlfriend = null

// ed è anche possibile ELIMINARE interamente proprietà da person
delete person.canDrive

console.log('PERSON DOPO AGGIUNTE/MODIFICHE', person)

// LE PROPRIETÀ NON DEFINITE SULL'OGGETTO RITORNANO undefined
console.log(person.civettesulcomo) // undefined
