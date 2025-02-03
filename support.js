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



document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    function addMessage(content, sender) {
        const message = document.createElement("div");
        message.classList.add("message", sender);
        message.textContent = content;
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    sendBtn.addEventListener("click", () => {
        const userText = userInput.value.trim();
        if (userText !== "") {
            addMessage(userText, "user");
            userInput.value = "";
            setTimeout(() => addMessage("Merci pour votre message ! Nous allons vous répondre bientôt.", "assistant"), 1000);
        }
    });

    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendBtn.click();
        }
    });
});
