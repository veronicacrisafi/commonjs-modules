import nomi from "./name.js";
import hobbies from "./hobbies.js";

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

module.export = personeEHobbies();
