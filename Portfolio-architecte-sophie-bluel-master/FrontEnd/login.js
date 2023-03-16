const formulaire = document.getElementById("formulaire_connexion");

const boutonConnexion=document.getElementById("bouton_connexion");

const affichageFiltres=document.querySelector(".filtres");
const logout=document.getElementById("demande_logout");
const login=document.getElementById("demande_login");
const edition=document.querySelector(".mode_edition");

const messageErreur = document.querySelector(".erreur");

const emailEntre = formulaire.identifiant.value;
const motDePasseEntre = formulaire.motdepasse.value;

console.log(emailEntre);
console.log(motDePasseEntre);

async function verificationConnexion (){
    let utilisateur = {
        "email": emailEntre,
        "password": motDePasseEntre
    };
    console.log(utilisateur);
    let response = await fetch("http://localhost:5678/api/users/login", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(utilisateur)
    });
    console.log(response.ok);
    let result = await response.json();

    if(response.ok==true){
        //aller sur la page d'accueil
        document.location.replace("index.html");
        //apparition de boutons d'action pour éditer le site + en-tête fond noir
        edition.style.display=block;
        //disparition des filtres
        affichageFiltres.style.display=none;
        //login devient logout dans header
        login.style.display=none;
        logout.style.display=block;
    } else {
        //affichage du message d'erreur : constante "messageErreur"
        messageErreur.style.display = block;
    }
}

boutonConnexion.addEventListener("click", verificationConnexion);

