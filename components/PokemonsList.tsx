import React, { useEffect, useState } from 'react';
import PokeThumbnail from './PokeThumbnail';
import Pagination from './Pagination';

const PokemonsList = () => {
  const BASEURL = 'https://pokeapi.co/api/v2/pokemon';
  const [allPokemons,setAllPokemons] = useState<any[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState<string>('');
  const [prevPageUrl, setPrevPageUrl] = useState<string>('');
  const [currentPageUrl, setCurrentPageUrl] = useState(BASEURL);

  const getAllPokemons = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
	
    setNextPageUrl(data.next);
    setPrevPageUrl(data.previous);
   
    const createPokemonObject = (result: {name: string, url: string}[]) => {
      result.forEach(async (pokemon) => {
        const res = await fetch(`${BASEURL}/${pokemon.name}`)
        const data = await res.json();
        setAllPokemons(currentList => [...currentList,data])
      });
    }
    await createPokemonObject(data.results)
  }

  const gotoNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  }

  const gotoPrevPage = () =>  {
    setCurrentPageUrl(prevPageUrl);
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
      <div className='mb-8 mt-5'>
        <Pagination
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        >
          <input 
            className="
              block p-2.5 w-full z-20 
              text-sm text-gray-900 
              bg-gray-50 rounded-lg 
              border-l-gray-100 border-l-2 border border-gray-300 
              focus:ring-blue-500 focus:border-blue-500 
              dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white
              dark:focus:border-blue-500
            "
            type='text'
            onChange={e => {
              setCurrentPageUrl(`${BASEURL}?limit=${Number(e.target.value)}`)
            }}
            placeholder="Show 20 Results"
          />
        </Pagination>
      </div>
      <div className='
        flex
        flex-wrap
        items-center
        justify-center
      '>		
        {allPokemons ? allPokemons.map((pokemon,index)=> 
          <PokeThumbnail
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            height={pokemon.height}
            weight={pokemon.weight}
            stats={pokemon.stats}
          />
        ): "Loading..."}
      </div>
    </>
  )
}

export default PokemonsList