function checkForm() {
  let username = document.forms["registration"]["username"].value;
  let password = document.forms["registration"]["password"].value;
  let confirm_password = document.forms["registration"]["confirm_password"].value;
  checkUsername(username);
  checkPassword(password, confirm_password);
  if (checkUsername(username) && checkPassword(password, confirm_password)) {
    alert("Success");
  } else {
    alert("Error");
  }
}

function checkUsername(username) {
  // On teste si username est une chaîne de caractère vide
  // Le symbole !== est l'opposé de ===
  return username.trim() !== "";
}

function checkPassword(password, confirm_password) {
  if (password != confirm_password) return false;
  if (password.length < 8) return false;
  // On pourrait ensuite implémenter des tests plus complexes
  return true;
}
