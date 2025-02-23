// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.
const countriesContainer = document.querySelector(".countries-container");
const inputRange = document.getElementById("inputRange");
const rangeValue = document.getElementById("rangeValue");
const btnSort = document.querySelectorAll(".btnSort");
let numbercountrie = 24;
// console.log(countriesContainer);

let countries = [];

async function searchCountry() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((resp) => resp.json())
    .then((data) => {
        countries = data;
    });
  console.log(countries);
  countryDisplay();
}

const countryDisplay = (para) => {
  //  console.log(countries);

  countriesContainer.innerHTML = countries
    .filter((Country) =>
      Country.translations.fra.common
        .toUpperCase()
        .includes(inputSearch.value.toUpperCase())
    )
    .sort((a, b) => {
      if (para === "minToMax") {
        return a.population - b.population;
      } else if (para === "maxToMin") {
        return b.population - a.population;
      } else if (para === "alpha") {
        return a.translations.fra.common.localeCompare(
          b.translations.fra.common);
      }
    })
    .slice(0, inputRange.value)
    .map((countrie) => {
      return `
        
        <div class="card">
        <img src="${countrie.flags.svg}" alt="Carte de ${countrie.name.common}">
         <h3>${countrie.translations.fra.common}</h3>
         <span>Capitale: ${countrie.capital}</span><br>
         <em>Population: ${countrie.population.toLocaleString()}</em>
        </div>
        
        `;
    })
    .join("");
};
// rangeValue.textContent = inputRange.value;
// searchCountry().then(() => countryDisplay());

// ===========

inputRange.addEventListener("input", () => {
  rangeValue.textContent = inputRange.value;
   // searchCountry().then(() => countryDisplay());
  countryDisplay();
});

//  ===============
window.addEventListener("load", searchCountry);
inputSearch.addEventListener("input", () => {
  // searchCountry();
  countryDisplay();
});

btnSort.forEach((btn) => btn.addEventListener("click", (e) => {
  console.log(e.target.id);
   countryDisplay(e.target.id);
}));
//================= l'evelnement "btnSort "" peut se faire de trois maniere: minToMax.addEventListener,maxToMin.addEventListener et alpha.addEventListener
// minToMax.addEventListener("click", (e) => {
//   // console.log(e.target.id);
//   countryDisplay(e.target.id);
// });
// maxToMin.addEventListener("click", (e) => {
//   // console.log(e.target.id);
//   countryDisplay(e.target.id);
// });
// alpha.addEventListener("click", (e) => {
//   // console.log(e.target.id);
//   countryDisplay(e.target.id);
// });
// =========================================

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
