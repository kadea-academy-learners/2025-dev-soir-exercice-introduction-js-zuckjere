// Ecrivez votre code ici
let salaireMensuel=500;
let loyer= (salaireMensuel*30)/100;
let nourriture =(salaireMensuel*20)/100;
let transport= (salaireMensuel*10)/100;
let autresDepenses= 50;
let autresDepensesAjout= autresDepenses+25;
let loisir =(salaireMensuel*15)/100;
let totalDepenses= (loyer+nourriture+transport+autresDepenses+loisir);
let reste= (salaireMensuel-totalDepenses)
console.log("tonloyer est de" + ""+loyer);
console.log("votre buget nouriture est de"+nourriture)
console.log("votre budget transport est de" +transport) 
console.log("votre budget depense est de" +autresDepenses)
console.log("votre budget total depense est de"+totalDepenses)
console.log (reste);
console.log("votre total loisir est" +loisir);
console.log("votre resre"+ reste);
if (reste >= 100) {
    console.log("Budget bien géré");
} else {
    console.log("Attention, budget serré");
}
let loyerpourcent =(loyer*150)/500;
console.log("votre pourcentage loyer est de" +loyerpourcent);
let nouriturepourcent =(nourriture*100)/500;
console.log("votre porcentage nouriture est de"+nouriturepourcent) 
let transportpourcent =(transport*50)/500;
console.log("votre pourcentage trqnsport est" +transport);
let autresDepensespourcent =(autresDepenses*50)/500;
console.log("votre pourcentage dans autres depenses est de" +autresDepenses);
let loisirpourcent= (loisir*75)/500;
console.log("votre pourcentage loisir est de"+ loisir);
let salaireMensuelAjout=(salaireMensuel*10)/100;
console.log("vous avez un ajout de saliare de" +salaireMensuelAjout+ "dollars");
if (totalDepenses >90) {
    console.log("Dépenses trop élevées, réduisez vos charges");
} else {
    console.log("Depenses normales");
}
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
