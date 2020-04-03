function ifDemo() {
  let a = 2;
  let b = 3;
  if (a < b) {
    alert("Le minimum de " + a + " et " + b + " est " + a);
  } else if (a > b) {
    alert("Le minimum de " + a + " et " + b + " est " + b);
  } else {
    alert("Les deux valeurs sont égales");
  }
}

function forDemo() {
  let message = "";
  for (let i = 0; i < 10; i++) {
    message += i + "\n";
  }
  alert(message);
}
