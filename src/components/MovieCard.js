
import React from 'react';
import PropTypes from 'prop-types';
import { getMovieDetailsById } from '../utils';

//Object destructuring --- props.title -> {title}
// function MovieCard({title}) {
//     return (
//         <>
//         <h1 className="primary_color" style={{backgroundColor: 'grey'}}>{title}</h1>

//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </>
//     );
// }

export const MovieCard = ({title, type, posterUrl, id}) =>{

    //console.log(posterUrl);

    function handleMovieCard(idParse){
        alert(idParse);
    }

    return (
        <div className="movie_card_container">
            <img src={posterUrl} alt={`${title} poster`} className="movie_poster"/>
            <div className="movie_card_info">
                <p>{title}</p>
                <button className="movie_card_button" onClick={() =>{handleMovieCard(id);}}>{type}</button>
            </div>
        </div>
    );
}

// MovieCard.defaultProps = {
//     title: "",
//     type: "",
//     posterUrl: ""
// }

// MovieCard.propTypes = {
//     title : PropTypes.string,
//     type : PropTypes.string,
//     posterUrl : PropTypes.string
// }

export default MovieCard;