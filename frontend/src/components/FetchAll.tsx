import React from "react";
import { useFetch } from "../utils/useFetch";
import { Movie } from "../react-app-env";

export default function Films() {
  const { data, loading, error } = useFetch("http://localhost:3001/films");
  console.log();
  const films = data.allFilms;
  if (loading || data.length === 0) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div
      className="container mx-auto my-5"
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      {films.map((film: Movie) => (
        <div
          key={film.id}
          className="max-w-sm rounded overflow-hidden shadow-lg bg-black"
          style={{ margin: 10 }}
        >
          {" "}
          {/* Add div styles */}
          <img className="w-full h-64" src={film.image1} alt={film.name} />{" "}
          {/* Add img styles */}
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{film.name}</h2>{" "}
            {/* Add h2 styles */}
            <p className="text-gray-700 text-base">{film.description}</p>{" "}
            {/* Add p styles */}
          </div>
        </div>
      ))}
    </div>
  );
}
