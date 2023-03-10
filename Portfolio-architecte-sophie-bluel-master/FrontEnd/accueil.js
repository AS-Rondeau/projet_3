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
const filtreTous = document.querySelector(".filtre_tous");
filtreTous.addEventListener("click", function () { 
  const projetTous =  projets.filter(function(projet) {
    return projet.categoryId == 1||2||3;})
    console.log(projetTous);
  });


const filtreObjets = document.querySelector(".filtre_objets");
filtreObjets.addEventListener("click", function () {
  const projetObjets =  projets.filter(function(projet) {
    return projet.categoryId == 1;})
    console.log(projetObjets);
});

const filtreAppartements = document.querySelector(".filtre_appart");
filtreAppartements.addEventListener("click", function () {
  const projetApparts =  projets.filter(function(projet) {
    return projet.categoryId == 2;})
    console.log(projetApparts);
});

const filtreHotelsResto = document.querySelector(".filtre_hotelresto");
filtreHotelsResto.addEventListener("click", function () {
  const projetHotelResto =  projets.filter(function(projet) {
    return projet.categoryId == 3;})
    console.log(projetHotelResto);
});

