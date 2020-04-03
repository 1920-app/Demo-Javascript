function showErrorMessage() {
  let errorDiv = document.createElement("div");
  errorDiv.appendChild(document.createElement("p")
    .appendChild(document.createTextNode("Une erreur s'est produite lors du traitement du formulaire.")
    )
  );
  let formulaire = document.getElementById("form");
  formulaire.appendChild(errorDiv);
}

