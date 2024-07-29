// Add your code to this file



let back = document.querySelector("body");
back.style.background = "darkblue";

let pokemonborder = document.querySelectorAll("img");
for(let i= 0; i<pokemonborder.length;i++){
    pokemonborder[i].style.border = "6px dotted orange";
    console.log(pokemonborder);
}

let pokemonnames = document.querySelectorAll(".pokemon_names");
for(let i= 0; i<pokemonnames.length;i++){
    pokemonnames[i].style.color = "yellow";
    console.log(pokemonnames);
}



//let pokemon_images = document.querySelectorAll("img");
//pokemon_images.style.border = "8px dotted orange";
//console.log(pokemon_images)
