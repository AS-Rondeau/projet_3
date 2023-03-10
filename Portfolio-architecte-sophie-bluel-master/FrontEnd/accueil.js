//récupération de la liste des projets
const reponse = await fetch("http://localhost:5678/api/works");
const projets = await reponse.json();


/* //création de la galerie
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
}  */

//création d'une fonction pour générer la galerie
const genererGalerie = (projets)=>{
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
} 

//création de la galerie originale
genererGalerie(projets);


//gestion des filtres
const filtreTous = document.querySelector(".filtre_tous");
filtreTous.addEventListener("click", function () { 
  document.querySelector(".gallery").innerHTML="";
  genererGalerie(projets);
});


const filtreObjet = document.querySelector(".filtre_objets");
filtreObjet.addEventListener("click", function () {
  const projetsObjet =  projets.filter(function(projet) {
    return projet.categoryId == 1;
  });
    document.querySelector(".gallery").innerHTML="";
    genererGalerie(projetsObjet);
});

const filtreAppartement = document.querySelector(".filtre_appart");
filtreAppartement.addEventListener("click", function () {
  const projetsAppart =  projets.filter(function(projet) {
    return projet.categoryId == 2;
  })
  document.querySelector(".gallery").innerHTML="";
  genererGalerie(projetsAppart);
});

const filtreHotelResto = document.querySelector(".filtre_hotelresto");
filtreHotelResto.addEventListener("click", function () {
  const projetsHotelResto =  projets.filter(function(projet) {
    return projet.categoryId == 3;
  })
    document.querySelector(".gallery").innerHTML="";
    genererGalerie(projetsHotelResto);
}); 

