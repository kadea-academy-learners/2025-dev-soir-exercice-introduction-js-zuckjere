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

  totalDepenses=(totalDepenses*100)/salaireMensuel;
  reste=(reste*100)/salaireMensuel;
  loisirs=(loisirs*100)/salaireMensuel;
  loyer=(loyer*100)/salaireMensuel;
  nourriture=(nourriture*100)/salaireMensuel;
  transport=(transport*100)/salaireMensuel;

  console.log("Dépenses totales sont de : " + totalDepenses);
  console.log("Reste est de : " + reste);
  console.log("Dépenses de loisirs sont de : " + loisirs);
  console.log("Dépenses de loyer sont de : " + loyer);
  console.log("Dépenses de nourriture sont de : " + nourriture);
  console.log("Dépenses de transport sont de : " + transport);
  console.log("Autres dépenses sont de : " + autresDepenses);
  
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
