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



function viewTicket() {
  alert("Affichage des détails du ticket.");
}
function showCurrentTickets() {
    document.getElementById("current-ticket-description").style.display = "block";
    document.getElementById("historical-tickets").style.display = "none";
    document.getElementById("ticket-title").textContent = "TICKETS EN COURS";
  }
  
  function showHistoricalTickets() {
    document.getElementById("current-ticket-description").style.display = "none";
    document.getElementById("historical-tickets").style.display = "block";
    document.getElementById("ticket-title").textContent = "HISTORIQUES";
  }
  
