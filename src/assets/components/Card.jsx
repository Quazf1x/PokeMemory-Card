import { useState, useEffect } from 'react';
import { getPokemon } from "../../pokemonFetch";

function Card() {
  const [image, setImage] = useState('..');

  useEffect(() => {
    async function fun() {
      const data = await getPokemon(347);
      setImage(data.image);
    }
    fun();
  })

  return (
    <div className="card">
      <h2>2</h2>
      <img src={image}></img>
    </div>
  )
}

export default Card;