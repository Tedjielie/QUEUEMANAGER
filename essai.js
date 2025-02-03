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
