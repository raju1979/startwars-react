import React from 'react';
import { useHistory } from "react-router-dom";

import Truncate from 'react-truncate';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import {getImg} from '../shared/GetImg';


function MovieCard(props) {
    const movie = props.movie;
    let history = useHistory();

    const gotoMovie = (e) => {
        const url = movie.url;
        const pathname = new URL(url).pathname;
        const urlEndNum = pathname.split("/")[3];
        history.push(`/movie/${urlEndNum}`);
    }

    const cardImgStyle = {
        height: '150px'
    }

    return (
        <Card style={{ width: '90%' }}>
            <Card.Img style={cardImgStyle} variant="top" src={getImg(movie.episode_id)} />
            <Card.Body>
                <Card.Title>
                    <Truncate lines={1} ellipsis={<span>...</span>}>
                        {movie.title}
                    </Truncate>
                </Card.Title>
                <Card.Text>
                    <Truncate lines={3} ellipsis={<span>...</span>}>
                        {movie.opening_crawl}
                    </Truncate>
                </Card.Text>
                <Button id={"hello"} variant="primary" onClick={gotoMovie}>Go somewhere</Button>
            </Card.Body>
        </Card>
    )

}

export default MovieCard;