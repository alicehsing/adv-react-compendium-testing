import styles from '../App.css';
export default function PokemonCard({ name, image, type, defenseLevel }) {
  return (
    <div className={styles.card}>
      <h3>{name.toUpperCase()}</h3>
      <p>Type: {type}</p>
      <p>Defense Level: {defenseLevel}</p>
      <img alt="pokemon" src={image} />
    </div>
  );
}
