

level = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

let space = level - 1

while (space >= 0) {
  console.log(' '.repeat(space) + '#'.repeat(level - space));
  space--;
};
