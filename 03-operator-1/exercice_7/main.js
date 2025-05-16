let ageEnfant, agePere, ageMere, ageGrandPere, ageOncle;
// Ecrivez votre code ici
ageEnfant = 20;
agePere = ageEnfant*2;
ageMere = agePere-5;
console.log(ageMere);
ageGrandPere = (ageMere*2)+(ageEnfant/2);
ageOncle = agePere+10;
console.log(agePere,ageMere,ageGrandPere,ageOncle);


// Ne pas modifier le code ci-dessous
module.exports = {
  ageEnfant,
  agePere,
  ageMere,
  ageGrandPere,
  ageOncle,
};
