var searchEl = document.querySelector(".poke-name");
var formEl = document.querySelector(".pokemon");
var displayEl = document.querySelector(".pokemon-display");

formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    var pokemonName = searchEl.value.trim();
    pokemonName = pokemonName.toLowerCase()
    console.log(pokemonName);

    var requestUrl = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayEl.textContent = "";
            console.log(data);
            console.log(data.name);
            console.log(data.height);
            console.log(data.weight);
            console.log(data.sprites.front_default);

            var name = document.createElement("h2");
            name.textContent=data.name;
            var img = document.createElement("img");
            img.setAttribute("src",data.sprites.front_default);
            var height = document.createElement("p");
            height.textContent = "Height: " + data.height;
            var weight = document.createElement("p");
            weight.textContent = "Weight: " + data.weight;


            displayEl.append(name);
            displayEl.append(img);
            displayEl.append(height);
            displayEl.append(weight);


        })
        .catch(function (error) {
            console.log(error);

        })

});


