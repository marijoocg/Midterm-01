let searchbtn=document.getElementById('searchbarbtn');
let nextbtn=document.getElementById('nextbtn');
let previousbtn=document.getElementById('previousbtn');
var idactual=1;

//SEARCH
searchbtn.addEventListener('click', function(){
$("#spinner1").removeClass("d-none")//
  let itemname=document.getElementById('itemsearchbar').value
fetchItem(itemname).then(function(info) {
  $("#spinner1").addClass("d-none")
  idactual=info.id
  displayItem(info)
  console.log(info.results[idactual])
  
  if(fetchItem().value=== null){
    $("#nullb").removeClass("d-none")
  }

  var blank=document.getElementById('itemsearchbar').value;
  blank.value=null;
})
});

//NEXT
nextbtn.addEventListener('click', function(){
  $("#spinner1").removeClass("d-none")
  
  idactual++  
  if(idactual=== 247){
      idactual=1
  }

  fetchItem(idactual).then(function(info) {
    $("#spinner1").addClass("d-none")
    displayItem(info)
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
    fetchItem(idactual).then(function(info) {
        $("#spinner1").addClass("d-none")
        displayItem(info)
        console.log(info);
    })
});
    
//SHOW ITEM AFTER SEARCHING OR MOVING
function displayItem(info){
  $("#ID").html("ID: "+info.id) 
  $("#Name").html(info.name)
  $("#Cost").html(info.cost+"₽")
  /*$("#FlingPower").html(info.fling_power)
  $("#FlingEffect").html(info.fling_effect[0])*/
  console.log(info);
  $("#my_image").attr("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${info.name}.png`);
  /*$("#my_image").attr("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${info.id}.png`);*/
  $("#my_image").removeClass("d-none");
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
async function fetchItem(itemname){
   const request = await fetch(`https://pokeapi.co/api/v2/item/${itemname}`)
  return await request.json();
  
}

