const fetchPokemon = () => {
    // toma variable del input
    const pokeName = document.getElementById("pokeName");
    // asigna valor del input
    let pokeInput = pokeName.value.toLowerCase();
    // obtiene el url con nombre de pokemon
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    console.log(url);
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("./img/download.jpg");
        } 
        else {
            return res.json();
        }        
    }).then((data) => {
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);
        let pokemonName = data.name;
        pokemonNameJs(pokemonName);
        let tipoPokemon = data.types[0].type.name;
        tipoPokemonJs(tipoPokemon);
        let hpPokemon = data.stats[0].base_stat;
        let attackPokemon = data.stats[1].base_stat; 
        let defensePokemon = data.stats[2].base_stat; 
        let specPokemon = data.stats[3].base_stat;
        let specdPokemon = data.stats[4].base_stat; 
        let speedPokemon = data.stats[5].base_stat;
        statsPokemonsJs(hpPokemon, attackPokemon, defensePokemon, specPokemon, specdPokemon, speedPokemon); 
    })
}

const statsPokemonsJs = (stat1, stat2, stat3, stat4, stat5, stat6) => {
    const hpPokemon = document.getElementById("hpPokemon");
    hpPokemon.value = stat1;
    const attackPokemon = document.getElementById("attackPokemon");
    attackPokemon.value = stat2;
    const defensePokemon = document.getElementById("defensePokemon");
    defensePokemon.value = stat3;
    const specPokemon = document.getElementById("specPokemon");
    specPokemon.value = stat4;
    const specdPokemon = document.getElementById("specdPokemon");
    specdPokemon.value = stat5;
    const speedPokemon = document.getElementById("speedPokemon");
    speedPokemon.value = stat6;
}

const tipoPokemonJs = (url) => {
    const tipoPokemon = document.getElementById("tipoPokemon");
    tipoPokemon.value = url;
} 

const pokemonNameJs = (url) => {
    const pokemonName = document.getElementById("pokemonName");
    pokemonName.innerText = url;
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const updateInfo = () => {
    fetchPokemon();
}