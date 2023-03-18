/// <reference types="react-scripts" />
export interface Movie {
    id?: number;
    type: string;
    name: string;
    image1: string;
    year: string;
    price: number;
    description?: string;
  }
  export interface MovieData {
    allFilms: Movie[];
  }