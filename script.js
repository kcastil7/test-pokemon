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
            var type = document.createElement("p");
            type.textContent = "Type: " + data.types[0].type.name;

            displayEl.append(name);
            displayEl.append(img);
            displayEl.append(height);
            displayEl.append(weight);
            displayEl.append(type);


        })
        .catch(function (error) {
            console.log(error);

        })

});

var pokemonArr = [];
for (var i = 1; i <=151;i++){

    var requesArrtUrl = 'https://pokeapi.co/api/v2/pokemon/' + i;

    fetch(requesArrtUrl)
    .then(function(response){
        return response.json();

    }).then(function(data) {
        
        console.log(data.name);
        console.log(data.types[0].type.name);
        var poketype = {name:data.name,type:data.types[0].type.name};
        pokemonArr.push(poketype);
    
    }).catch(function(error){
        console.log(error);
    });
    

}
console.log(pokemonArr);