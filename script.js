
let kundvagn = JSON.parse(localStorage.getItem("kundvagn")) || [];
console.log(kundvagn)

document.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.getItem("kundvagn")) {
    kundvagn = JSON.parse(localStorage.getItem("kundvagn"));
  }
});

function växlaKundvagn() {
  var kundvagnVäxla = document.getElementById("kundvagn");
  kundvagnVäxla.classList.toggle("kundvagn-synlig");
}

function addKundvagn(vara, pris) {
  kundvagn.push({vara: vara, pris: pris});
  localStorage.setItem("kundvagn", JSON.stringify(kundvagn));
  console.log(vara, pris);
}

function totalPris() {
  let totalPris = 0;
  kundvagn.forEach(pris => {
    totalPris += pris;
  }
  )
  return totalPris;
}

console.log(totalPris)
