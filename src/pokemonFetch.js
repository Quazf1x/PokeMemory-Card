// import uniqid from 'uniqid';

// Number of total pokemon, up to GEN 8
const TOTAL_PKMN = 893;

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function generateRandomPokemon(amount) {
  let pokemon = [];
  while (pokemon.length < amount) {
    const newPokemon = Math.floor(Math.random() * TOTAL_PKMN);
    const isDublicated = pokemon.filter((id) => id === newPokemon);
    if (isDublicated.length !== 0) continue;
    else pokemon.push(newPokemon);
  }

  return pokemon;
}

async function getPokemon(id) {
  const info = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const { name, sprites } = await info.json();
  let image = sprites.other["official-artwork"].front_default;

  return { name, image };
}

export { getPokemon, generateRandomPokemon, shuffleArray };
