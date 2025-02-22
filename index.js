// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.
const countriesContainer = document.querySelector(".countries-container");
const inputRange = document.getElementById("inputRange");
const rangeValue = document.getElementById("rangeValue");
let numbercountrie = 24;
// console.log(countriesContainer);

let countries = [];
async function searchCountry() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data[0].name.common)
      countries = data;
    });
  console.log(countries[0].name.common);
}
// searchCountry();

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// ===========

inputRange.addEventListener("input", () => {
  rangeValue.textContent = inputRange.value;
  console.log(inputRange.value);
   searchCountry().then(() => countryDisplay());
});

//  ===============
const countryDisplay = () => {
  //  console.log(countries);

  countriesContainer.innerHTML = countries
    .filter((Country) => Country.name.common.includes(inputSearch.value))
    .sort((a, b) => {})
    .slice(0, inputRange.value)
    .map((countrie) => {
      // console.log(rangeValue.textContent);
      countries.length = rangeValue.textContent;
      console.log(countries.length);

      console.log(countrie);

      return `
        
        <div class="card">
        <img src="${countrie.flags.png}  " alt="Carte de ${countrie.name.common}">
         <h3>${countrie.name.common}</h3>
         <span> ${countrie.capital}</span><br>
         <em>Population: ${countrie.population}</em>
        </div>
        
        `;
    })
    .join("");
};
rangeValue.textContent = inputRange.value;
searchCountry().then(() => countryDisplay());

inputSearch.addEventListener("input", () => {
   searchCountry();
  countryDisplay();
});
minToMax.addEventListener("click", () => {
  countryDisplay();
});



// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
