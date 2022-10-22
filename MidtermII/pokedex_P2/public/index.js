let searchbtn=document.getElementById('searchbarbtn');
let nextbtn=document.getElementById('nextbtn');
let previousbtn=document.getElementById('previousbtn');
var idactual=1;

const progressBarFull = document.getElementById('progressBarFull');

let expCounter = 0;
const MAX_EXP = 1000;

//SEARCH
searchbtn.addEventListener('click', function(){
$("#spinner1").removeClass("d-none")//
  let pokemonname=document.getElementById('poksearchbar').value
  if(fetchPokemon().value=== null){
    $("#nullb").removeClass("d-none")
    console.log("Couldn't find it")
  }else{
    fetchPokemon(pokemonname).then(function(info) {
      $("#spinner1").addClass("d-none")
      idactual=info.id
      displayPokemon(info)
      console.log(info.results[idactual])
      
      
    
      var blank=document.getElementById('poksearchbar').value;
      blank.value=null;
    })
  }

  
});

//NEXT
nextbtn.addEventListener('click', function(){
  $("#spinner1").removeClass("d-none")
  
  idactual++  
  if(idactual=== 247){
      idactual=1
  }

  fetchPokemon(idactual).then(function(info) {
    $("#spinner1").addClass("d-none")
    displayPokemon(info)
    console.log(info);
  })
  });
  

//PREVIOUS
previousbtn.addEventListener('click', function(){
    $("#spinner1").removeClass("d-none")
    idactual--

    if(idactual===0){
        idactual=246
    }
    fetchPokemon(idactual).then(function(info) {
        $("#spinner1").addClass("d-none")
        displayPokemon(info)
        console.log(info);
    })
});
    
//SHOW POKEMON AFTER SEARCHING OR MOVING
function displayPokemon(info){
  $("#ID").html("ID: "+info.id) 
  //$("#Name").html("Name: "+info.name)
  $("#Name").html(info.name)
  $("#Type").html("Type: "+info.types[0].type.name)
  $("#Experience").html("Experience: "+info.base_experience+"/1000 EXP")
  expCounter=info.base_experience
  //$("#Weight").html("Weight: "+info.weight)
  $("#Weight").html(info.weight+" hg")
  $("#Height").html(info.height+" dm")
  $("#Moves").html("- "+info.moves[[Math.floor(Math.random() * 10)]].move.name+"<br/>- "+info.moves[[Math.floor(Math.random() * 10)]].move.name+"<br/>- "+info.moves[[Math.floor(Math.random() * 10)]].move.name+"<br/>"+"<br/>")
  $("#Abilities").html("- "+info.abilities[0].ability.name+"<br/>- "+info.abilities[1].ability.name+"<br/>")
  console.log(info);
  $("#my_image").attr("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${info.id}.png`);
  $("#my_image").removeClass("d-none");
  progressBarFull.style.width = `${(expCounter / MAX_EXP) * 100}%`;
}
//YOUTUBE _ BUTTON COLORS

/*
const typeColors = {
  $("color").html(searchColor(info.types[0].type.name, typeColors));

  electric: '#FFEA70',
  normal: '#B09398',
  fire: '#FF675C',
  water: '#0596C7',
  ice: '#AFEAFD',
  rock: '#999799',
  flying: '#7AE7C7',
  grass: '#4A9681',
  psychic: '#FFC6D9',
  ghost: '#561D25',
  bug: '#A2FAA3',
  poison: '#795663',
  ground: '#D2B074',
  dragon: '#DA627D',
  steel: '#1D8A99',
  fighting: '#2F2F2F',
  default: '#2A1A1F',
};
*/

//GET POKEMON FOR ATTRIBUTES
async function fetchPokemon(pokemonname){
   const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
  return await request.json();
  
}

