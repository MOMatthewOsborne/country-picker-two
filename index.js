const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
let input = "";
let randomCountryName = "";
const flag = document.getElementById("flag");
const results = document.getElementById("results");
const results2 = document.getElementById("results-2");
const buttonsContainer = document.getElementById("buttons");
console.log(alphabet);
printBtn = () => {
  for (let i = 0; i < alphabet.length; i++) {
    var btn = document.createElement("button");
    // var l = document.createTextNode(alphabet[i]);
    var l = alphabet[i];

    btn.innerText = l;
    btn.classList.add("button-57");
    buttonsContainer.appendChild(btn);
    // btn.addEventListener("click", () => {
    //   const input = l;
    //   console.log(input);
    // });
    (function (l) {
      // add an event listener to the button to handle clicks
      btn.addEventListener("click", () => {
        // retrieve the letter value from the clicked button
        let input = l.toUpperCase();
        console.log(input); // do whatever you want with the input
        makeApiCall(input);
        // recipeCall();
      });
    })(l);
  }
};
function makeApiCall(lett) {
  fetch("https://restcountries.com/v2/all")
    .then((response) => {
      // Check if the request was successful
      if (response.ok) {
        // Parse the JSON response into a list of objects
        return response.json();
      } else {
        throw new Error("Failed to retrieve data from the REST Countries API");
      }
    })
    .then((countries) => {
      // Filter the list to include only countries whose name starts with the letter "A"
      let letter = "A";
      const filteredCountries = countries.filter((country) =>
        country.name.startsWith(lett)
      );

      // Print the filtered list of countries
      filteredCountries.forEach((country) => {
        //   console.log(country.name, country.alpha2Code);
      });
      var randomCountry =
        filteredCountries[Math.floor(Math.random() * filteredCountries.length)];
      console.log(randomCountry.name);
      console.log(randomCountry.capital);
      let randomCountryName = randomCountry.name;
      console.log(randomCountryName);
      flag.innerHTML = `<img src = ${randomCountry.flag} > `;
      results.innerHTML = ` Your Country is ${randomCountry.name}. It is known locally as ${randomCountry.nativeName}.\n
      It is located in ${randomCountry.subregion}. The capital city of ${randomCountry.name} is ${randomCountry.capital}. `;
      results2.innerHTML = `${randomCountry.name} has a population of ${randomCountry.population} people. The currency is the ${randomCountry.currencies[0].name} (${randomCountry.currencies[0].symbol}). The main language is ${randomCountry.languages[0].name} `;
    })
    .catch((error) => {
      console.error(error);
    });
}

// function recipeCall() {
//   const APP_ID = "4cdf489b";
//   const APP_KEY = "d75a9d1345b14f9a00846fd507bc89bd";
//   let QUERY = randomCountryName;
//   const API_URL =
//     "https://api.edamam.com/api/recipes/v2?type=public&q=" +
//     QUERY +
//     "&app_id=" +
//     APP_ID +
//     "&app_key=" +
//     APP_KEY;
//   console.log(randomCountryName);
//   fetch(API_URL)
//     .then((response) => response.json())
//     .then((data) => {
//       // Use the retrieved data here
//       console.log(data);
//     })
//     .catch((error) => console.error(error));
// }
// recipeCall();

// makeApiCall();
