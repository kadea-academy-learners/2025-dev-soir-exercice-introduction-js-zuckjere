let salaireMensuel=500;
let loyer=salaireMensuel*0.3;
let nourriture=salaireMensuel*0.2;
let transport=salaireMensuel*0.1;
let autresDepenses=50;
autresDepenses+=25;
let totalDepenses=(loyer+nourriture+transport+autresDepenses);
let reste=salaireMensuel-totalDepenses;
// Ecrivez votre code ici
if (reste>=100) {
  console.log("Budget bien géré.");
} else {
  console.log("Attention, budget serré");
}

let loisirs=salaireMensuel*1.5;
  totalDepenses+=loisirs;
  reste=salaireMensuel-totalDepenses;
  
// Ne pas modifier le code ci-dessous
module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste,
};
