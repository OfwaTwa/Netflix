import React, { useState, useEffect } from "react";
import { getMovies } from "../../../services/movies";
import moment from 'moment';

const MovieList = (props) => {
    const [movies, setmovies] = useState([]);
    const [isReady, setisReady] = useState(false);
    const [hasError, sethasError] = useState(false);
    const [error, seterror] = useState(null);

    useEffect(() =>{
        async function fetchData(){
            const movies = await getMovies();
            if (!movies.hasError){
                setmovies(movies);
                setisReady(true);
            } else{
                sethasError(true);
                seterror(movies.error)
            }
        }
        fetchData()
    });

    return(
        <>
            {
                isReady ?
                    <ListComponent
                        movies={movies}
                    />
                    : hasError ?
                    <ErrorComponent
                        error={error}
                    />
                    : <LoadingComponent/>
            }
        </>
    )
}

const ListComponent = (props) => (
    <>
        {
            props.movies.length > 0 ?
                props.movies.map((movie) => (
                    <MovieCard
                        movie={movie}
                    />
                ))
            : <p>No hay ninguna película registrada</p>
        }
    </>
)

const MovieCard = ({movie}) => (
    <>
        <div className="movie_card_container">
            <div className="movie_card_info">
                <div className="movie_card_info_basic_info">
                    <p>{movie.title} </p>
                    <p>{movie.description} </p>
                </div>
                <div>
                    <p>
                        Costo de la entrada: <span>
                            {movie.ticketPrice}
                        </span>
                    </p>
                    <p>
                        Duración: <span>
                            {movie.duration} (min.)
                        </span>
                    </p>
                    <p>
                        Disponible en cines: <span>
                            {movie.isOnCinemas ? 'SI' : 'NO'}
                        </span>
                    </p>
                </div>
            </div>
            <div className="movie_card_shedules_container">
                <p>Horarios disponibles</p>
                <div className="movie_card_shedules">
                    {
                        movie.schedules.length > 0 ?
                            movie.schedules.map(schedule => (
                                <p>{moment(schedule.time).format('HH:mm')}</p>
                            ))
                        : <p>No hay horarios disponibles</p>
                    }
                </div>
            </div>
        </div>
    </>
)

const ErrorComponent = (props) => (
    <>
        <p>Ups! algo falló al traer la wea</p>
        <p>{props.error}</p>
    </>
)

const LoadingComponent = (props) => (
    <>
        <p>Cargando...</p>
        <img src="https://png.pngtree.com/png-vector/20191118/ourmid/pngtree-loading-logo-design-circle-loading-illustration-on-white-background-png-image_1996461.jpg" alt="Je" />
    </>
)


export default MovieList;