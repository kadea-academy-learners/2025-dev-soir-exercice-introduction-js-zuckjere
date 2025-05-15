// Ecrivez votre code ici
let salaireMensuel = 500;
let loyer = (salaireMensuel * 30) / 100;
let nourriture = (salaireMensuel * 20) / 100;
let transport = (salaireMensuel * 10) / 100;
let autresDepenses = 50;
autresDepenses += 25;
let totalDepenses = loyer + nourriture + transport + autresDepenses;
let reste = salaireMensuel - totalDepenses;
console.log("votre salaire est de" + salaireMensuel);
console.log("votre loyer" + loyer);
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
