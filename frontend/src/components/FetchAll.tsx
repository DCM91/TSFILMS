import React from "react";
import { useFetch } from "../utils/useFetch";
import { Movie } from "../react-app-env";
import { RiFilmFill } from "react-icons/ri";
import AddFilm from "./AddFilm";




export default function Films() {
  const { data, loading, error } = useFetch("http://localhost:3001/films");
  const films = data.allFilms;
  if (loading || data.length === 0) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div
    className="col-span-5 row-span-5"
 
    >
    <h1 className="flex text-5xl w-100 p-2 px-4 font-bold bg-gradient-to-r from-red-500 to-yellow-500 text-white"><RiFilmFill className="text-black p-1 mr-4 text-6xl -rotate-45 -backdrop-hue-rotate-30" />Filmoteca</h1>
     {"COMPONENTE FILTROOOOOOOOOOOOOOO "}
     <AddFilm />
      {films.map((film: Movie) => (
        <div
          key={film.id}
          className="card-compact bg-gray-700 shadow-xl "
          style={{  textOverflow:"ellipsis",  width: "30rem", height:"40rem", backgroundColor:"#000" }}
        >
          {" "}
          {/* Add div styles */}
          <figure className="px-10 pt-10">
          <img 
            className="card-body"
            src={film.image1} 
            alt={film.name} 
            style={{ height:"25rem"}}

            />
            </figure>
            {" "}
          <div className="card-body" >
            <h2 className="card-title">{film.name}</h2>{" "}
            {/* <p className="text-gray-700 text-base" style={{height:"5rem", overflow:"hidden", textOverflow:"ellipsis"}}>{film.description}</p>{" "} */}
          </div>
          <div className="card-actions justify-end" style={{margin:".8rem"}}>
            <div className="badge badge-warning">{film.type}</div> 
            <div className="badge badge-warning">{film.year}</div> 

            </div>
        </div>
      ))}
    </div>
  );
}
