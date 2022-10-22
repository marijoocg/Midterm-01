const express= require("express");
const app= express();
var poke= require("pokedex");
const ejs=require('ejs');
const url="https://pokeapi.co/api/v2/pokemon/";


const https= require("https");

app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));

app.get('/', (req, res)=>{
    res.sendFile("index.html");
});


app.get("/id", (req, res)=>{
    res.sendFile("index.html");


https.get(url, (response)=>{
    console.log(response);
});
res.send(poke.id + "dwf");
});

app.post('/id', (req,res)=>{

})

app.get('/id:id', (req, res)=>{
    const pokemon=poke.find(c=> c.id === parseInt(req.params.id));
    if(!pokemon) res.status(404).send("There's no such Pokemon! Sorry!");
    res.send(pokemon);
});


app.listen(3000, ()=>{
    console.log("Server is running on port 3000" )
});