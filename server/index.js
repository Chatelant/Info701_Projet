const { Server } = require("socket.io");

const io = new Server(3000, { /* options */ });

let desamorceurs = [];
let informateurs = [];
let openIdRoom = 0;



io.on("connection", (socket) => {

    // Fonction de test
    socket.on("Ping", () => {
        console.log("Pong");
    });

    // Récupération des id de socket des joueurs en attente
    socket.on("MatchMaking", (data) => {
        socket.join(openIdRoom);
        console.log(data.id);
        console.log(data.role);
        if (data.role == "desamorceur") {
            desamorceurs.push(data.id);
        } else {
            informateurs.push(data.id);
        }
        matchmaking();
    })

    // Matchmaking des joueurs
    function matchmaking() {
        console.log("----------");
        console.log("desamorceurs : " + desamorceurs);
        console.log("informateurs : " + informateurs);
        console.log("----------");

        if (desamorceurs.length != 0 && informateurs.length != 0) {
            console.log("Il peut y avoir matchmaking");
            let desamorceur = desamorceurs.shift();
            let informateur = informateurs.shift();
            socket.to(desamorceur).emit('Matchmaking_recv', { roomId: openIdRoom });
            socket.to(informateur).emit('Matchmaking_recv', { roomId: openIdRoom });
            openIdRoom = openIdRoom + 1;

        } else {
            console.log("En attente d'un autre utilisateur");
        }
    }

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});




