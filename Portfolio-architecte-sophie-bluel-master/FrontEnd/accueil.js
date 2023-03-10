//récupération de la liste des projets
const reponse = await fetch("http://localhost:5678/api/works");
const projets = await reponse.json();
//récupération de la liste des catégories
const reponseCategories = await fetch("http://localhost:5678/api/categories");
const categories = await reponseCategories.json();



//création d'une fonction pour générer la galerie
function genererGalerie(projets){
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
//création du filtre Tous
const filtreTous = document.createElement("button");
filtreTous.innerText="Tous";
filtreTous.addEventListener("click", function () { 
  document.querySelector(".gallery").innerHTML="";
  genererGalerie(projets);
});

const filtresCategories=document.querySelector(".filtres");
filtresCategories.appendChild(filtreTous);

//création des autres filtres via API
for(let i=0; i<categories.length; i++){
  const categorie=categories[i];
  console.log(categorie);
  //créer un bouton
  const boutonFiltre = document.createElement("button");
  boutonFiltre.innerText=categorie.name;
  filtresCategories.appendChild(boutonFiltre);
  //effet filtre
  //const filtre = document.querySelector(".filtre_objets");
  boutonFiltre.addEventListener("click", function () {
    const projetsFiltres =  projets.filter(function(projet) {
      return projet.categoryId == i+1;
    });
      document.querySelector(".gallery").innerHTML="";
      genererGalerie(projetsFiltres);
  });
}

