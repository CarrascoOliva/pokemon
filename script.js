// Función para generar el HTML de un Pokémon
function generatePokemonCard(pokemon) {
    let cardDiv = document.createElement("div");
    // Le asignamos las clases que le dan el estilo
    cardDiv.className = "card col-12 col-md-6 col-lg-4 col-xl-3";

    // Creamos un elemento img que mostrará la imagen del Pokémon
    let img = document.createElement("img");
    // Le asignamos el atributo src con la url de la imagen
    img.src = pokemon.image_url;
    // Le asignamos las clases que le dan el estilo
    img.className = "card-img-top p-4";
    // Le asignamos el atributo alt con el nombre del Pokémon
    img.alt = pokemon.name;

    // Creamos un elemento div que será el cuerpo de la tarjeta
    let cardBody = document.createElement("div");
    // Le asignamos la clase que le da el estilo
    cardBody.className = "card-body";

    // Creamos un elemento h5 que mostrará el nombre del Pokémon
    let name = document.createElement("h5");
    // Le asignamos el contenido con el nombre
    name.textContent = pokemon.name;
    // Le asignamos la clase que le da el estilo
    name.className = "card-title";

    // Creamos un elemento p que mostrará el número del Pokémon
    let number = document.createElement("p");
    // Le asignamos el contenido con el número
    number.textContent = "#" + pokemon.number;
    // Le asignamos la clase que le da el estilo
    number.className = "card-text";

    // Añadimos los elementos h5 y p al elemento div del cuerpo
    cardBody.appendChild(name);
    cardBody.appendChild(number);

// Recorremos el array de tipos del Pokémon
pokemon.type.forEach(type => {
    let a = document.createElement("a");
    a.textContent = type;
    a.href = "#";
    
    switch (type) {
        case "Grass":
            a.className = "btn btn-primary";
            break;
        case "Poison":
            a.className = "btn btn-dark";
            break;
        case "Fire":
            a.className = "btn btn-danger";
            break;
        case "Water":
            a.className = "btn btn-info";
            break;
        case "Bug":
            a.className = "btn btn-success";
            break;
        case "Flying":
            a.className = "btn btn-secondary";
            break;
        case "Electric":
            a.className = "btn btn-electric";
            break;
        case "Ground":
            a.className = "btn btn-ground";
            break;
        case "Rock":
            a.className = "btn btn-rock";
            break;
        case "Ice":
            a.className = "btn btn-ice";
            break;
        case "Psychic":
            a.className = "btn btn-psychic";
            break;
        case "Dragon":
            a.className = "btn btn-dragon";
            break;
        case "Dark":
            a.className = "btn btn-dark";
            break;
        case "Steel":
            a.className = "btn btn-steel";
            break;
        case "Fairy":
            a.className = "btn btn-fairy";
            break;
        case "Ghost":
            a.className = "btn btn-ghost";
            break;
        case "Fighting":
            a.className = "btn btn-fighting";
            break;
        case "Normal":
            a.className = "btn btn-normal";
            break;
    }
    // Añadimos el elemento a al elemento div del cuerpo
    cardBody.appendChild(a);
});



    // Añadimos los elementos img y div al elemento div de la tarjeta
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);

    // Devolvemos el elemento div como resultado de la función
    return cardDiv;
}


// Obtén el contenedor de la lista de Pokémon
var pokemonListContainer = document.getElementById("pokemon-wrapper");

// Genera las tarjetas de Pokémon y añádelas al contenedor
getPokemonData().pokemons.forEach(pokemon => {
    var pokemonCard = generatePokemonCard(pokemon);
    pokemonListContainer.appendChild(pokemonCard);
});

