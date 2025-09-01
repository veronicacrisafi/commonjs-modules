//ESM
import nomi from "./name.js";
import hobbies from "./hobbies.js";

/* //CJS
const nomi = require("./name.js");
const hobbies = require("./hobbies.js"); */

//uso named export per poter esportare più funzioni
export function personeEHobbies() {
  return {
    fullName: nomi("Maria", "Rossi"),
    hobbies: hobbies(
      "giocare ai videogiochi",
      "giocare a basket",
      "programmare"
    ),
  };
}

/* module.exports = personeEHobbies; */
