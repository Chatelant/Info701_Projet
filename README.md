- [Info701_Projet](#info701_projet)
- [1. Choix technologiques](#1-choix-technologiques)
- [2. Architecture](#2-architecture)
- [3. Fonctionnement de l'app](#3-fonctionnement-de-lapp)
- [4. Installation](#4-installation)
- [5. Diffucultés rencontrées](#5-diffucultés-rencontrées)

# Info701_Projet

Preuve de concept du jeu Keep Talking And Nobody Explode.
Le joueur ayant le role informateur devra apporter les informations nécéssaires au désamorçage de la bombe.
Le joueur ayant le role désamorceur devra décrire les modules à l'informateur et suivre ses directives pour désamorcer la bombe.

# 1. Choix technologiques
 Utilisation de react-native accompagné d'un serveur Node.js.
 Communication entre react-native et le serveur via socket.io
 
# 2. Architecture
- Dossiers 

    ![Alt text](diagrammes/diagramme_archi.png?raw=true "Diagramme architecture")
  

# 3. Fonctionnement de l'app 

# 4. Installation

Cloner le repo

 - Coté serveur
    Lancer le serveur : 
        Positionnez vous dans le dossier Server
        commande : node .\index.js
    
- Coté application : 
    Mettre à jours Connection.tsx :
        Ouvrez Connection.tsx
        Remplacez l'adresse ip de la création de socket par l'adresse ip de votre serveur. (ligne 21)
    Lancer avec expo :
        expo start

# 5. Diffucultés rencontrées

Ajout du vocal (socket + Voice , webRTC, ...)
Construire un affichage satisfaisant
