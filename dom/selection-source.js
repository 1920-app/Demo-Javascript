function selectionParId() {
  let bouton = document.getElementById("submit_button");
  if (bouton.innerHTML !== "Texte changé !") {
    bouton.innerHTML = "Texte changé !";
  } else { 
    bouton.innerHTML = "Autre texte changé !"; 
  }
}


function selectionParClasse() {
  // La méthode getElementsByClassName() permet de récupérer une sorte de tableau
  // Attention à la syntaxe : elementS <--- il y a un 's'
  let oddItems = document.getElementsByClassName("odd_items");
  
  // Une syntaxe un peu particulière pour parcourir les éléments
  // [].forEach.call(oddItems, item => item.style.color = (item.style.color != "red") ? "red" : "blue");
  // Une syntaxe équivalente :
  for (let i = 0; i < oddItems.length; i++) {
    oddItems.item(i).style.color = (oddItems.item(i).style.color != "red") ? "red" : "blue";
  }
}

function selectionParTag() {
  let boldWords = document.getElementsByTagName("b");
  [].forEach.call(boldWords, word => word.innerHTML = "<em> gras et italique</em>");
}

function selectionMixte() {
  let boldInParagraphs = document.getElementsByTagName("p");

  for (let i = 0; i < boldInParagraphs.length; i++) {
    let words = boldInParagraphs.item(i).getElementsByTagName("b");
    for (let j = 0; j < words.length; j++) {
      words.item(j).innerHTML = "<u>gras et souligné</u>";
    }
  }

  // Autre syntaxe utilisant forEach et les lambdas
  // [].forEach.call(boldInParagraphs, 
  //   item => [].forEach.call(item.getElementsByTagName("b"), 
  //     word => word.innerHTML = "<u>gras et souligné</u>")
  // );
}
