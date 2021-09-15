import { useState, useEffect, useCallback } from 'react';
import PokemonListItem from '../../components/PokemoListItem/PokemonListItem';
import client from '../../apollo-client';
import { getPokemonListQuery } from '../../graphql/pokemon';
import styles from './Pokemons.module.scss';
import Head from 'next/head';

export default function PokemonsPage() {
	const [count, setCount] = useState(0);
	const [offset, setOffset] = useState(null);
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(true);

	const loadPokemon = useCallback(() => {
		const getPokemonList = async () => {
			setLoading(true);
			const { data } = await client.query({
				query: getPokemonListQuery,
				variables: { limit: 14, offset },
			});

			const { count, edges } = data.pokemons;
			setCount(count);
			setOffset(offset + 14);
			setPokemons([...pokemons, ...edges]);

			setLoading(false);
		};

		getPokemonList();
	}, [offset, setLoading, pokemons]);

	useEffect(() => {
		loadPokemon();
	}, []);

	return (
		<>
			<div className={styles.PageWrapper__title}>Pokedex</div>
			<div className={styles.PageWrapper}>
				<Head>
					<title>Pokedex</title>
					<meta property='og:title' content='Pokedex' key='title' />
				</Head>
				{pokemons.map((item, index) => {
					return (
						<div className={styles.PageWrapper__List} key={index}>
							<PokemonListItem
								name={item.name}
								image={item.image}
								detailUrl={`/pokemons/${item.name}`}
								subtitle={item.types + ' '}
							/>
						</div>
					);
				})}
			</div>

			{loading && (
				<div className={styles.PageWrapper__LoadWrap}>Loading pokemons...</div>
			)}
			{!loading && pokemons.length < count && (
				<div className={styles.PageWrapper__Btn} onClick={loadPokemon}>
					More
				</div>
			)}
		</>
	);
}
