import estilos from './Serie.module.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Card } from "../Componentes/Card"
import { Modal } from "../Componentes/Modal";

const API_URL = 'https://api.themoviedb.org/3';
const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';

export function Serie(){
    const [movies, setMovies] = useState([]);
    const [SelectedMovie, setSelectedMovie] = useState(null)

    useEffect(()=>{
        axios.get(`${API_URL}/search/movie?api_key=${API_key}&query=princes&language=pt-BR`)
        .then(response=>{
            console.log(response.data.results);
            setMovies(response.data.results);
        })
        .catch(error =>{
            console.log("Erro:", error)
        });
},[]);

const handleOpenModal = (movie)=>{
    setSelectedMovie(movie);
};

const handleCloseModal = ()=> {
    setSelectedMovie(null)
};

return(
    <div className={estilos.conteiner}
    >
        <figure>
            {movies.map(movie=>(
                <Card key={movie.id}
                    movie={movie}
                    onOpenModal = {handleOpenModal}
                />
            ))}
        </figure>
        {SelectedMovie && (<Modal movie={SelectedMovie} onClose={handleCloseModal}/>)}
    </div>
)

}



