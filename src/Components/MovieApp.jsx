import React, { useEffect, useState } from "react";
import './MovieApp.css'
import { CiSearch } from "react-icons/ci";
import MovieCard from "./MovieCard";

const MovieApp = ()=>{

    const [movieSearch,setMovieSearch] = useState('')
    const [movieList,setMovieList] = useState([]);
    const [searchLoading , setSearchLoading] = useState(false);
    const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=5cde7dc';

    function movieSeacrh(e){
        setSearchLoading(true)
        setMovieSearch(e.target.value)
    }

    const searchMovie = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovieList(data.Search)
    }

    function enterhMovie(){
        setSearchLoading(false)
        searchMovie(movieSearch)
        console.log("Entered Movie name :- ",movieSearch)
        console.log("List :- ",movieList )
        setMovieSearch('')
    }

    useEffect(()=>{

        searchMovie();

    },[]) 
 
    return(

        <div className="movie_app">
              <div className="app_heading">
                     <h1>Movie Center</h1>
              </div>

              <div className="searchMovie">
                <div className="searchBar">
                 <input type="text" value={movieSearch} onChange={(e)=> movieSeacrh(e)}  />
                 <button className="searchbtnicon" onClick={enterhMovie}> <CiSearch /> </button>
                 </div>
              </div>

              <div className="movieCardList">

                            {

                               searchLoading === true ? <p className="serchText">Searching.....</p> :
                                movieList.map((item,index)=>(

                                      <MovieCard key={index} movieImg={item.Poster} movieTitle={item.Title}/>

                                ))
                            } 
              </div>
        </div>
    )
}

export default MovieApp