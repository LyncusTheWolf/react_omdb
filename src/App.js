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
import SearchBar from './components/SearchBar';
import Paginator from './components/Paginator';
import NavBar from './components/NavBar';
//#endregion

function App() {
  let movie = null; //getMovieDetailsById();

  // console.log(movie);

  //States
  const[showMovieDetailDialog, setMovieDetailDialog] = useState(true);
  const[searchTerm, setSearchTerm] = useState("Batman");
  const[searchType, setSearchType] = useState(null);
  const[searchResultTotal, setSearchResultTotal] = useState(1);
  const[searchResultPage, setSearchResultPage] = useState(1);
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

  const UpdateMovieList = async () => {
    
  }

  useEffect(() => {
    setIsLoading(true);

    //console.log("Re-rendering page");

    getMoviesBySearchTerm(searchTerm, searchResultPage, {type: searchType} )
      .then((movieResults) => {
        //console.log(movie);
        //console.log("Effect anchoring applied");
        setMovies((prev) =>{
          console.log(movieResults.totalResults);
          //setSearchResultPage(1);
          setSearchResultTotal(Math.ceil(movieResults.totalResults / 10));
          return movieResults.Search;
        });
      })
      .catch((err) =>{
        console.log(err);
        setMovies([]);
        setError(err);
      })
      .finally(() =>{
        setIsLoading(false);
        setMovieDetailDialog(true);
      });     
  }, [searchTerm, searchType, searchResultPage]);

  function handleMovieSearch(e){
    e.preventDefault();

    console.log("submitted", e);
    console.log(movieTitleTerm.current.value);

    setSearchTerm(movieTitleTerm.current.value);
  }

  function handleSearchSubmit(e){
    e.preventDefault();
    console.log("Submit Detected");
  }

  function onCloseHandler(){
    console.log("closing modal");
    setMovieDetailDialog(false);
    //UpdateMovieList();
  }

  return (
    //Parent wrapper for the purpose of jsx
    <div>
      <NavBar/>
      <div className="MovieSite_Container"> 
        {/* <button onClick={UpdateMovieList}>Update Movie List</button> */}

        {/* <form onSubmit={handleMovieSearch}>
          <input type="text" placeholder="" ref={movieTitleTerm}/>
          <button>Submit</button>
        </form> */}

        <SearchBar onSubmitCallback={(term, type) => {
          setSearchResultPage(1);
          setSearchTerm(term);
          setSearchType(type);
        }}/>

        <Paginator currentPage={searchResultPage} pageTotal={searchResultTotal} onPageUpdateCallback={(pageNum)=>{setSearchResultPage(pageNum)}}/>

        <div className="MovieSearchResults_Container">
          {isLoading ? <Spinner></Spinner> : <MovieList data={movies} info="Displaying search results"/>}

          {/* <Modal show={showMovieDetailDialog} onClose={onCloseHandler}>
          </Modal> */}
          
          {/* <div className="movie_detail_panel_container">     
            <MovieDetailPanel title={Title} posterUrl={Poster} rated={Rated} runtime={Runtime} genre={Genre} plot={Plot} actors={Actors} rating={Ratings}/>
          </div> */}

          <Paginator currentPage={searchResultPage} pageTotal={searchResultTotal} onPageUpdateCallback={(pageNum)=>{setSearchResultPage(pageNum)}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
