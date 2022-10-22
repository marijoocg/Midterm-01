let searchbtn=document.getElementById('searchbarbtn');
let nextbtn=document.getElementById('nextbtn');
let previousbtn=document.getElementById('previousbtn');
var idactual=1;

//SEARCH
searchbtn.addEventListener('click', function(){
$("#spinner1").removeClass("d-none")//
  let berryname=document.getElementById('berrysearchbar').value
fetchBerry(berryname).then(function(info) {
  $("#spinner1").addClass("d-none")
  idactual=info.id
  displayBerry(info)
  console.log(info.results[idactual])
  
  if(fetchBerry().value=== null){
    $("#nullb").removeClass("d-none")
  }

  var blank=document.getElementById('berrysearchbar').value;
  blank.value=null;
})
});

//NEXT
nextbtn.addEventListener('click', function(){
  $("#spinner1").removeClass("d-none")
  
  idactual++  
  if(idactual=== 65){
      idactual=1
  }

  fetchBerry(idactual).then(function(info) {
    $("#spinner1").addClass("d-none")
    displayBerry(info)
    console.log(info);
  })
  });
  

//PREVIOUS
previousbtn.addEventListener('click', function(){
  $("#spinner1").removeClass("d-none")
  idactual--

  if(idactual===0){
      idactual=64
  }
  fetchBerry(idactual).then(function(info) {
      $("#spinner1").addClass("d-none")
      displayBerry(info)
      console.log(info);
  })
});
    
//SHOW BERRY AFTER SEARCHING OR MOVING
function displayBerry(info){
  $("#ID").html("ID: "+info.id) 
  $("#Name").html(info.name)
  $("#GiftPower").html(info.natural_gift_power+" EXP")
  $("#GrowthTime").html(info.growth_time+" hrs")
  $("#MaxHarvest").html(info.max_harvest+" times")
  console.log(info);
  $("#my_image").attr("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/berries/${info.name}-berry.png`);
  $("#my_image").removeClass("d-none");
}

//GET POKEMON FOR ATTRIBUTES
async function fetchBerry(berryname){
   const request = await fetch(`https://pokeapi.co/api/v2/berry/${berryname}`)
  return await request.json();
  
}

