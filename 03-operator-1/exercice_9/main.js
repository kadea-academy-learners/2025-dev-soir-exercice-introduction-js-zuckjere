//let paul, marie, eric, clair, madameMukuna, joseph, sarah;
// Ecrivez votre code ici
const maison=60000000;
const terrain=40000000;
const liquide=20000000;
const totalHeritage = maison + terrain + liquide;
const paul=(totalHeritage*0.75)/3;
const marie=(totalHeritage*0.75)/3;
const alain=(totalHeritage*0.75)/3;
const eric=alain/2;
const clair=alain/2;
const madameMukuna=(totalHeritage*0.25)/3;
const joseph=(totalHeritage*0.25)/3;
const sarah=(totalHeritage*0.25)/3;

console.log("La part de Paul est de :" +paul);
console.log("La part de Marie est de :" +marie);
console.log("La part de Eric est de :" +eric);
console.log("La part de Clair est de :" +clair);
console.log("La part de Madame Mukuna est de :" +madameMukuna);
console.log("La part de Joseph est de :" +joseph);
console.log("La part de Sarah est de :" +sarah);

// Ne pas modifier le code ci-dessous
module.exports = {
  paul,
  marie,
  eric,
  clair,
  madameMukuna,
  joseph,
  sarah,
};
