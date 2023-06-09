import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonThumbnailComponent from '@/components/PokeThumbnail';

describe('PokemonThumbnail Component', () => {
	it("Should render properly",() => {

		const params = {
		  id: '1',
		  name: 'IVYSAUR',
		  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
		  type: 'grass',
		  height: 10,
		  weight: 130,
		  stats: [
				{
					"base_stat": 75,
					"effort": 0,
					"stat": {
						"name": "hp",
						"url": "https://pokeapi.co/api/v2/stat/1/"
					}
				},
				{
					"base_stat": 100,
					"effort": 0,
					"stat": {
						"name": "attack",
						"url": "https://pokeapi.co/api/v2/stat/2/"
					}
				},
				{
					"base_stat": 110,
					"effort": 2,
					"stat": {
						"name": "defense",
						"url": "https://pokeapi.co/api/v2/stat/3/"
					}
				},
				{
					"base_stat": 45,
					"effort": 0,
					"stat": {
						"name": "special-attack",
						"url": "https://pokeapi.co/api/v2/stat/4/"
					}
				},
				{
					"base_stat": 55,
					"effort": 0,
					"stat": {
						"name": "special-defense",
						"url": "https://pokeapi.co/api/v2/stat/5/"
					}
				},
				{
					"base_stat": 65,
					"effort": 0,
					"stat": {
						"name": "speed",
						"url": "https://pokeapi.co/api/v2/stat/6/"
					}
				}
		  ],
		}
		render(<PokemonThumbnailComponent {...params} />);

		const pElement = screen.getByTestId('pokemon-name');
		expect(pElement).toHaveTextContent('IVYSAUR');
	});
});