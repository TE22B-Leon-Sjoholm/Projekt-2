
let kundvagn = JSON.parse(localStorage.getItem("kundvagn")) || [];
console.log(kundvagn)

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
}

function addKundvagn(vara, pris) {
  kundvagn.push({vara: vara, pris: pris});
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


