async function getPokemon(id) {
  const info = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const { name, sprites } = await info.json();
  const image = sprites.other['official-artwork'].front_default;
  
  return { name, image }
}
export { getPokemon }