# Slime Dash

Slime Dash est un jeu développé dans le cadre d'un hackathon organisé pendant un cours. Nous avions **deux semaines** pour créer un jeu intégrant une **base de données**, avec comme principale contrainte qu'il devait être **exécutable dans un navigateur**.

## Technologies utilisées
- **PIXI.js** (moteur de rendu graphique)
- **JavaScript** (langage principal)
- **HTML/CSS** (interface utilisateur)
- **Node.js** (serveur backend)

---

## Sommaire
- [Installation et Lancement](#installation-et-lancement)
- [Routes de l'API](#routes-de-lapi)
  - [Top joueurs](#top-joueurs)
  - [Insertion d'un utilisateur](#insertion-dun-utilisateur)
  - [Liste des utilisateurs](#liste-des-utilisateurs)
- [Crédits](#credits)

---

## Installation et Lancement

### 1. Lancer le serveur frontend
Le frontend doit être exécuté avec un serveur local Python :
```bash
python -m http.server -d front
```

### 2. Lancer le serveur backend
Assurez-vous d'avoir **Node.js** installé, puis exécutez les commandes suivantes :
```bash
cd back
npm install
node server.js
```
Le serveur backend est maintenant accessible à l'adresse **`http://localhost:8080`**.

---

## Routes de l'API

### 📌 Top joueurs
- **URL** : `/top/users`
- **Méthode** : `GET`
- **Description** : Récupère les **5** meilleurs joueurs par défaut, ou un nombre défini via un paramètre.
- **Paramètre** : `?nbr=6` *(optionnel, définit le nombre de joueurs retournés)*
- **Réponse** :
  ```json
  [
    {
      "SPEED": 100,
      "TIME": 800,
      "PSEUDO": "Zaphir",
      "PIECE": 10
    },
    {
      "SPEED": 400,
      "TIME": 600,
      "PSEUDO": "USER9",
      "PIECE": 2
    }
  ]
  ```

### 📝 Insertion d'un utilisateur
- **URL** : `/insert/user`
- **Méthode** : `POST`
- **Description** : Ajoute un nouvel utilisateur à la base de données.
- **Corps de la requête** :
  ```json
  {
    "SPEED": 100,
    "TIME": 800,
    "PSEUDO": "Zaphir",
    "PIECE": 10
  }
  ```

### 📋 Liste des utilisateurs
- **URL** : `/list/users`
- **Méthode** : `GET`
- **Description** : Récupère la liste complète des utilisateurs enregistrés.
- **Réponse** :
  ```json
  [
    {
      "SPEED": 100,
      "TIME": 800,
      "PSEUDO": "Zaphir",
      "PIECE": 10
    },
    {
      "SPEED": 400,
      "TIME": 600,
      "PSEUDO": "USER9",
      "PIECE": 2
    }
  ]
  ```

---

## 📌 Remarques
- Assurez-vous que le serveur backend est bien démarré avant d'exécuter des requêtes.
- Le jeu utilise **PIXI.js** pour le rendu graphique, donc un navigateur récent est recommandé pour une meilleure expérience.

---

## 📜 Crédits
Ce projet a été réalisé par :
- **[Ianice](https://github.com/ianice-lng)**
- **[Anatole](https://github.com/Bat000l)**
- **[Angelo](https://github.com/atlas161)**


