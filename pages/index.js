import Link from 'next/link';
import styles from './Home.module.scss';
import Head from 'next/head';

export default function Home() {
	return (
		<div className={styles.Home}>
			<Head>
				<title>Welcome</title>
				<meta property='og:title' content='Welcome' key='title' />
				<meta name='description' content='Pokemon list demo site' />
			</Head>
			<h1>Welcome to Pokedex</h1>
			<div className={styles.Home_Wrapper}>
				<Link href='/pokemons' passHref>
					<div className={styles.Home__Card}>Go To Pokemons</div>
				</Link>
			</div>
		</div>
	);
}
