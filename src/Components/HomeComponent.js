import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import API from '../config/api';

import Truncate from 'react-truncate';

function HomeComponent() {

    const [movies, setMovies] = useState([]);
    console.log(movies)

    useEffect(() => {
        // Update the document title using the browser API

        async function fetchData() {
            const response = await API.get(`films/`);
            console.log(response);
            setMovies(response.data.results);
        }

        fetchData();

        // document.title = `First Movie is ${movies[0].title}`;
    }, []);

    function cardFn() {
        const cardItems = movies.map((movie) =>
        <div className='col-md-4 mb-2' key={movie.episode_id}>
            <Card style={{ width: '90%' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        <Truncate lines={3} ellipsis={<span>...</span>}>
                            {movie.opening_crawl}
                        </Truncate>                        
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
        )
        return cardItems;
    }

    return (
        <React.Fragment>
            <div className='row'>
                {cardFn()}                
            </div>
            <div className='row'>
                {JSON.stringify(movies)}
            </div>
        </React.Fragment>
    )
}

export default HomeComponent;