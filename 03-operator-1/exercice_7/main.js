let ageEnfant = 12;
let agePere = ageEnfant * 2;
let ageMere = agePere - 5;
let ageGrandPere = ageMere * 2 + ageEnfant / 2;
let ageOncle = agePere + 10;
console.log(ageEnfant);
console.log(agePere);
console.log(ageMere);
console.log(ageGrandPere);
console.log(ageOncle);

if (typeof module !== "undefined") {
  module.exports = { ageEnfant, agePere, ageMere, ageGrandPere, ageOncle };
}
