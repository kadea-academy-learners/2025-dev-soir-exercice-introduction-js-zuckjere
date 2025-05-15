let salaireMensuel=500,
  loyer= (salaireMensuel * 30) / 100,
  nourriture= (salaireMensuel * 20) / 100,
  transport= (salaireMensuel * 10) / 100,
  autresDepenses= 50+25,
  totalDepenses= loyer + nourriture + transport + autresDepenses,
  reste= salaireMensuel - totalDepenses;
  loisir= (salaireMensuel * 15) / 100,
  console.log(totalDepenses)
  totalDepenses= loyer + nourriture + transport + autresDepenses+ loisir,
  reste= salaireMensuel - totalDepenses;
  console.log(totalDepenses)
// Ecrivez votre code ici

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
