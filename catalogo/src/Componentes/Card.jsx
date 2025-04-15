import estilos from './Card.module.css';

export function Card({ movie, onOpenModal }) {
    return (
        <div className={estilos.conteiner} onClick={() => onOpenModal(movie)}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}  />
            <p>{movie.overview}</p>
        </div>
    );
}
