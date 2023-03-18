import React, { useState, useEffect } from 'react';
import { useFetch } from '../utils/useFetch';
import AddFilm from '../components/AddFilm';
import { Movie } from '../react-app-env';



export default function SeriesCarousel() {
  const { data, loading, error } = useFetch('http://localhost:3001/films',);
  const [slide, setSlide] = useState(1);
  const [numFilmsPerSlide, setNumFilmsPerSlide] = useState(5);


  useEffect(() => {
    function updateNumFilmsPerSlide() {
      const width = window.innerWidth;
      if (width >= 1850) {
        setNumFilmsPerSlide(12);
      } else if (width >= 1450) {
        setNumFilmsPerSlide(9);
      } else if (width >= 1224) {
        setNumFilmsPerSlide(6);
      } else if (width >= 1024) {
        setNumFilmsPerSlide(5);
      } else if (width >= 768) {
        setNumFilmsPerSlide(4);
      } else if (width >= 500) {
        setNumFilmsPerSlide(3);
      } else {
        setNumFilmsPerSlide(2);
      }
    }
    updateNumFilmsPerSlide();
    window.addEventListener('resize', updateNumFilmsPerSlide);
    return () => window.removeEventListener('resize', updateNumFilmsPerSlide);
  }, []);


  if (loading || data.length === 0) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const films = data.allFilms.slice((slide - 1) * numFilmsPerSlide, slide * numFilmsPerSlide);

  const previousSlide = () => {
    if (slide > 1) {
      setSlide(slide - 1);
    }
  };

  const nextSlide = () => {
    if (slide < Math.ceil(data.allFilms.length / numFilmsPerSlide)) {
      setSlide(slide + 1);
    }
  };

  return (
    <div style={{  padding: '0' }}>
      <h1 className="text-2xl font-bold text-red-400" style={{ margin: "1rem" }}>Filmoteca</h1>

      <div className="carousel w-full">
        <div id={`slide${slide}`} className="carousel-item relative w-full">
          <div className="carousel carousel-center rounded-t-lg">
            {films.filter((film: Movie) => film.type === "serie").map((film: {
                id: React.Key | null | undefined;
                image1: string | undefined;
                name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
                year: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
                price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
               }) => (
                
              <div key={film.id} className="text-white font-medium ">
                <img
                  src={film.image1}
                  alt="Film"
                  style={{ width: '15rem', height: '20rem' }}
                />
                <h3>{film.name}</h3>
                <p>Año: {film.year}</p>
                <p>Precio: {film.price}€</p>
              </div>
            ))}
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              className="btn btn-circle"
              onClick={previousSlide}
              disabled={slide === 1}
            >
              ❮
            </button>
            <button
              className="btn btn-circle"
              onClick={nextSlide}
              disabled={slide === Math.ceil(data.allFilms.length )}
            >
              ❯
            </button>
          </div>
        </div>
      </div>

      <div>
        <AddFilm />
      </div>
    </div>
  );
}