let kundvagn = [];

document.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.getItem("kundvagn")) {
    kundvagn = JSON.parse(localStorage.getItem("kundvagn"));
  }
});

function totalPris() {
  let totalPriset = 0;
  kundvagn.forEach(vara => {
    totalPriset += vara.pris;
  })
  return totalPriset;
}

function växlaKundvagn() {
  var kundvagnVäxla = document.getElementById("kundvagn");
  var totalPriset = totalPris();
  kundvagnVäxla.classList.toggle("kundvagn-synlig");
  document.querySelector("#varor").innerHTML = ""
  kundvagn.forEach(vara => {
    document.querySelector("#varor").innerHTML += "<li>" + vara.vara + " - " + vara.pris + "kr</li>";
  })
  document.querySelector("#varor").innerHTML += "<li>Totalt: " + totalPriset + "kr</li>";
}

function addKundvagn(vara, pris) {
  kundvagn.push({vara: vara, pris: pris});
  document.querySelector("#varor").innerHTML += "<li>" + vara + " - " + pris + "kr</li>";
  localStorage.setItem("kundvagn", JSON.stringify(kundvagn));
  var totalPriset = totalPris();

  console.log(vara, pris);
}

function tömKundvagn() {
    document.querySelector('#varor').innerHTML = ""; 
    localStorage.removeItem("kundvagn");
    kundvagn = [];
    var totalPriset = totalPris();
}
