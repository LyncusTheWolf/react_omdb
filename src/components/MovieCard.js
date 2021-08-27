
import React from 'react';
import styled from 'styled-components';
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

const MovieCard_Container = styled.div`
    width: 15%;
    margin: 4px;
    border: 1px solid #ddd;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
`;

const MovieCard_Poster = styled.img`
    width: 96%;
    margin: 2%;
`;

const MovieCard_Info = styled.div`
    display:flex;
    flex-direction: column;
`;

const MovieCard_Title = styled.p`
    margin: 4px 16px;
`;

const MovieCard_Button = styled.button`
    width: 64px;
    margin-left: auto;
    margin-right: auto;
`;

export const MovieCard = ({title, type, posterUrl, id}) =>{

    //console.log(posterUrl);

    function handleMovieCard(idParse){
        alert(idParse);
    }

    return (
        <MovieCard_Container>
            <MovieCard_Poster src={posterUrl} alt={`${title} poster`}/>
            <MovieCard_Info>
                <MovieCard_Title>{title}</MovieCard_Title>
                <MovieCard_Button onClick={() =>{handleMovieCard(id);}}>{type}</MovieCard_Button>
            </MovieCard_Info>
        </MovieCard_Container>
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