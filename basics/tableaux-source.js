function tableauDemo() {
  let tableau = new Array(1, 2, "Bonjour", true);

  alert(tableau[0]);
  alert(tableau.length);
  
  let message = "for, avec indice : ";
  for (let i = 0; i < tableau.length; i++) {
    message += tableau[i] + " ";
  }
  alert(message);

  
  message = "forEach : ";
  tableau.forEach(element => message += element + " ");
  alert(message);


}

function dictionnaireDemo() {
  // Première solution pour la création d'un dictionnaire
  // On passe obligatoirement par la création d'un 'tableau' vide
  let dictionnaire = [];
  dictionnaire["id"] = 1;
  dictionnaire["first_name"] = "Stan";
  dictionnaire["last_name"] = "Marsh";

  alert("Bonjour " + dictionnaire["first_name"] + " " + dictionnaire["last_name"]);

  // On ajoute un élément à la clé "quotes"
  dictionnaire["quotes"] = new Array("Cartman, you're God damned stupid it's incredible",
    "You bastards!");

  let message = "";
  for (let cle in dictionnaire) {
    message += cle + ": " + dictionnaire[cle] + "\n";
  }
  alert(message);
}

function jsonDemo() {
  // Création d'un JSON Object
  // On note l'utilisation des { }
  let jsonObject = {
    id: 1,
    first_name: "Stan",
    last_name: "Marsh"
  };


  // Création d'un JSONArray contenant 4 objets JSON
  let jsonArray = [
    {
      id: 1,
      first_name: "Stan",
      last_name: "Marsh"
    },
    {
      id: 2,
      first_name: "Randy",
      last_name: "Marsh"
    },
    {
      id: 3,
      first_name: "Eric",
      last_name: "Cartman"
    },
    {
      id: 4,
      first_name: "Kyle",
      last_name: "Broflovski"
    }
  ];

  // On remarque la notation utilisant un . pour les attributs d'un objet JSON
  jsonArray.forEach(objet => alert(objet.id + " " + objet.first_name + " " + objet.last_name));

  alert(JSON.stringify(jsonObject));
}
