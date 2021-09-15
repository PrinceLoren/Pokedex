import { gql } from '@apollo/client';

export const getPokemonListQuery = gql`
	query pokemons($limit: Int, $offset: Int, $search: String) {
		pokemons(query: { limit: $limit, offset: $offset, search: $search }) {
			count
			edges {
				image
				name
				types
			}
		}
	}
`;

export const getPokemonByNameQuery = gql`
	query Pokz($name: String!) {
		pokemonByName(name: $name) {
			name
			types
			maxCP
			maxHP
			image
			weight {
				minimum
				maximum
			}
			height {
				minimum
				maximum
			}
			evolutions {
				image
				name
			}
			sound
			isFavorite
		}
	}
`;
