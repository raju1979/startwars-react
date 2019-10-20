import React, { useState, useEffect } from 'react';
import API from '../config/api';

import { trackPromise } from 'react-promise-tracker';

import Jumbotron from 'react-bootstrap/Jumbotron';

import moment from 'moment';

import {getImg} from '../shared/GetImg';

function MovieComponent({ match }) {
    console.log('In cmove', match);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await trackPromise(API.get(`https://swapi.co/api/films/${match.params.id}/`));
            setMovie(response.data);
            console.log(response)
        };

        fetchData();
    }, []);

    const jumbotronStyle = (props) => {

        const episodeId = getImg(movie.episode_id);

        return ({
            backgroundImage: "url(" + episodeId + ")",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        })

    }

    const textShadow = {
        textShadow: '1px 1px #000000'
    }

    const tileTextGlow =
        { "fontSize": "80px", "color": "#fff", "textAlign": "center", "textShadow": "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073" }



    return (
        <React.Fragment>
            <div className='row'>
                <div className='col-md-12'>
                    <Jumbotron style={jumbotronStyle()}>
                        <h1 style={tileTextGlow} className="display-4 text-primary">{movie.title}</h1>
                        <p className="lead text-white" style={textShadow}>{movie.opening_crawl}</p>
                    </Jumbotron>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3 text-primary'>Producer</div>
                <div className='col-md-3 text-secondary'>{movie.producer}</div>
            </div>
            <div className='row'>
                <div className='col-md-3 text-primary'>Released</div>
                <div className='col-md-3 text-secondary'>{moment(movie.release_date).format('MMMM Do YYYY')}</div>
            </div>

        </React.Fragment>
    )
}

export default MovieComponent;