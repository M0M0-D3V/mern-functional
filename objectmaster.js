const pokémon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

// names taht start with B
const bListPkmn = pokémon.filter((p) => p.name[0] === "B");
console.log("B list");
console.log(bListPkmn);
// array of just ids
const pkmnIds = pokémon.map((p) => p.id);
console.log("pokemon IDs");
console.log(pkmnIds);
//ASSIGNMENT
// [x] an array of pokémon objects where the id is evenly divisible by 3
const idDivEvenly3 = pokémon.filter((p) => p.id % 3 === 0);
console.log("ids divisible by 3");
console.log(idDivEvenly3);
// [x] an array of pokémon objects that are "fire" type
const fireType = pokémon.filter((p) => p.types.includes("fire"));
console.log("fireTypes");
console.log(fireType);
// [x] an array of pokémon objects that have more than one type
const moreThan1Type = pokémon.filter((p) => p.types.length > 1);
console.log("More than 1 type");
console.log(moreThan1Type);
// [x] an array with just the names of the pokémon
const pkmnNames = pokémon.map((p) => p.name);
console.log("just the names");
console.log(pkmnNames);
// [x] an array with just the names of pokémon with an id greater than 99
const idGreater99 = pokémon.filter((p) => p.id > 99).map((p) => p.name);
console.log("id greater than 99");
console.log(idGreater99);
// [x] an array with just the names of the pokémon whose only type is poison
const onlyPoison = pokémon
  .filter((p) => p.types.includes("poison") && p.types.length === 1)
  .map((p) => p.name);
console.log("poison only");
console.log(onlyPoison);
// x] an array containing just the first type of all the pokémon whose second type is "flying"
const secTypeFlying = pokémon
  .filter((p) => p.types.includes("flying") && p.types.length === 2)
  .map((p) => p.types[0]);
console.log("sec type flying");
console.log(secTypeFlying);
// [x] a count of the number of pokémon that are "normal" type
const normalType = pokémon.filter((p) => p.types.includes("normal"));
console.log("normal types");
console.log(normalType.length);
