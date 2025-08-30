//ES6
//import nomi from "./name.js";
//console.log(nomi("Maria", "Rossi"));
//console.log(nomi("Marco", "Bianchi"));

//CJS
const nomi = require("./name.js");
console.log(nomi("wilfred", "sir"));

//ES6
//import hobbies from "./hobbies.js";
//console.log(
//hobbies("giocare ai videogiochi", "giocare a basket", "programmare")
//);
//CJS
const hobbies = require("./hobbies.js");
console.log(hobbies("programmare", "basket", "pallavolo"));

//ES6
//import { personeEHobbies } from "./people.js";
//console.log(personeEHobbies());
//CJS
const personeEHobbies = require("./people.js");
console.log(personeEHobbies());
