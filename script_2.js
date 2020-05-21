

// Un prompt s'affiche avec la question suivante
number = prompt("De quel nombre veux-tu calculer la factorielle ?");

function Factoriel(n) {
   return n > 1?n * Factoriel(n-1):1;
}

// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
/*"Le résultat est : 24"*/

console.log("Le résultat est: " + Factoriel(number) );
