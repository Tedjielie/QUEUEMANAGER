
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


document.addEventListener("DOMContentLoaded", function () {
    function goToStep(step) {
        if (step === 1) {
            document.getElementById('step-1').style.display = 'block';
            document.getElementById('step-2').style.display = 'none';
        } else if (step === 2) {
            document.getElementById('step-1').style.display = 'none';
            document.getElementById('step-2').style.display = 'block';
        }
    }

    // Écouteurs d'événements pour les boutons "Suivant" et "Retour"
    document.querySelector(".next-btn").addEventListener("click", function () {
        goToStep(2);
    });

    document.querySelector(".back-btn").addEventListener("click", function () {
        goToStep(1);
    });
});

