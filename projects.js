/*
  LISTE DES PROJETS
  -----------------
  C'est le seul fichier à modifier pour gérer tes projets.
  Chaque projet est un bloc entre { accolades }, séparé du suivant par une virgule.

  Pour chaque projet :
    id          : identifiant court, sans espace ni accent (sert à l'adresse de la page)
    title       : titre affiché dans la liste et sur la page du projet
    cover       : image de couverture (affichée dans la liste)
    year        : année (facultatif, tu peux laisser "")
    category    : type de projet (facultatif, tu peux laisser "")
    description : texte de présentation. Pour sauter une ligne : \n
    images      : les visuels de la page du projet, dans l'ordre d'affichage.
                  Pour ajouter une légende : { src: "images/...", caption: "Ma légende" }

  ATTENTION : écris les noms de fichiers EXACTEMENT comme sur GitHub
  (majuscules, minuscules et extension : .png n'est pas .PNG).

  Pour ajouter un projet : copie un bloc complet et colle-le à la suite.
  Pour en retirer un : supprime son bloc complet.
  L'ordre ci-dessous est l'ordre d'affichage sur le site.
*/

const PROJECTS = [
  {
    id: "projet-01",
    title: "Titre du projet 1",
    cover: "images/projets/projet-01/cover.jpg",
    year: "2026",
    category: "Identité visuelle",
    description: "Présente ici le projet : le contexte, la demande du client, ta démarche.\n\nTu peux écrire plusieurs paragraphes.",
    images: [
      "images/projets/projet-01/01.jpg",
      "images/projets/projet-01/02.jpg",
      "images/projets/projet-01/03.jpg"
    ]
  },
  {
    id: "projet-02",
    title: "Titre du projet 2",
    cover: "images/projets/projet-02/cover.jpg",
    year: "2026",
    category: "Affiche",
    description: "Description du projet 2.",
    images: [
      "images/projets/projet-02/01.jpg",
      "images/projets/projet-02/02.jpg",
      "images/projets/projet-02/03.jpg"
    ]
  },
  {
    id: "projet-03",
    title: "Titre du projet 3",
    cover: "images/projets/projet-03/cover.jpg",
    year: "2025",
    category: "Édition",
    description: "Description du projet 3.",
    images: [
      "images/projets/projet-03/01.jpg",
      "images/projets/projet-03/02.jpg",
      "images/projets/projet-03/03.jpg"
    ]
  },
  {
    id: "projet-04",
    title: "Titre du projet 4",
    cover: "images/projets/projet-04/cover.jpg",
    year: "2025",
    category: "Packaging",
    description: "Description du projet 4.",
    images: [
      "images/projets/projet-04/01.jpg",
      "images/projets/projet-04/02.jpg",
      "images/projets/projet-04/03.jpg"
    ]
  },
  {
    id: "projet-05",
    title: "Titre du projet 5",
    cover: "images/projets/projet-05/cover.jpg",
    year: "2025",
    category: "Identité visuelle",
    description: "Description du projet 5.",
    images: [
      "images/projets/projet-05/01.jpg",
      "images/projets/projet-05/02.jpg",
      "images/projets/projet-05/03.jpg"
    ]
  },
  {
    id: "projet-06",
    title: "Titre du projet 6",
    cover: "images/projets/projet-06/cover.jpg",
    year: "2024",
    category: "Affiche",
    description: "Description du projet 6.",
    images: [
      "images/projets/projet-06/01.jpg",
      "images/projets/projet-06/02.jpg",
      "images/projets/projet-06/03.jpg"
    ]
  },
  {
    id: "projet-07",
    title: "Titre du projet 7",
    cover: "images/projets/projet-07/cover.jpg",
    year: "2024",
    category: "Édition",
    description: "Description du projet 7.",
    images: [
      "images/projets/projet-07/01.jpg",
      "images/projets/projet-07/02.jpg",
      "images/projets/projet-07/03.jpg"
    ]
  },
  {
    id: "projet-08",
    title: "Titre du projet 8",
    cover: "images/projets/projet-08/cover.jpg",
    year: "2024",
    category: "Signalétique",
    description: "Description du projet 8.",
    images: [
      "images/projets/projet-08/01.jpg",
      "images/projets/projet-08/02.jpg",
      "images/projets/projet-08/03.jpg"
    ]
  },
  {
    id: "projet-09",
    title: "Titre du projet 9",
    cover: "images/projets/projet-09/cover.jpg",
    year: "2023",
    category: "Identité visuelle",
    description: "Description du projet 9.",
    images: [
      "images/projets/projet-09/01.jpg",
      "images/projets/projet-09/02.jpg",
      "images/projets/projet-09/03.jpg"
    ]
  },
  {
    id: "projet-10",
    title: "Titre du projet 10",
    cover: "images/projets/projet-10/cover.jpg",
    year: "2023",
    category: "Affiche",
    description: "Description du projet 10.",
    images: [
      "images/projets/projet-10/01.jpg",
      "images/projets/projet-10/02.jpg",
      "images/projets/projet-10/03.jpg"
    ]
  }
];
