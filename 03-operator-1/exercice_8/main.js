let salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste;
// Ecrivez votre code ici
// 1. Salaire mensuel
salaireMensuel = 500;

// 2. Loyer = 30% du salaire
loyer = salaireMensuel * 0.3;

// 3. Nourriture = 20% du salaire
nourriture = salaireMensuel * 0.2;

// 4. Transport = 10% du salaire
transport = salaireMensuel * 0.1;

// 5. Autres dépenses = 50 + 25
autresDepenses = 50 + 25;

// 6. Total des dépenses
totalDepenses = loyer + nourriture + transport + autresDepenses;

// 7. Reste après dépenses
reste = salaireMensuel - totalDepenses;
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
