import { getPokemonByNameQuery } from '../../graphql/pokemon';
import Head from 'next/head';
import PokemonItem from '../../components/PokemonItem/PokemonItem';
import client from '../../apollo-client';
import styles from './Pokemons.module.scss';
import Link from 'next/link';

export const getServerSideProps = async ({ params: { name } }) => {
	let pokemon = null;

	if (name) {
		const { data } = await client.query({
			query: getPokemonByNameQuery,
			variables: { name },
		});
		console.log(data);

		pokemon = (data && data.pokemonByName) || null;
	}

	return {
		props: { pokemon },
	};
};

const PokemonDetailPage = ({ pokemon }) => {
	const {
		name,
		types = [],
		image,
		weight = {},
		height = [],
		maxHP,
		maxCP,
		evolutions = [],
		sound,
		isFavorite,
	} = pokemon || {};

	return (
		<div>
			<Head>
				<title>{name} - Pokemon List</title>
				<meta
					property='og:title'
					content={`${name} - Pokemon List`}
					key='title'
				/>
			</Head>

			<PokemonItem
				name={name}
				types={types + ' '}
				image={image}
				weightMax={weight.maximum}
				weightMin={weight.minimum}
				maxCP={maxCP}
				maxHP={maxHP}
				HeightMin={height.minimum}
				HeightMax={height.maximum}
				sound={sound}
			/>

			{evolutions.length >= 1 ? (
				<div className={styles.Evo}>Evolutions</div>
			) : (
				''
			)}

			{evolutions.map((item, index) => {
				return (
					<>
						<Link href={`/pokemons/${item.name}`} passHref>
							<div key={index} className={styles.PokemonEvo}>
								<div className={styles.PokemonEvo__Name}>{item.name}</div>
								<img src={item.image} alt={item.name} />
							</div>
						</Link>
					</>
				);
			})}
		</div>
	);
};

export default PokemonDetailPage;
