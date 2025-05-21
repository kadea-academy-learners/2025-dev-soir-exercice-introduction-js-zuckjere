let salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste;
// Ecrivez votre code ici
salaireMensuel=500;
loyer=(salaireMensuel/100)*30;
nourriture=(salaireMensuel/100)*20;
transport=(salaireMensuel/100)*10;
autresDepenses=50+25;
totalDepenses=loyer+nourriture+transport+autresDepenses;
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
