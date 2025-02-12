const express = require('express');
const insertUser = require('./routes/InsertUser');
const listUser = require('./routes/listUser');
const topUserTime = require('./routes/topUserTime');
const topUserPiece = require('./routes/topUserPiece');
const searchUser = require('./routes/searchUser');
const removePiece = require('./routes/removePiece');
const cors = require('cors');
const app = express();

//A INSTALLER POUR EVITER QU'ON PUISSE ACCEDER A L'API DEPUIS UNE PAGE AUTRE QUE CELUI DE L'APPLICATION
app.use(cors({
    origin: '*', // Autorise uniquement cette origine
    credentials: true, // Permet d'envoyer les cookies avec les requêtes
}));
app.use(express.json())
//Initialisation des routes
app.use(insertUser);
app.use(listUser);
app.use(topUserTime);
app.use(searchUser);
app.use(topUserPiece);
app.use(removePiece);


//Lancement du serveur
const PORT = 3265;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
