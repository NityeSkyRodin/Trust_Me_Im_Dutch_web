// Functie om van het inlogscherm naar het spel te gaan
function joinGame() {
    const roomCode = document.getElementById('room-code').value;
    const province = document.getElementById('province-select').value;

    if (roomCode.length < 4) {
        alert("Vul een geldige 4-letterige kamercode in!");
        return;
    }

    // Pas de header aan naar de gekozen provincie
    document.getElementById('player-province').innerText = province;

    // Wissel de schermen
    document.getElementById('lobby-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');

    console.log(`Verbonden als ${province} in kamer ${roomCode}`);
    // LATER: Hier openen we de WebSocket naar Godot
}

// Functie om te wisselen tussen de 4 tabbladen onderin
function switchTab(tabId) {
    // Verberg alle tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Toon de gekozen tab
    document.getElementById(tabId).classList.add('active');
}

// Mock-functie om acties naar Godot te sturen (Doet nu nog niks behalve printen)
function sendAction(type, data) {
    console.log(`Actie verstuurd naar Godot -> Type: ${type}, Data: ${data}`);
    alert(`Je hebt actie '${type}' uitgevoerd! (Kijk in console)`);
    // LATER: socket.send(JSON.stringify({ type: type, data: data }));
}

// Mock-functie voor de chat
function sendMessage() {
    const target = document.getElementById('chat-target').value;
    const msg = document.getElementById('chat-msg').value;

    if(msg.trim() === "") return;

    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<p style="color: #4CAF50"><strong>Jij aan ${target}:</strong> ${msg}</p>`;

    document.getElementById('chat-msg').value = ''; // Maak veld leeg
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll automatisch naar beneden
}