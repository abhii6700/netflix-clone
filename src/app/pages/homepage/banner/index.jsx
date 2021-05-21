import React, { useEffect, useState } from "react";
import "./Banner.scss";
import axios from "../../../../axios";
import requests from "../../../../Requests";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

    const trunCate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    };

    return (
        <div
            className="banner container"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}
        >
            <div className="banner-content-wrapper">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className="banner-button-play">Play</button>
                    <button className="banner-button">More Info</button>
                </div>
                <p className="banner-description">
                    {trunCate(`${movie?.overview}`, 150)}
                </p>
            </div>
            <div className="banner-fade-bottom"></div>
        </div>
    );
}

export default Banner;
