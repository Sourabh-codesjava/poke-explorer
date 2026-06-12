const button = document.getElementById("search-btn");
const pokemonInput = document.getElementById("pokemon-input");

const pokemonNameEl = document.getElementById("pokemon-name");
const pokemonTypeEl = document.getElementById("pokemon-type");
const pokemonHeightEl = document.getElementById("pokemon-height");
const pokemonWeightEl = document.getElementById("pokemon-weight");
const pokemonImgEl = document.getElementById("pokemon-img");

button.addEventListener("click", async () => {
const pokemonName = pokemonInput.value.trim().toLowerCase();
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

            if(!response.ok){
                throw new Error("Pokemon not found");
            }

            const data = await response.json();

            pokemonNameEl.textContent = data.name;
            pokemonTypeEl.textContent = `Type: ${data.types[0].type.name}`;
            pokemonHeightEl.textContent = `Height: ${data.height}`;
            pokemonWeightEl.textContent = `Weight: ${data.weight}`;
            pokemonImgEl.src = data.sprites.front_default;

        } catch (error) {
            pokemonNameEl.textContent = "Pokemon not found";
            pokemonTypeEl.textContent = "";
            pokemonHeightEl.textContent = "";
            pokemonWeightEl.textContent = "";
            pokemonImgEl.src = "";

            console.error(error);
        }
});