function getPokemonData() {
    // Ejemplo de un JSON con datos de Pokémon
    var pokemonData = {
        "pokemons": [
            {
                "name": "Bulbasaur",
                "type": [
                    "Grass",
                    "Poison"
                ],
                "number": "001",
                "image_url": "https://img.pokemondb.net/artwork/bulbasaur.jpg"
            },
            {
                "name": "Ivysaur",
                "type": [
                    "Grass",
                    "Poison"
                ],
                "number": "002",
                "image_url": "https://img.pokemondb.net/artwork/ivysaur.jpg"
            },
            {
                "name": "Venusaur",
                "type": [
                    "Grass",
                    "Poison"
                ],
                "number": "003",
                "image_url": "https://img.pokemondb.net/artwork/venusaur.jpg"
            },
            {
                "name": "Charmander",
                "type": [
                    "Fire"
                ],
                "number": "004",
                "image_url": "https://img.pokemondb.net/artwork/charmander.jpg"
            },
            {
                "name": "Charmeleon",
                "type": [
                    "Fire"
                ],
                "number": "005",
                "image_url": "https://img.pokemondb.net/artwork/charmeleon.jpg"
            },
            {
                "name": "Charizard",
                "type": [
                    "Fire",
                    "Flying"
                ],
                "number": "006",
                "image_url": "https://img.pokemondb.net/artwork/charizard.jpg"
            },
            {
                "name": "Squirtle",
                "type": [
                    "Water"
                ],
                "number": "007",
                "image_url": "https://img.pokemondb.net/artwork/squirtle.jpg"
            },
            {
                "name": "Wartortle",
                "type": [
                    "Water"
                ],
                "number": "008",
                "image_url": "https://img.pokemondb.net/artwork/wartortle.jpg"
            },
            {
                "name": "Blastoise",
                "type": [
                    "Water"
                ],
                "number": "009",
                "image_url": "https://img.pokemondb.net/artwork/blastoise.jpg"
            },
            {
                "name": "Caterpie",
                "type": [
                    "Bug"
                ],
                "number": "010",
                "image_url": "https://img.pokemondb.net/artwork/caterpie.jpg"
            },
            {
                "name": "Metapod",
                "type": [
                    "Bug"
                ],
                "number": "011",
                "image_url": "https://img.pokemondb.net/artwork/metapod.jpg"
            },
            {
                "name": "Butterfree",
                "type": [
                    "Bug",
                    "Flying"
                ],
                "number": "012",
                "image_url": "https://img.pokemondb.net/artwork/butterfree.jpg"
            },
            {
                "name": "Weedle",
                "type": [
                    "Bug",
                    "Poison"
                ],
                "number": "013",
                "image_url": "https://img.pokemondb.net/artwork/weedle.jpg"
            },
            {
                "name": "Kakuna",
                "type": [
                    "Bug",
                    "Poison"
                ],
                "number": "014",
                "image_url": "https://img.pokemondb.net/artwork/kakuna.jpg"
            },
            {
                "name": "Beedrill",
                "type": [
                    "Bug",
                    "Poison"
                ],
                "number": "015",
                "image_url": "https://img.pokemondb.net/artwork/beedrill.jpg"
            },
            {
                "name": "Pidgey",
                "type": [
                    "Normal",
                    "Flying"
                ],
                "number": "016",
                "image_url": "https://img.pokemondb.net/artwork/pidgey.jpg"
            },
            {
                "name": "Pidgeotto",
                "type": [
                    "Normal",
                    "Flying"
                ],
                "number": "017",
                "image_url": "https://img.pokemondb.net/artwork/pidgeotto.jpg"
            },
            {
                "name": "Pidgeot",
                "type": [
                    "Normal",
                    "Flying"
                ],
                "number": "018",
                "image_url": "https://img.pokemondb.net/artwork/pidgeot.jpg"
            },
            {
                "name": "Rattata",
                "type": [
                    "Normal"
                ],
                "number": "019",
                "image_url": "https://img.pokemondb.net/artwork/rattata.jpg"
            },
            {
                "name": "Raticate",
                "type": [
                    "Normal"
                ],
                "number": "020",
                "image_url": "https://img.pokemondb.net/artwork/raticate.jpg"
            },
            {
                "name": "Spearow",
                "type": [
                    "Normal",
                    "Flying"
                ],
                "number": "021",
                "image_url": "https://img.pokemondb.net/artwork/spearow.jpg"
            },
            {
                "name": "Fearow",
                "type": [
                    "Normal",
                    "Flying"
                ],
                "number": "022",
                "image_url": "https://img.pokemondb.net/artwork/fearow.jpg"
            },
            {
                "name": "Ekans",
                "type": [
                    "Poison"
                ],
                "number": "023",
                "image_url": "https://img.pokemondb.net/artwork/ekans.jpg"
            },
            {
                "name": "Arbok",
                "type": [
                    "Poison"
                ],
                "number": "024",
                "image_url": "https://img.pokemondb.net/artwork/arbok.jpg"
            },
            {
                "name": "Pikachu",
                "type": [
                    "Electric"
                ],
                "number": "025",
                "image_url": "https://img.pokemondb.net/artwork/pikachu.jpg"
            },
            {
                "name": "Raichu",
                "type": [
                    "Electric"
                ],
                "number": "026",
                "image_url": "https://img.pokemondb.net/artwork/raichu.jpg"
            },
            {
                "name": "Sandshrew",
                "type": [
                    "Ground"
                ],
                "number": "027",
                "image_url": "https://img.pokemondb.net/artwork/sandshrew.jpg"
            },
            {
                "name": "Sandslash",
                "type": [
                    "Ground"
                ],
                "number": "028",
                "image_url": "https://img.pokemondb.net/artwork/sandslash.jpg"
            },
            {
                "name": "Nidoran♀",
                "type": [
                    "Poison"
                ],
                "number": "029",
                "image_url": "https://img.pokemondb.net/artwork/nidoran-f.jpg"
            },
            {
                "name": "Nidorina",
                "type": [
                    "Poison"
                ],
                "number": "030",
                "image_url": "https://img.pokemondb.net/artwork/nidorina.jpg"
            },
            {
                "name": "Nidoqueen",
                "type": [
                    "Poison",
                    "Ground"
                ],
                "number": "031",
                "image_url": "https://img.pokemondb.net/artwork/nidoqueen.jpg"
            },
            {
                "name": "Nidoran♂",
                "type": [
                    "Poison"
                ],
                "number": "032",
                "image_url": "https://img.pokemondb.net/artwork/nidoran-m.jpg"
            },
            {
                "name": "Nidorino",
                "type": [
                    "Poison"
                ],
                "number": "033",
                "image_url": "https://img.pokemondb.net/artwork/nidorino.jpg"
            },
            {
                "name": "Nidoking",
                "type": [
                    "Poison",
                    "Ground"
                ],
                "number": "034",
                "image_url": "https://img.pokemondb.net/artwork/nidoking.jpg"
            },
            {
                "name": "Clefairy",
                "type": [
                    "Fairy"
                ],
                "number": "035",
                "image_url": "https://img.pokemondb.net/artwork/clefairy.jpg"
            },
            {
                "name": "Clefable",
                "type": [
                    "Fairy"
                ],
                "number": "036",
                "image_url": "https://img.pokemondb.net/artwork/clefable.jpg"
            },
            {
                "name": "Vulpix",
                "type": [
                    "Fire"
                ],
                "number": "037",
                "image_url": "https://img.pokemondb.net/artwork/vulpix.jpg"
            },
            {
                "name": "Ninetales",
                "type": [
                    "Fire"
                ],
                "number": "038",
                "image_url": "https://img.pokemondb.net/artwork/ninetales.jpg"
            },
            {
                "name": "Jigglypuff",
                "type": [
                    "Normal",
                    "Fairy"
                ],
                "number": "039",
                "image_url": "https://img.pokemondb.net/artwork/jigglypuff.jpg"
            },
            {
                "name": "Wigglytuff",
                "type": [
                    "Normal",
                    "Fairy"
                ],
                "number": "040",
                "image_url": "https://img.pokemondb.net/artwork/wigglytuff.jpg"
            },
            {
                "name": "Zubat",
                "type": [
                    "Poison",
                    "Flying"
                ],
                "number": "041",
                "image_url": "https://img.pokemondb.net/artwork/zubat.jpg"
            },
            {
                "name": "Golbat",
                "type": [
                    "Poison",
                    "Flying"
                ],
                "number": "042",
                "image_url": "https://img.pokemondb.net/artwork/golbat.jpg"
            },
            {
                "name": "Oddish",
                "type": [
                    "Grass",
                    "Poison"
                ],
                "number": "043",
                "image_url": "https://img.pokemondb.net/artwork/oddish.jpg"
            },
            {
                "name": "Gloom",
                "type": [
                    "Grass",
                    "Poison"
                ],
                "number": "044",
                "image_url": "https://img.pokemondb.net/artwork/gloom.jpg"
            },
            {
                "name": "Vileplume",
                "type": [
                    "Grass",
                    "Poison"
                ],
                "number": "045",
                "image_url": "https://img.pokemondb.net/artwork/vileplume.jpg"
            },
            {
                "name": "Paras",
                "type": [
                    "Bug",
                    "Grass"
                ],
                "number": "046",
                "image_url": "https://img.pokemondb.net/artwork/paras.jpg"
            },
            {
                "name": "Parasect",
                "type": [
                    "Bug",
                    "Grass"
                ],
                "number": "047",
                "image_url": "https://img.pokemondb.net/artwork/parasect.jpg"
            },
            {
                "name": "Venonat",
                "type": [
                    "Bug",
                    "Poison"
                ],
                "number": "048",
                "image_url": "https://img.pokemondb.net/artwork/venonat.jpg"
            },
            {
                "name": "Venomoth",
                "type": [
                    "Bug",
                    "Poison"
                ],
                "number": "049",
                "image_url": "https://img.pokemondb.net/artwork/venomoth.jpg"
            },
            {
                "name": "Diglett",
                "type": [
                    "Ground"
                ],
                "number": "050",
                "image_url": "https://img.pokemondb.net/artwork/diglett.jpg"
            },
            {
                "name": "Dugtrio",
                "type": [
                    "Ground"
                ],
                "number": "051",
                "image_url": "https://img.pokemondb.net/artwork/dugtrio.jpg"
            },
            {
                "name": "Meowth",
                "type": [
                    "Normal"
                ],
                "number": "052",
                "image_url": "https://img.pokemondb.net/artwork/meowth.jpg"
            },
            {
                "name": "Persian",
                "type": [
                    "Normal"
                ],
                "number": "053",
                "image_url": "https://img.pokemondb.net/artwork/persian.jpg"
            },
            {
                "name": "Psyduck",
                "type": [
                    "Water"
                ],
                "number": "054",
                "image_url": "https://img.pokemondb.net/artwork/psyduck.jpg"
            },
            {
                "name": "Golduck",
                "type": [
                    "Water"
                ],
                "number": "055",
                "image_url": "https://img.pokemondb.net/artwork/golduck.jpg"
            },
            {
                "name": "Mankey",
                "type": [
                    "Fighting"
                ],
                "number": "056",
                "image_url": "https://img.pokemondb.net/artwork/mankey.jpg"
            },
            {
                "name": "Primeape",
                "type": [
                    "Fighting"
                ],
                "number": "057",
                "image_url": "https://img.pokemondb.net/artwork/primeape.jpg"
            },
            {
                "name": "Growlithe",
                "type": [
                    "Fire"
                ],
                "number": "058",
                "image_url": "https://img.pokemondb.net/artwork/growlithe.jpg"
            },
            {
                "name": "Arcanine",
                "type": [
                    "Fire"
                ],
                "number": "059",
                "image_url": "https://img.pokemondb.net/artwork/arcanine.jpg"
            },
            {
                "name": "Poliwag",
                "type": [
                    "Water"
                ],
                "number": "060",
                "image_url": "https://img.pokemondb.net/artwork/poliwag.jpg"
            },
            {
                "name": "Poliwhirl",
                "type": [
                    "Water"
                ],
                "number": "061",
                "image_url": "https://img.pokemondb.net/artwork/poliwhirl.jpg"
            },
            {
                "name": "Poliwrath",
                "type": [
                    "Water",
                    "Fighting"
                ],
                "number": "062",
                "image_url": "https://img.pokemondb.net/artwork/poliwrath.jpg"
            },
            {
                "name": "Abra",
                "type": [
                    "Psychic"
                ],
                "number": "063",
                "image_url": "https://img.pokemondb.net/artwork/abra.jpg"
            },
            {
                "name": "Kadabra",
                "type": [
                    "Psychic"
                ],
                "number": "064",
                "image_url": "https://img.pokemondb.net/artwork/kadabra.jpg"
            },
            {
                "name": "Alakazam",
                "type": [
                    "Psychic"
                ],
                "number": "065",
                "image_url": "https://img.pokemondb.net/artwork/alakazam.jpg"
            },
            {
                "name": "Machop",
                "type": [
                    "Fighting"
                ],
                "number": "066",
                "image_url": "https://img.pokemondb.net/artwork/machop.jpg"
            },
            {
                "name": "Machoke",
                "type": [
                    "Fighting"
                ],
                "number": "067",
                "image_url": "https://img.pokemondb.net/artwork/machoke.jpg"
            },
            {
                "name": "Machamp",
                "type": [
                    "Fighting"
                ],
                "number": "068",
                "image_url": "https://img.pokemondb.net/artwork/machamp.jpg"
            },
            {
                "name": "Bellsprout",
                "type": [
                    "Grass",
                    "Poison"
                ],
                "number": "069",
                "image_url": "https://img.pokemondb.net/artwork/bellsprout.jpg"
            },
            {
                "name": "Weepinbell",
                "type": [
                    "Grass",
                    "Poison"
                ],
                "number": "070",
                "image_url": "https://img.pokemondb.net/artwork/weepinbell.jpg"
            },
            {
                "name": "Victreebel",
                "type": [
                    "Grass",
                    "Poison"
                ],
                "number": "071",
                "image_url": "https://img.pokemondb.net/artwork/victreebel.jpg"
            },
            {
                "name": "Tentacool",
                "type": [
                    "Water",
                    "Poison"
                ],
                "number": "072",
                "image_url": "https://img.pokemondb.net/artwork/tentacool.jpg"
            },
            {
                "name": "Tentacruel",
                "type": [
                    "Water",
                    "Poison"
                ],
                "number": "073",
                "image_url": "https://img.pokemondb.net/artwork/tentacruel.jpg"
            },
            {
                "name": "Geodude",
                "type": [
                    "Rock",
                    "Ground"
                ],
                "number": "074",
                "image_url": "https://img.pokemondb.net/artwork/geodude.jpg"
            },
            {
                "name": "Graveler",
                "type": [
                    "Rock",
                    "Ground"
                ],
                "number": "075",
                "image_url": "https://img.pokemondb.net/artwork/graveler.jpg"
            },
            {
                "name": "Golem",
                "type": [
                    "Rock",
                    "Ground"
                ],
                "number": "076",
                "image_url": "https://img.pokemondb.net/artwork/golem.jpg"
            },
            {
                "name": "Ponyta",
                "type": [
                    "Fire"
                ],
                "number": "077",
                "image_url": "https://img.pokemondb.net/artwork/ponyta.jpg"
            },
            {
                "name": "Rapidash",
                "type": [
                    "Fire"
                ],
                "number": "078",
                "image_url": "https://img.pokemondb.net/artwork/rapidash.jpg"
            },
            {
                "name": "Slowpoke",
                "type": [
                    "Water",
                    "Psychic"
                ],
                "number": "079",
                "image_url": "https://img.pokemondb.net/artwork/slowpoke.jpg"
            },
            {
                "name": "Slowbro",
                "type": [
                    "Water",
                    "Psychic"
                ],
                "number": "080",
                "image_url": "https://img.pokemondb.net/artwork/slowbro.jpg"
            },
            {
                "name": "Magnemite",
                "type": [
                    "Electric",
                    "Steel"
                ],
                "number": "081",
                "image_url": "https://img.pokemondb.net/artwork/magnemite.jpg"
            },
            {
                "name": "Magneton",
                "type": [
                    "Electric",
                    "Steel"
                ],
                "number": "082",
                "image_url": "https://img.pokemondb.net/artwork/magneton.jpg"
            },
            {
                "name": "Farfetch'd",
                "type": [
                    "Normal",
                    "Flying"
                ],
                "number": "083",
                "image_url": "https://img.pokemondb.net/artwork/farfetchd.jpg"
            },
            {
                "name": "Doduo",
                "type": [
                    "Normal",
                    "Flying"
                ],
                "number": "084",
                "image_url": "https://img.pokemondb.net/artwork/doduo.jpg"
            },
            {
                "name": "Dodrio",
                "type": [
                    "Normal",
                    "Flying"
                ],
                "number": "085",
                "image_url": "https://img.pokemondb.net/artwork/dodrio.jpg"
            },
            {
                "name": "Seel",
                "type": [
                    "Water"
                ],
                "number": "086",
                "image_url": "https://img.pokemondb.net/artwork/seel.jpg"
            },
            {
                "name": "Dewgong",
                "type": [
                    "Water",
                    "Ice"
                ],
                "number": "087",
                "image_url": "https://img.pokemondb.net/artwork/dewgong.jpg"
            },
            {
                "name": "Grimer",
                "type": [
                    "Poison"
                ],
                "number": "088",
                "image_url": "https://img.pokemondb.net/artwork/grimer.jpg"
            },
            {
                "name": "Muk",
                "type": [
                    "Poison"
                ],
                "number": "089",
                "image_url": "https://img.pokemondb.net/artwork/muk.jpg"
            },
            {
                "name": "Shellder",
                "type": [
                    "Water"
                ],
                "number": "090",
                "image_url": "https://img.pokemondb.net/artwork/shellder.jpg"
            },
            {
                "name": "Cloyster",
                "type": [
                    "Water",
                    "Ice"
                ],
                "number": "091",
                "image_url": "https://img.pokemondb.net/artwork/cloyster.jpg"
            },
            {
                "name": "Gastly",
                "type": [
                    "Ghost",
                    "Poison"
                ],
                "number": "092",
                "image_url": "https://img.pokemondb.net/artwork/gastly.jpg"
            },
            {
                "name": "Haunter",
                "type": [
                    "Ghost",
                    "Poison"
                ],
                "number": "093",
                "image_url": "https://img.pokemondb.net/artwork/haunter.jpg"
            },
            {
                "name": "Gengar",
                "type": [
                    "Ghost",
                    "Poison"
                ],
                "number": "094",
                "image_url": "https://img.pokemondb.net/artwork/gengar.jpg"
            },
            {
                "name": "Onix",
                "type": [
                    "Rock",
                    "Ground"
                ],
                "number": "095",
                "image_url": "https://img.pokemondb.net/artwork/onix.jpg"
            },
            {
                "name": "Drowzee",
                "type": [
                    "Psychic"
                ],
                "number": "096",
                "image_url": "https://img.pokemondb.net/artwork/drowzee.jpg"
            },
            {
                "name": "Hypno",
                "type": [
                    "Psychic"
                ],
                "number": "097",
                "image_url": "https://img.pokemondb.net/artwork/hypno.jpg"
            },
            {
                "name": "Krabby",
                "type": [
                    "Water"
                ],
                "number": "098",
                "image_url": "https://img.pokemondb.net/artwork/krabby.jpg"
            },
            {
                "name": "Kingler",
                "type": [
                    "Water"
                ],
                "number": "099",
                "image_url": "https://img.pokemondb.net/artwork/kingler.jpg"
            },
            {
                "name": "Voltorb",
                "type": [
                    "Electric"
                ],
                "number": "100",
                "image_url": "https://img.pokemondb.net/artwork/voltorb.jpg"
            },
            {
                "name": "Electrode",
                "type": [
                    "Electric"
                ],
                "number": "101",
                "image_url": "https://img.pokemondb.net/artwork/electrode.jpg"
            },
            {
                "name": "Exeggcute",
                "type": [
                    "Grass",
                    "Psychic"
                ],
                "number": "102",
                "image_url": "https://img.pokemondb.net/artwork/exeggcute.jpg"
            },
            {
                "name": "Exeggutor",
                "type": [
                    "Grass",
                    "Psychic"
                ],
                "number": "103",
                "image_url": "https://img.pokemondb.net/artwork/exeggutor.jpg"
            },
            {
                "name": "Cubone",
                "type": [
                    "Ground"
                ],
                "number": "104",
                "image_url": "https://img.pokemondb.net/artwork/cubone.jpg"
            },
            {
                "name": "Marowak",
                "type": [
                    "Ground"
                ],
                "number": "105",
                "image_url": "https://img.pokemondb.net/artwork/marowak.jpg"
            },
            {
                "name": "Hitmonlee",
                "type": [
                    "Fighting"
                ],
                "number": "106",
                "image_url": "https://img.pokemondb.net/artwork/hitmonlee.jpg"
            },
            {
                "name": "Hitmonchan",
                "type": [
                    "Fighting"
                ],
                "number": "107",
                "image_url": "https://img.pokemondb.net/artwork/hitmonchan.jpg"
            },
            {
                "name": "Lickitung",
                "type": [
                    "Normal"
                ],
                "number": "108",
                "image_url": "https://img.pokemondb.net/artwork/lickitung.jpg"
            },
            {
                "name": "Koffing",
                "type": [
                    "Poison"
                ],
                "number": "109",
                "image_url": "https://img.pokemondb.net/artwork/koffing.jpg"
            },
            {
                "name": "Weezing",
                "type": [
                    "Poison"
                ],
                "number": "110",
                "image_url": "https://img.pokemondb.net/artwork/weezing.jpg"
            },
            {
                "name": "Rhyhorn",
                "type": [
                    "Ground",
                    "Rock"
                ],
                "number": "111",
                "image_url": "https://img.pokemondb.net/artwork/rhyhorn.jpg"
            },
            {
                "name": "Rhydon",
                "type": [
                    "Ground",
                    "Rock"
                ],
                "number": "112",
                "image_url": "https://img.pokemondb.net/artwork/rhydon.jpg"
            },
            {
                "name": "Chansey",
                "type": [
                    "Normal"
                ],
                "number": "113",
                "image_url": "https://img.pokemondb.net/artwork/chansey.jpg"
            },
            {
                "name": "Tangela",
                "type": [
                    "Grass"
                ],
                "number": "114",
                "image_url": "https://img.pokemondb.net/artwork/tangela.jpg"
            },
            {
                "name": "Kangaskhan",
                "type": [
                    "Normal"
                ],
                "number": "115",
                "image_url": "https://img.pokemondb.net/artwork/kangaskhan.jpg"
            },
            {
                "name": "Horsea",
                "type": [
                    "Water"
                ],
                "number": "116",
                "image_url": "https://img.pokemondb.net/artwork/horsea.jpg"
            },
            {
                "name": "Seadra",
                "type": [
                    "Water"
                ],
                "number": "117",
                "image_url": "https://img.pokemondb.net/artwork/seadra.jpg"
            },
            {
                "name": "Goldeen",
                "type": [
                    "Water"
                ],
                "number": "118",
                "image_url": "https://img.pokemondb.net/artwork/goldeen.jpg"
            },
            {
                "name": "Seaking",
                "type": [
                    "Water"
                ],
                "number": "119",
                "image_url": "https://img.pokemondb.net/artwork/seaking.jpg"
            },
            {
                "name": "Staryu",
                "type": [
                    "Water"
                ],
                "number": "120",
                "image_url": "https://img.pokemondb.net/artwork/staryu.jpg"
            },
            {
                "name": "Starmie",
                "type": [
                    "Water",
                    "Psychic"
                ],
                "number": "121",
                "image_url": "https://img.pokemondb.net/artwork/starmie.jpg"
            },
            {
                "name": "Mr. Mime",
                "type": [
                    "Psychic",
                    "Fairy"
                ],
                "number": "122",
                "image_url": "https://img.pokemondb.net/artwork/mr-mime.jpg"
            },
            {
                "name": "Scyther",
                "type": [
                    "Bug",
                    "Flying"
                ],
                "number": "123",
                "image_url": "https://img.pokemondb.net/artwork/scyther.jpg"
            },
            {
                "name": "Jynx",
                "type": [
                    "Ice",
                    "Psychic"
                ],
                "number": "124",
                "image_url": "https://img.pokemondb.net/artwork/jynx.jpg"
            },
            {
                "name": "Electabuzz",
                "type": [
                    "Electric"
                ],
                "number": "125",
                "image_url": "https://img.pokemondb.net/artwork/electabuzz.jpg"
            },
            {
                "name": "Magmar",
                "type": [
                    "Fire"
                ],
                "number": "126",
                "image_url": "https://img.pokemondb.net/artwork/magmar.jpg"
            },
            {
                "name": "Pinsir",
                "type": [
                    "Bug"
                ],
                "number": "127",
                "image_url": "https://img.pokemondb.net/artwork/pinsir.jpg"
            },
            {
                "name": "Tauros",
                "type": [
                    "Normal"
                ],
                "number": "128",
                "image_url": "https://img.pokemondb.net/artwork/tauros.jpg"
            },
            {
                "name": "Magikarp",
                "type": [
                    "Water"
                ],
                "number": "129",
                "image_url": "https://img.pokemondb.net/artwork/magikarp.jpg"
            },
            {
                "name": "Gyarados",
                "type": [
                    "Water",
                    "Flying"
                ],
                "number": "130",
                "image_url": "https://img.pokemondb.net/artwork/gyarados.jpg"
            },
            {
                "name": "Lapras",
                "type": [
                    "Water",
                    "Ice"
                ],
                "number": "131",
                "image_url": "https://img.pokemondb.net/artwork/lapras.jpg"
            },
            {
                "name": "Ditto",
                "type": [
                    "Normal"
                ],
                "number": "132",
                "image_url": "https://img.pokemondb.net/artwork/ditto.jpg"
            },
            {
                "name": "Eevee",
                "type": [
                    "Normal"
                ],
                "number": "133",
                "image_url": "https://img.pokemondb.net/artwork/eevee.jpg"
            },
            {
                "name": "Vaporeon",
                "type": [
                    "Water"
                ],
                "number": "134",
                "image_url": "https://img.pokemondb.net/artwork/vaporeon.jpg"
            },
            {
                "name": "Jolteon",
                "type": [
                    "Electric"
                ],
                "number": "135",
                "image_url": "https://img.pokemondb.net/artwork/jolteon.jpg"
            },
            {
                "name": "Flareon",
                "type": [
                    "Fire"
                ],
                "number": "136",
                "image_url": "https://img.pokemondb.net/artwork/flareon.jpg"
            },
            {
                "name": "Porygon",
                "type": [
                    "Normal"
                ],
                "number": "137",
                "image_url": "https://img.pokemondb.net/artwork/porygon.jpg"
            },
            {
                "name": "Omanyte",
                "type": [
                    "Rock",
                    "Water"
                ],
                "number": "138",
                "image_url": "https://img.pokemondb.net/artwork/omanyte.jpg"
            },
            {
                "name": "Omastar",
                "type": [
                    "Rock",
                    "Water"
                ],
                "number": "139",
                "image_url": "https://img.pokemondb.net/artwork/omastar.jpg"
            },
            {
                "name": "Kabuto",
                "type": [
                    "Rock",
                    "Water"
                ],
                "number": "140",
                "image_url": "https://img.pokemondb.net/artwork/kabuto.jpg"
            },
            {
                "name": "Kabutops",
                "type": [
                    "Rock",
                    "Water"
                ],
                "number": "141",
                "image_url": "https://img.pokemondb.net/artwork/kabutops.jpg"
            },
            {
                "name": "Aerodactyl",
                "type": [
                    "Rock",
                    "Flying"
                ],
                "number": "142",
                "image_url": "https://img.pokemondb.net/artwork/aerodactyl.jpg"
            },
            {
                "name": "Snorlax",
                "type": [
                    "Normal"
                ],
                "number": "143",
                "image_url": "https://img.pokemondb.net/artwork/snorlax.jpg"
            },
            {
                "name": "Articuno",
                "type": [
                    "Ice",
                    "Flying"
                ],
                "number": "144",
                "image_url": "https://img.pokemondb.net/artwork/articuno.jpg"
            },
            {
                "name": "Zapdos",
                "type": [
                    "Electric",
                    "Flying"
                ],
                "number": "145",
                "image_url": "https://img.pokemondb.net/artwork/zapdos.jpg"
            },
            {
                "name": "Moltres",
                "type": [
                    "Fire",
                    "Flying"
                ],
                "number": "146",
                "image_url": "https://img.pokemondb.net/artwork/moltres.jpg"
            },
            {
                "name": "Dratini",
                "type": [
                    "Dragon"
                ],
                "number": "147",
                "image_url": "https://img.pokemondb.net/artwork/dratini.jpg"
            },
            {
                "name": "Dragonair",
                "type": [
                    "Dragon"
                ],
                "number": "148",
                "image_url": "https://img.pokemondb.net/artwork/dragonair.jpg"
            },
            {
                "name": "Dragonite",
                "type": [
                    "Dragon",
                    "Flying"
                ],
                "number": "149",
                "image_url": "https://img.pokemondb.net/artwork/dragonite.jpg"
            },
            {
                "name": "Mewtwo",
                "type": [
                    "Psychic"
                ],
                "number": "150",
                "image_url": "https://img.pokemondb.net/artwork/mewtwo.jpg"
            },
            {
                "name": "Mew",
                "type": [
                    "Psychic"
                ],
                "number": "151",
                "image_url": "https://img.pokemondb.net/artwork/mew.jpg"
            },

        ]
    };
    return pokemonData;
}