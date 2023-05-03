const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
console.log(alphabet);
printBtn = () => {
  for (i = 0; i < alphabet.length; i++) {
    var btn = document.createElement("button");
    var l = document.createTextNode(alphabet[i]);

    btn.appendChild(l);

    document.body.appendChild(btn);
  }
};

// Make a request to the REST Countries API to retrieve information about all countries
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
    const letter = "A";
    const filteredCountries = countries.filter((country) =>
      country.name.startsWith(letter)
    );

    // Print the filtered list of countries
    filteredCountries.forEach((country) => {
      //   console.log(country.name, country.alpha2Code);
    });
    var randomCountry =
      filteredCountries[Math.floor(Math.random() * filteredCountries.length)];
    console.log(randomCountry.name);
  })
  .catch((error) => {
    console.error(error);
  });
