//#region Imports
//CSS Imports
import './App.css';

//React Imports
import React from 'react';
import { useState, useEffect, useRef } from "react"

//Util Imports
import {convertToLowerCase, getMovieDetailsById, retrieveStorageData, saveData} from './utils';
import {getMoviesBySearchTerm} from './utils';

//Component Imports
import Modal from './components/Modal';
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import MovieDetailPanel from './components/MovieDetailPanel';
import MovieList from './components/MovieList';
//#endregion

function App() {
  let movie = null; //getMovieDetailsById();

  // console.log(movie);

  //States
  const[searchTerm, setSearchTerm] = useState("Batman");
  const[isLoading, setIsLoading] = useState(false);
  const[movies, setMovies] = useState([]);
  const[error, setError] = useState(null);

  const movieTitleTerm = useRef(null);

  //#region Old Code
  // window.onload = async () => {
  //   console.log("Binding parsed properties");
  //   const movie = await getMovieDetailsById();
  //   //const convertData = await convertToLowerCase(movie);
  //   // convertData && saveData(convertData);

  //   console.log(movie);
  //   saveData(movie);
  // }

  // useEffect(() => {
  //   //document.title = `You clicked ${count} times`;
  //   setMovies((prev) =>{
  //     //return getMovieDetailsById();
  //   });   
  // });
  //#endregion

  //const {ImdbID, Title, Type, Poster, Rated, Ratings, Genre, Runtime, Plot, Actors} = retrieveStorageData("movie");

  //console.log(title);

  //<MovieCard title={Title} type={Type} posterUrl={Poster}/>

  const UpdateMovieList = () => {
    getMoviesBySearchTerm("Batman").then((res) => {
      setMovies((prev) =>{
        return res.Search;
      }); 
    });

    // setMovies((prev) =>{
    //   return getMoviesBySearchTerm("Batman");
    // }); 
  }

  useEffect(() => {
    setIsLoading(true);

    getMoviesBySearchTerm(searchTerm)
      .then((movieArr) => {
        console.log(movie);
        //console.log("Effect anchoring applied");
        setMovies((prev) =>{
          return movieArr.Search;
        });
      })
      .catch((err) =>{
        console.log(err);
        setMovies([]);
        setError(err);
      })
      .finally(() =>{
        setIsLoading(false);
      });    
  }, []);

  function handleMovieSearch(e){
    e.preventDefault();

    console.log("submitted", e);
    console.log(movieTitleTerm.current.value);

    setSearchTerm(movieTitleTerm.current.value);
  }

  function onCloseHandler(){
    console.log("closing modal");
  }

  return (
    //Parent wrapper for the purpose of jsx
    <> 
      <h1 className="movie_site_title">Welcome to big movie search engine</h1>

      <button onClick={UpdateMovieList}>Update Movie List</button>

      <form onSubmit={handleMovieSearch}>
        <input type="text" placeholder="" ref={movieTitleTerm}/>
        <button>Submit</button>
      </form>

      {/* {isLoading ? <Spinner></Spinner> : <MovieList data={movies} info="Movie Render List"/>} */}

      <Modal show={true} onClose={onCloseHandler}>
        <p>Test Params</p>
      </Modal>
      
      {/* <div className="movie_detail_panel_container">     
        <MovieDetailPanel title={Title} posterUrl={Poster} rated={Rated} runtime={Runtime} genre={Genre} plot={Plot} actors={Actors} rating={Ratings}/>
      </div> */}
    </>
  );
}

export default App;
