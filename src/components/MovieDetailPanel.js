import React from 'react';

//posterUrl, title, rated, runtime, genre, plot, actors, rating

export const MovieDetailPanel = ({title, posterUrl, rated, runtime, genre, plot, actors, rating}) =>{

    //TODO: Extract rating
    //console.log(rating);

    return(            
        <div className="movie_container_main_body">
            <div className="movie_image_container">
                <img src={posterUrl} alt={`${title} poster`} className="movie_poster"/>
            </div>
            <div className="movie_detail_panel_info">
                <div className="movie_detail_panel_title">
                    <h1>{title}</h1>
                </div>
                <div className="movie_attribute_container">
                    <p className="movie_attribute">{rated}</p>
                    <p className="movie_attribute">{runtime}</p>
                </div>
                
                <div className="movie_attribute_container">
                    <p className="movie_attribute">{genre}</p>                       
                </div>
                <h2>Plot</h2>
                <p>{plot}</p>
                <h2>Actors</h2>
                <p>{actors}</p>
            </div>
        </div>
    );
}

export default MovieDetailPanel;