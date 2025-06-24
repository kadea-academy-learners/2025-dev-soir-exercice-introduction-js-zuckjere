let salaireMensuel=500,
  loyer,
  nourriture,
  transport,
  autresDepenses= 50,
  totalDepenses= loyer + nourriture + transport + autresDepenses,
  reste= salaireMensuel - totalDepenses;  
// Ecrivez votre code ici
  loyer= (salaireMensuel * 30) / 100;
  nourriture= (salaireMensuel * 20) / 100;
  transport= (salaireMensuel * 10) / 100;
  autresDepenses+=25;
  console.log(loyer, nourriture, transport, autresDepenses)
  totalDepenses= loyer + nourriture + transport + autresDepenses;
  console.log(totalDepenses)
  reste= salaireMensuel - totalDepenses;
  
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
