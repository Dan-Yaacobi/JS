const EnterText = document.querySelector("#pokemon_enter_text")
const submitButton = document.querySelector("#submit_button")
const pokemonImage = document.querySelector("#pokemon_image")
const pokemonNameError = document.querySelector("#pokemon_error")

submitButton.addEventListener("click", () => {
    let pokemonName = EnterText.value.trim().toLowerCase();
    if (pokemonName != ""){
        fetchPokemon(EnterText.value)
    }
})
async function fetchPokemon(name){
    EnterText.value = ""
    pokemonNameError.textContent = ""
    pokemonImage.src = ""
    if (name == "shmiki"){
        pokemonImage.style.width = "300px";
        pokemonImage.style.height = "300px";
        pokemonImage.src = "images/shmiki.jpg";
    }
  else{
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if (!response.ok){
        pokemonNameError.textContent = "Pokemon not Found"
        }
        else{
        const data = await response.json()
        pokemonImage.style.width = "";
        pokemonImage.style.height = "";
        pokemonImage.src = data.sprites.front_default
        }

    }
    catch(error){
        console.error("Error", error.message);
        pokemonNameError.textContent = "Pokemon not Found"
    }
  }

}
