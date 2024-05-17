import Pokemon from "./Pokemon.js";
/*Az osztálypéldány mindig kisbetüs */

let pok1 =new Pokemon("Ditto","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png","Jó esős regelt!",$(".pokemonok"))
let pok2 =new Pokemon("Charizard","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png","Nem tom...",$(".pokemonok"))


//pok1.nev="DIIIIIITTTTTTTTTTTOOOOOOOOOOOO"
pok1.szerep ="harcos"
delete pok1.mondat
/*Privált adattag meghivása */
/*getteren keresztul */
console.log(pok1.nev)
console.log(pok2.nev)
/*szertter */
pok1.mondat="Hurrá elált az eső"
pok1.beszel()

console.log(pok1)
console.log(pok2)
