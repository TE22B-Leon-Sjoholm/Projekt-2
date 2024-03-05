
let kundvagn = [];

document.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.getItem("kundvagn")) {
    kundvagn = JSON.parse(localStorage.getItem("kundvagn"));
  }
  var totalPriset = totalPris();
  console.log(totalPriset);

});

function växlaKundvagn() {
  var kundvagnVäxla = document.getElementById("kundvagn");
  kundvagnVäxla.classList.toggle("kundvagn-synlig");
  document.querySelector("#varor").innerHTML = ""
  kundvagn.forEach(vara => {
    document.querySelector("#varor").innerHTML += "<li>" + vara.vara + " - " + vara.pris + "kr</li>";
  })
}

function addKundvagn(vara, pris) {
  console.log(kundvagn)
  kundvagn.push({vara: vara, pris: pris});
  document.querySelector("#varor").innerHTML += "<li>" + vara + " - " + pris + "kr</li>";
  localStorage.setItem("kundvagn", JSON.stringify(kundvagn));
  console.log(vara, pris);
}

function totalPris() {
  let totalPriset = 0;
  kundvagn.forEach(vara => {
    totalPriset += vara.pris;
  }
  )
  return totalPriset;
}


