import React, { useEffect, useState } from "react";
import "./Row.scss";
import axios from "../../../axios";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        async function fetchdata() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchdata();
    }, [fetchURL]);



    // console.log(movies);

    return (

        <div className="row container">
            <div className="row-content-wrapper">
                <h2>{title}</h2>
                <div className='row-posters'>
                    {/* Several row posters */}
                    {movies && movies.map((movie) => ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                        <img
                            key={movie.id}
                            className={`row-poster ${isLargeRow && "row-poster-large"}`}
                            src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    )
                    )}
                </div>
            </div>

        </div>
    );
};

export default Row;
