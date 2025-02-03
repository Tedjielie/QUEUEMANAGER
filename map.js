document.getElementById('profileIcon').addEventListener('click', function (event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    let modal = document.getElementById('profileModal');
    modal.classList.toggle('hidden');
});

// Fermer le modal si on clique en dehors
document.addEventListener('click', function(event) {
    let modal = document.getElementById('profileModal');
    let icon = document.getElementById('profileIcon');
    if (!icon.contains(event.target) && !modal.contains(event.target)) {
        modal.classList.add('hidden');
    }
});


// Initialisation de la carte
var map = L.map('map').setView([5.345317, -4.024429], 12); // Coordonnées d'Abidjan

// Ajout d'une couche de carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Liste des entreprises (Exemple : Côte d'Ivoire)
var entreprises = [
    { name: "Banque XYZ", coords: [5.320357, -4.017975] },
    { name: "Hôpital ABC", coords: [5.331011, -4.024984] },
    { name: "Service des impôts", coords: [5.347132, -4.028431] }
];

// Ajout des marqueurs pour chaque entreprise
entreprises.forEach(entreprise => {
    var marker = L.marker(entreprise.coords).addTo(map)
        .bindPopup(`<b>${entreprise.name}</b><br><button onclick="prendreRDV('${entreprise.name}')">Prendre RDV</button>`);
});

// Fonction pour afficher le bouton de prise de RDV
function prendreRDV(nomEntreprise) {
    var rdvButton = document.getElementById("rdv-button");
    rdvButton.style.display = "block";
    rdvButton.innerText = `Prendre RDV chez ${nomEntreprise}`;
}
