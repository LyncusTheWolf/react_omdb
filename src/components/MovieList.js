import MovieCard from "./MovieCard"


export const MovieList = ({data, info}) => {
    console.log("Parsing out movie data");
    console.log(data);

    if(data.length){
        console.log("Data exist to be rendered");
        return(
            <div>
                <h2>{info}</h2>
                <div className="movie_list_container">                
                        {/* <MovieCard title={"Steve"} type={"Movie"} posterUrl={""}/>
                        <MovieCard title={"Steve"} type={"Movie"} posterUrl={""}/>
                        <MovieCard title={"Steve"} type={"Movie"} posterUrl={""}/>                 */} 
                        {data.map((movieElem)=>{                         
                            return(
                                <MovieCard key={movieElem.imdbID} title={movieElem.Title} type={movieElem.Type} posterUrl={movieElem.Poster} id={movieElem.imdbID}/>
                            )
                        })}                             
                </div>
            </div>
        )
    } 

    return(
        <div>
            <h2>{info}</h2>
            <div className="movie_list_container">
            </div>
        </div>
    )
    
}

export default MovieList;