let paul, marie, eric, clair, madameMukuna, joseph, sarah;
// Ecrivez votre code ici
function calculerHeritage() {
    const patrimoineTotal = 60000000 + 40000000 + 20000000;

    const premiereCategorieTotal = patrimoineTotal * 0.75; 
    const partEnfant = premiereCategorieTotal / 3; 

    const partEric = partEnfant / 2; 
    const partClaire = partEnfant / 2; 

    // Calcul de la deuxième catégorie (25% de l'héritage)
    const deuxiemeCategorieTotal = patrimoineTotal * 0.25; 
    const partDeuxiemeCategorie = deuxiemeCategorieTotal / 3; 

    return {
        Paul: partEnfant, 
        Marie: partEnfant, 
        Éric: partEric, 
        Claire: partClaire, 
        'Madame MUKUNA': partDeuxiemeCategorie, 
        Joseph: partDeuxiemeCategorie, 
        Sarah: partDeuxiemeCategorie,
    };
}

// Exécution du calcul
const partsHéritage = calculerHeritage();

// Afficher les résultats
console.log("Part de Paul :", partsHéritage.Paul);
console.log("Part de Marie :", partsHéritage.Marie);
console.log("Part d'Éric :", partsHéritage.Éric);
console.log("Part de Claire :", partsHéritage.Claire);
console.log("Part de Madame MUKUNA :", partsHéritage['Madame MUKUNA']);
console.log("Part de Joseph :", partsHéritage.Joseph);
console.log("Part de Sarah :", partsHéritage.Sarah);

// Exporter les parts pour une utilisation ultérieure si nécessaire
module.exports = partsHéritage;