import nomi from "./name.js";
import hobbies from "./hobbies.js";

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
