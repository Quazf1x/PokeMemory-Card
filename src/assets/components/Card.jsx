import { useState, useEffect } from 'react';
import { getPokemon } from "../../pokemonFetch";
import loadingGif from '../img/loading.gif';

function Card({pokemonId}) {
  const [image, setImage] = useState(loadingGif);
  const [name, changeName] = useState('Loading...');

  const changePokemonInfo = (name, image) => {
    changeName(name);
    setImage(image);
  }

  useEffect(() => {
    async function setPokemonData() {
      const data = await getPokemon(pokemonId);
      changePokemonInfo(data.name, data.image);
    }
    setPokemonData();

    return () => {
      changePokemonInfo('Loading...', loadingGif);
    }
    
  }, [])

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image}></img>
    </div>
  )
}

export default Card;