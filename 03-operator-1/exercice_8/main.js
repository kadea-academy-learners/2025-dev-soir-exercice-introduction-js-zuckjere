// Ecrivez votre code ici
const salaireMensuel = 500; 
const loyer = salaireMensuel * 0.3; 
const nourriture = salaireMensuel * 0.2; 
const transport = salaireMensuel * 0.1; 
const autresDepenses = salaireMensuel * 0.15; 
const loisir = salaireMensuel * 0.15; 
const totalDepenses = loyer + nourriture + transport + autresDepenses + loisir; 
const reste = salaireMensuel - totalDepenses; 

console.log("Ton loyer est de", loyer);
console.log("Votre budget nourriture est de", nourriture);
console.log("Votre budget transport est de", transport);
console.log("Votre budget dépense est de", autresDepenses);
console.log("Votre budget total dépense est de", totalDepenses);
console.log("Reste :", reste);

if (reste < 100) {
    console.log("Attention, budget serré");
}

console.log("Votre pourcentage loyer est de", (loyer / salaireMensuel) * 100);
console.log("Votre pourcentage nourriture est de", (nourriture / salaireMensuel) * 100);
console.log("Votre pourcentage transport est de", (transport / salaireMensuel) * 100);
console.log("Votre pourcentage dans autres dépenses est de", (autresDepenses / salaireMensuel) * 100);
console.log("Votre pourcentage loisir est de", (loisir / salaireMensuel) * 100);

const augmentation = 50; 
console.log("Vous avez un ajout de salaire de", augmentation, "dollars");

if (totalDepenses + loisir > salaireMensuel + augmentation) {
    console.log("Dépenses trop élevées, réduisez vos charges");
}
module.exports = {
    salaireMensuel,
    reste,
    loyer,
    nourriture,
    transport,
    autresDepenses,
    loisir,
    totalDepenses,
};