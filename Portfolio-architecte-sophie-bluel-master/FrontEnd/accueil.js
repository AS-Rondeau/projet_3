//récupération de la liste des projets
const reponse = await fetch("http://localhost:5678/api/works");
const projets = await reponse.json();


//création et modification de la galerie
for (let i = 0; i < projets.length; i++) {

  const projet = projets[i];

  const ficheProjet = document.createElement("article");

  const imageProjet = document.createElement("img");
  imageProjet.src = projet.imageUrl;
  const nomProjet = document.createElement("p");
  nomProjet.innerText = projet.title;

  ficheProjet.appendChild(imageProjet);
  ficheProjet.appendChild(nomProjet);

  const galerie = document.querySelector(".gallery");
  galerie.appendChild(ficheProjet);
}


 //gestion des filtres
/* const filtreTous = document.querySelector(".filtre_tous");
filtreTous.addEventListener("click", function () { 
  console.log(projets);
  });


const filtreObjets = document.querySelector(".filtre_objets");
filtreObjets.addEventListener("click", function () {
  const projetsFiltres = projet.filter(function (galerie) {
    return projet.name == "Objets";
  });
  console.log(projetsFiltres)
});

const filtreAppartements = document.querySelector(".filtre_appart");
filtreAppartements.addEventListener("click", function () {
  const projetsFiltres = projet.filter(function (galerie) {
    return projet.name == "Appartements";
  });
  console.log(projetsFiltres)
});

const filtreHotelsResto = document.querySelector(".filtre_hotelresto");
filtreHotelsResto.addEventListener("click", function () {
  const projetsFiltres = projet.filter(function (galerie) {
    return projet.name == "Hotels & restaurants";
  });
  console.log(projetsFiltres)
}); */

function filtreProjets(value) {
  //Button class code
  let filtres = document.querySelectorAll(".filtre");
  filtres.forEach((button) => {
    if (value == button.innerText) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}