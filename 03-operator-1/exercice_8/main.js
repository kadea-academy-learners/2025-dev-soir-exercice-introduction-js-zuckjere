let salairemensuel=500,
  loyer= (500 * 30) / 100,
  nourriture= (500 * 20) / 100,
  transport= (500 * 10) / 100,
  loisir= (500 * 15) / 100,
  autresdepenses= 50+25,
  totaldepenses= loyer + nourriture + transport + autresdepenses+ loisir,
  reste= salairemensuel - totaldepenses;
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
