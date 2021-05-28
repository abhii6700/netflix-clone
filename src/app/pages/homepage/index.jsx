import React from "react";
import NavBar from "../../components/navbar";
import Row from "../../components/row";
import Banner from "./banner";
import requests from '../../../Requests'

const HomePage = () => {
    return <div>
        <NavBar />
        <Banner />
        <Row
            title='NETFLIX ORIGINALS'
            fetchURL={requests.fetchRomanceMovies}
            isLargeRow
        />
        <Row title='Trending Now' fetchURL={requests.fetchTrending} />
        <Row title='Top Rated' fetchURL={requests.fetchTopRated} />
        <Row title='Action Movies' fetchURL={requests.fetchActionMovies} />
        <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
        <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
        <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies} />
        <Row title='Documentaries' fetchURL={requests.fetchDocumentries} />

    </div>;
};

export default HomePage;
