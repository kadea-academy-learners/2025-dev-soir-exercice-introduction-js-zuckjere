let paul, marie, eric, clair, madameMukuna, joseph, sarah;
// Ecrivez votre code ici
// 1. Valeur totale de l’héritage
let heritageTotal = 60000000 + 40000000 + 20000000; // 120 000 000 CDF

// 2. Répartition des parts
let partPremiereCategorie = heritageTotal * 0.75; // 75% pour les enfants
let partDeuxiemeCategorie = heritageTotal * 0.25; // 25% pour le conjoint + frères

// 3. Enfants du défunt : Paul, Marie, Alain (représenté par Éric et Claire)
let partParEnfant = partPremiereCategorie / 3;

paul = partParEnfant; // Paul : 1/3
marie = partParEnfant; // Marie : 1/3

// Alain étant décédé, sa part va à ses deux enfants
eric = partParEnfant / 2;
clair = partParEnfant / 2;

// 4. Conjoint et frères/nièce : 3 personnes
let partParAdulteCategorie2 = partDeuxiemeCategorie / 3;

madameMukuna = partParAdulteCategorie2;
joseph = partParAdulteCategorie2;
sarah = partParAdulteCategorie2;

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
