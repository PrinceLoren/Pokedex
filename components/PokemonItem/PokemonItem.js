import styles from './PokemonItem.module.scss';

const PokemonDetail = ({
	name,
	image,
	types,
	weightMin,
	weightMax,
	maxCP,
	maxHP,
	HeightMin,
	HeightMax,
	sound,
}) => {
	function playMuse() {
		let music = new Audio(sound);
		music.play();
	}

	return (
		<div className={styles.PokemonItem}>
			<div className={styles.PokemonItem__Image}>
				<img src={image} alt={name} />
				<button
					className={styles.PokemonItem__Button}
					onClick={() => playMuse()}
				>
					Sound
				</button>
			</div>
			<div className={styles.PokemonItem__Description}>
				<div className={styles.PokemonItem__Name}>{name}</div>
				<div className={styles.PokemonItem__Types}>Type - {types}</div>
				<div className={styles.PokemonItem__LaneCp}>
					<span>CP: {maxCP}</span>
				</div>
				<div className={styles.PokemonItem__LaneHp}>
					<span>HP: {maxHP}</span>
				</div>
				<div className={styles.PokemonItem__Weight}>Weight</div>
				<span className={styles.PokemonItem__MinMax}>
					{weightMin} - {weightMax}
				</span>
				<div className={styles.PokemonItem__Height}>Height</div>
				<span className={styles.PokemonItem__MaxMin}>
					{HeightMin} - {HeightMax}
				</span>
			</div>
		</div>
	);
};

export default PokemonDetail;
