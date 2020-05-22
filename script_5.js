const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


function oneTime(){
  for (book in books) {
    if (books[book]["rented"] > 0) {
        Rented = "Oui";}
   else {
        Rented = "Non"; }
      }
     return Rented;
     };
console.log("Tous loués au moins une fois?")
console.log(oneTime())

/*console.log(books.max(rented));
// expected output: 3*/

console.log("Le livre le plus emprunté ?")
books.sort((a, b) => a.rented - b.rented).reverse();
console.log(books[0].title);

console.log("Le livre le moins emprunté ?")
books.sort((a, b) => a.rented - b.rented);
console.log(books[0].title);

console.log("Le livre avec l'ID: 873495");
console.log(books.find(book => book.id == 873495).title);

console.log("Supprimer livre avec l'ID: 133712");

books.splice(books.findIndex(book => book.id == 133712), 1);
console.log(books[0].title)