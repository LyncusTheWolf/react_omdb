import React, { useRef } from "react";

export const SearchBar = ({onSubmitCallback}) => {
    const searchTerm = useRef(null);
    const searchType = useRef(null);

    function handleMovieSearch(e){
        e.preventDefault();
    
        //console.log("submitted", e);
        //console.log(movieTitleTerm.current.value);
    
        //setSearchTerm(movieTitleTerm.current.value);
        onSubmitCallback(searchTerm.current.value, searchType.current.value);
    }

    return (
        <form onSubmit={handleMovieSearch}>
            <input type="text" placeholder="" ref={searchTerm}/>
            <select ref={searchType}>
                <option value="">Any</option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
                <option value="game">Game</option>
            </select>
            <button>Search</button>
        </form>
    );
}

export default SearchBar;