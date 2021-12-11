const { Server } = require("socket.io");

const io = new Server(3000, { /* options */ });

// Partie gestion de multiples parties avec plusieurs rooms
// let desamorceurs = [];
// let informateurs = [];
// let openIdRoom = 0;

let desamorceur;
let informateur;

io.on("connection", (socket) => {

    // Fonction de test
    socket.on("Ping", () => {
        console.log("Pong");
    });

    socket.on("rechercheJoueur", (data) => {
        console.log("Reception de rechercheJoueur");
        switch (data.role) {
            case "desamorceur":
                console.log("Socket " + data.id + " est desamorceur");
                desamorceur = data.id;
                break;
            case "informateur":
                informateur = data.id;
                console.log("Socket " + data.id + " est informateur");
                break;
            default:
                console.log("Socket : " + data.id + " -> role non reconnu");
        }
        debutPartie();
    })



    function debutPartie(){
        if(desamorceur != undefined && informateur != undefined){
            io.emit("debutPartie");
        }else{
            console.log("Il manque un joueur pour lancer la partie");
        }
    }



    // Gestion de salles 

    // Récupération des id de socket des joueurs en attente
    // socket.on("MatchMaking", (data) => {
    //     socket.join(openIdRoom);
    //     console.log(data.id);
    //     console.log(data.role);
    //     if (data.role == "desamorceur") {
    //         desamorceurs.push(data.id);
    //     } else {
    //         informateurs.push(data.id);
    //     }
    //     matchmaking();
    // })

    // Matchmaking des joueurs
    //     function matchmaking() {
    //         console.log("----------");
    //         console.log("desamorceurs : " + desamorceurs);
    //         console.log("informateurs : " + informateurs);
    //         console.log("----------");
    // 0
    //         if (desamorceurs.length != 0 && informateurs.length != 0) {
    //             console.log("Il peut y avoir matchmaking");
    //             let desamorceur = desamorceurs.shift();
    //             let informateur = informateurs.shift();
    //             io.to(desamorceur).emit('Matchmaking_recv', { roomId: openIdRoom.toString() });
    //             io.to(informateur).emit('Matchmaking_recv', { roomId: openIdRoom.toString() });
    //             openIdRoom = openIdRoom + 1;

    //         } else {
    //             console.log("En attente d'un autre utilisateur");
    //         }
    //     }

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});





