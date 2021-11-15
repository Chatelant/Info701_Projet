const {Server} = require("socket.io");

const io = new Server(3000, { /* options */});

let desamorceurs = [];
let informateurs = [];

function matchmaking(){
    if (desamorceurs.length !== 0 && informateurs.length !== 0){
        console.log("Il peut y avoir matchmaking");
    }else{
        console.log("En attente d'un autre utilisateur");
    }
}

io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("Ping", () => {
        console.log("Pong");
    });

    socket.on("MatchMaking", (data) =>{
        console.log(data.ip);
        console.log(data.role);
        // matchmaking();
    })

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});




