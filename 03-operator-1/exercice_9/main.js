let paul, marie, eric, clair, madameMukuna, joseph, sarah;
// Ecrivez votre code ici
const heritage = {
  maison : 60000000,
  terrains : 40000000,
  liquidités : 20000000
}
const TotalHeritage = heritage.maison + heritage.terrains + heritage.liquidités;
const Premièrecatégorie = TotalHeritage * 0.75;
const Deuxièmecatégorie = TotalHeritage * 0.25;
paul = Premièrecatégorie / 3;
marie = Premièrecatégorie / 3;
alain = Premièrecatégorie / 3;
eric = alain / 2;
clair = alain / 2;
madameMukuna = Deuxièmecatégorie / 3;
joseph = Deuxièmecatégorie / 3;
sarah = Deuxièmecatégorie / 3;
  // Ne pas modifier le code ci-dessous
module.exports = {
  paul,
  marie,
  eric,
  clair,
  madameMukuna,
  joseph,
  sarah,
};