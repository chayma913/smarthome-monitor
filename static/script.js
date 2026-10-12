
const temperatureElement = document.getElementById("temperature");
const humidityElement = document.getElementById("humidity");
const lightElement = document.getElementById("light");
const motionElement = document.getElementById("motion");
const updatedAtElement = document.getElementById("updatedAt");
const connectionStatus = document.getElementById("connectionStatus");
const connectionDot = document.getElementById("connectionDot");
const messageElement = document.getElementById("message");
const refreshButton = document.getElementById("refreshButton");

async function loadSensors() {
    refreshButton.disabled = true;
    messageElement.textContent = "Récupération des données...";

    try {
        const response = await fetch("/api/sensors");

        if (!response.ok) {
            throw new Error("Impossible de récupérer les données.");
        }

        const data = await response.json();

        temperatureElement.textContent = data.temperature;
        humidityElement.textContent = data.humidity;
        lightElement.textContent = data.light;

        motionElement.textContent = data.motion
            ? "Mouvement détecté"
            : "Aucun mouvement";

        motionElement.style.color = data.motion ? "#d97706" : "#15803d";

        updatedAtElement.textContent = new Date(
            data.updated_at
        ).toLocaleString("fr-FR");

        connectionStatus.textContent = "Système connecté";
        connectionDot.className = "dot online";
        messageElement.textContent = "Données chargées avec succès.";
    } catch (error) {
        connectionStatus.textContent = "Système déconnecté";
        connectionDot.className = "dot offline";
        messageElement.textContent =
            "Erreur : vérifiez que le serveur FastAPI fonctionne.";
        console.error(error);
    } finally {
        refreshButton.disabled = false;
    }
}

refreshButton.addEventListener("click", loadSensors);

// Première récupération au chargement de la page.
loadSensors();

// Actualisation automatique toutes les 5 secondes.
setInterval(loadSensors, 5000);
