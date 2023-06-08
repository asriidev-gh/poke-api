import React, { useEffect, useState } from 'react';

const PokemonsList = () => {
  const BASEURL = 'https://pokeapi.co/api/v2/pokemon';
  const [allPokemons,setAllPokemons] = useState<any[]>([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(BASEURL);

  const getAllPokemons = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
   
    const createPokemonObject = (result: {name: string, url: string}[]) => {
      result.forEach(async (pokemon) => {
        const res = await fetch(`${BASEURL}/${pokemon.name}`)
        const data = await res.json();
        setAllPokemons(currentList => [...currentList,data])
      });
    }
    await createPokemonObject(data.results)
  }

  useEffect(()=>{
    setAllPokemons([]);
    getAllPokemons(currentPageUrl);
  },[currentPageUrl]);

  return (
    <>
      <div className='
        flex
        flex-wrap
        items-center
        justify-center
        mt-10
      '>	
        <img className="" src='/images/pokeapi.png' />
      </div>
      
      <div className='
        flex
        flex-wrap
        items-center
        justify-center
      '>		
        {allPokemons ? allPokemons.map((pokemon, index) => 
          (<>{pokemon.name}</>)
        ) : "Loading..."}
      </div>
    </>
  )
}

export default PokemonsList