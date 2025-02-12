# Slime Dash

## Sommaire
- [Split](#split)
- [Sommaire](#sommaire)
- [Routes](#routes)
    - [Top](#top)
    - [Insert User](#insert-user)
    - [List Users](#list-users)

---

# Routes

### URL locale : `http://localhost:3265`

## Top
- **URL** : `/top/users`
- **Méthode** : `GET`
- **Description** : Récupère les 5 utilisateurs avec le meilleur temps.
- **Paramètre** : `?nbr=6` (optionnel)
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
    },
    ...
  ]

## Insert User
- **URL** : `/insert/user`
- **Méthode** : `POST`
- **Description** : Ajoute un utilisateur.
- **Paramètre** :
  ```json
  {
    "SPEED": INT,
    "TIME": INT,
    "PSEUDO": STRING,
    "PIECE": INT
  }
  ```

## List Users
- **URL** : `/list/users`
- **Méthode** : `GET`
- **Description** : Récupère la liste des utilisateurs.
- **Paramètre** : aucun
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
