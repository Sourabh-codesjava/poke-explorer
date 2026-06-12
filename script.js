const button = document.getElementById("search-btn");
const pokemonInput = document.getElementById("pokemon-input");

button.addEventListener("click", () => {
    const pokemonName = pokemonInput.value;
    
    console.log(pokemonName);
});