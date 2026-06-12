const button = document.getElementById("search-btn");
const pokemonInput = document.getElementById("pokemon-input");

button.addEventListener("click", async () => {
const pokemonName = pokemonInput.value.trim().toLowerCase();

const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
);

const data = await response.json();

console.log("Name:", data.name);
console.log("Height:", data.height);
console.log("Weight:", data.weight);
console.log("Image:", data.sprites.front_default);
console.log("Type:", data.types[0].type.name);
});