//récupération de la liste des identifiants
const reponse = await fetch("http://localhost:5678/api/users/login");
const identifiants = await reponse.json();

const messageErreur = document.getElementByClass("erreur");
const formulaire = document.getElementById("formulaireConnexion");
const boutonConnexion=document.getElementById("connexion");

boutonConnexion.addEventListener("click", verificationconnexion());
const verificationConnexion = (identifiant)=>{
    const emailEntre = formulaire.identifiant.value;
    const motDePasseEntre = formulaire.motdepasse.value;

    for(let i = 0; i < identifiants.length; i++) {
        const identifiant = identifiants[i];
        const emailUtilisateur=identifiant.email;
        const motDePasseUtilisateur=identifiant.password;
        
        if (emailEntre === "emailUtilisateur" && motDePasseEntre === "motDePasseUtilisateur") {
            //aller sur la page d'accueil
            document.location.replace("index.html");
            //apparition de boutons d'action pour éditer le site + en-tête fond noir

        } else {
            //affichage du message d'erreur : constante "messageErreur"
            messageErreur.style.display = block;
        }
    }
}