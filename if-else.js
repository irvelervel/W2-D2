// COSTRUTTO IF
// IF è una parola riservata che permette di racchiudere un blocco di codice
// mettendo una condizione come sbarramento

const person = {
  firstName: 'Yoshi',
  age: 17,
  eyeColor: 'brown',
}

// Ma Luigi conosce l'esaminatore dell'ACI...
// la condizione è: almeno 18 anni oppure che ti chiami "Luigi"

if (person.age >= 18 || person.firstName === 'Luigi') {
  // qui dentro si entra solamente se la condizione nelle ( ) è TRUE
  console.log("Benvenuto all'esame della patente!")
} else {
  console.log(
    'Purtroppo non sei ancora maggiorenne (...e non ti chiami nemmeno Luigi!)'
  )
}

// i blocchi IF e ELSE sono ALTERNATIVI (per forza di cose si entra o in uno, o nell'altro)

// ESEMPIO PRO CON IF/ELSEIF
if (person.eyeColor === 'azure') {
  console.log('Che begli occhi azzurri che hai!')
} else if (person.eyeColor === 'green') {
  console.log('Che begli occhi verdi che hai!')
} else {
  console.log('Mmh, hai degli occhi ok.')
}

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n1 = 5
let n2 = 8

if (n1 > n2) {
  // n1 è il più grande!
  console.log('n1 è più grande')
} else {
  // n2 è il più grande!
  console.log('n2 è più grande')
}
