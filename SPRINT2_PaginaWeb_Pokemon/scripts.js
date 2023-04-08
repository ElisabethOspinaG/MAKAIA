let pokemons = [];

// guardamos toda la Url de la Api de pokemones en una constante llamada URL_API_POKEMON
const URL_API_POKEMON = "https://pokeapi.co/api/v2/pokemon/";
//console.log("esta en la informacion que me devueve la url", URL_API_POKEMON);

// capuramos las tag de nuesro Htm que vamos a reemplazar con la información de nuestra api


// construimos una funcion asincrona para guardar los datos que voy a utilizar de los pokemones
//modulo 2 
const getAllPokemonsApi = async (url) => {
    const  allInfoPokemons = [];
    try {
        const {data} = await axios.get(url); // desestructuracion del objeto 
        for (const pokemon of data.results){
            const urlPokemon = pokemon.url;
            const response = await axios.get(urlPokemon)
            const poke = {
                id: response.data.id,
                name: response.data.name,
                height:response.data.height,
                image: response.data.sprites.front_default,
                abilities: response.data.abilities.map(item=> item.ability.name)
            };
            allInfoPokemons;
        }

    } catch (error) {
        console.log(error);
        return[]
    }
};

document.addEventListener("DOMContentLoaded", async()=> {
    //ejecutar la funcion que nos obtiene los pokemones
    

});

