
# SmartHome Monitor

Application web de surveillance d'une maison connectée,
développée avec Python, FastAPI, HTML, CSS et JavaScript.

## Fonctionnalités

- Température simulée
- Humidité simulée
- Luminosité simulée
- Détection de mouvement simulée
- Actualisation automatique toutes les 5 secondes
- API REST avec FastAPI

## Installation

Créer un environnement virtuel :

```bash
python -m venv .venv
```

Sous Windows PowerShell, l'activer :

```powershell
.\.venv\Scripts\Activate.ps1
```

Installer les dépendances :

```bash
python -m pip install -r requirements.txt
```

Lancer le serveur :

```bash
python -m uvicorn main:app --reload
```

Ouvrir le navigateur à l'adresse :

http://127.0.0.1:8000/

## Technologies

- Python
- FastAPI
- HTML
- CSS
- JavaScript

## État du projet

Version initiale avec des données simulées.
L'intégration de capteurs physiques est prévue
comme amélioration future.
