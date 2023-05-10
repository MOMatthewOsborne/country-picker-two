const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
let input = "";
console.log(alphabet);
printBtn = () => {
  for (let i = 0; i < alphabet.length; i++) {
    var btn = document.createElement("button");
    // var l = document.createTextNode(alphabet[i]);
    var l = alphabet[i];

    btn.innerText = l;
    btn.classList.add("alphabet-button");
    document.body.appendChild(btn);
    // btn.addEventListener("click", () => {
    //   const input = l;
    //   console.log(input);
    // });
    (function (l) {
      // add an event listener to the button to handle clicks
      btn.addEventListener("click", () => {
        // retrieve the letter value from the clicked button
        let input = l;
        console.log(input); // do whatever you want with the input
      });
    })(l);
  }
};
function makeApiCall() {
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
        country.name.startsWith(input)
      );

      // Print the filtered list of countries
      filteredCountries.forEach((country) => {
        //   console.log(country.name, country.alpha2Code);
      });
      var randomCountry =
        filteredCountries[Math.floor(Math.random() * filteredCountries.length)];
      console.log(randomCountry.name);
      console.log(randomCountry.capital);
    })
    .catch((error) => {
      console.error(error);
    });
}

makeApiCall();
// var buttons = document.querySelectorAll(".alphabet-button");

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     const input = event.target.innerText;
//     console.log(event.target.innerText);
//     console.log(input);
//   });
// });
// Make a request to the REST Countries API to retrieve information about all countries
