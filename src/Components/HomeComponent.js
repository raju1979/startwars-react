import React, { useState, useEffect } from 'react';

import { sortBy } from 'lodash-es';
import API from '../config/api';
import { trackPromise } from 'react-promise-tracker';

import MovieCard from './MovieCard';

function HomeComponent() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Update the document title using the browser API

        async function fetchData() {
            const response =await  trackPromise(API.get(`films/`));
            console.log(response);
            let resultsArray = response.data.results;
            resultsArray = sortBy(resultsArray, o => o.episode_id)
            setMovies(resultsArray);
        }

        fetchData();

        // document.title = `First Movie is ${movies[0].title}`;
    }, []);

    function cardFn() {
        const cardItems = movies.map((movie) =>
            <div className='col-md-4 mb-2' key={movie.episode_id}>
                <MovieCard movie={movie} />
            </div>
        )
        return cardItems;
    }

    return (
        <React.Fragment>
            <div className='row'>
                {cardFn()}                
            </div>
        </React.Fragment>
    )
}

export default HomeComponent;