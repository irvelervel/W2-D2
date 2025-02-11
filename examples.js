const cat = {
  name: 'Fufy',
  breed: 'Persian',
  skills: ['sleeping', 'eating', 'scratching'],
  age: 5,
}

cat.breed // 'Persian'
cat.skills[0] // 'sleeping'
cat.skills[2] // 'scratching'
cat.skills[cat.skills.length - 1] // 'scratching'

const negozioOnline = {
  nome: 'TechStore', // negozioOnline.nome
  indirizzo: {
    via: 'Via Roma 123',
    città: 'Milano',
    cap: '20100', // negozioOnline.indirizzo.cap
    paese: 'Italia',
  },
  categorie: ['Smartphone', 'Computer', 'Accessori'], // negozioOnline.categorie[1] -> Computer
  prodotti: [
    {
      id: 1,
      nome: 'iPhone 15',
      prezzo: 999.99, //negozioOnline.prodotti[0].prezzo
      disponibile: true,
      specifiche: {
        memoria: '128GB',
        colore: 'Nero',
        schermo: '6.1 pollici',
      },
    },
    {
      id: 2,
      nome: 'MacBook Air',
      prezzo: 1299.99,
      disponibile: false,
      specifiche: {
        processore: 'M2',
        ram: '16GB', // negozioOnline.prodotti[1].specifiche.ram
        ssd: '512GB',
      },
    },
  ],
}

console.log(negozioOnline.prodotti[1].specifiche.ram)
