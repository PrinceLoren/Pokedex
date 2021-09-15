import Link from 'next/link';
import styles from './PokemonListItem.module.scss';

const PokemonListItem = ({ name, types, image, detailUrl }) => {
	return (
		<Link href={detailUrl || '/'} passHref>
			<div className={styles.Pokemon}>
				<img src={image} alt={name} className={styles.Pokemon__Image} />
				<div className={styles.Pokemon__TextWrapper}>
					<div className={styles.Pokemon__Name}>{name}</div>
					<div className={styles.Pokemon__Types}>{types}</div>
				</div>
			</div>
		</Link>
	);
};

export default PokemonListItem;
