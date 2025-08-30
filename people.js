//import nomi from "./name.js";
//import hobbies from "./hobbies.js";

const nomi = require("./name.js");
const hobbies = require("./hobbies.js");

//uso named export per poter esportare più funzioni
function personeEHobbies() {
  return {
    fullName: nomi("Maria", "Rossi"),
    hobbies: hobbies(
      "giocare ai videogiochi",
      "giocare a basket",
      "programmare"
    ),
  };
}

module.exports = personeEHobbies;
