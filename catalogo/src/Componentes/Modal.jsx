import estilo from  './Modal.module.css';

export function Modal({movie, onClose}){
    if(!movie){
        return null;
    }
    console.log("Modal renderizada")
    console.log(movie);
    
    return(
        <div className={estilo.modalback}>
            <div className={estilo.ModalConteiner}>
                <h2>{movie.title}</h2>
                <button onClick={onClose}>X</button>

                <img className={estilo.imgDetalhes} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <p>{`Popularidade: ${movie.popularity}`}</p>
                <p>{`Data de Lançamento: ${movie.release_date}`}</p>
                <p>{`Quantidade de votos: ${movie.vote_count}`}</p>
                <p>{`Sinopse: ${movie.overview}`}</p>




            </div>
        </div>

    )
}