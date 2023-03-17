import React, { useState } from 'react';

const AddFilm= (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  

  // try{
  // const response = await fetch("http://localhost:3001/filmsPost", {
  //   method: 'POST',
  //   headers: {},
  //   body: JSON.stringify({
  //     name: 'Spiderman',
  //     year: '2022',
  //     price: 44,
  //     description: 'Spider-Man (conocida en Hispanoamérica como El Hombre Araña) es una película de superhéroes estadounidense de 2002 basada en el personaje del mismo nombre de Marvel Comics. Dirigida por Sam Raimi a partir de un guion de David Koepp, es la primera entrega de la trilogía de Spider-Man de Raimi y está protagonizada por Tobey Maguire como el personaje principal, junto a Willem Dafoe, Kirsten Dunst, James Franco, Cliff Robertson y Rosemary Harris. La película narra la historia del origen de Spider-Man y su carrera temprana de superhéroe. Después de ser mordido por una araña alterada genéticamente, el adolescente marginado Peter Parker desarrolla habilidades sobrehumanas similares a las de una araña y adopta una identidad de superhéroe enmascarado para luchar contra el crimen y la injusticia en la ciudad de Nueva York, enfrentándose al siniestro Duende Verde (Dafoe) en el proceso.'
  //   })
  // });
  // if (response.ok) {
  //   const result = await response.json();
  //   console.log(result);
  //   }
  // } catch (err) {
  //   console.error(err);
  // }
  return (
<div>
  <button
    style={{ margin: '1rem' }}
    className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow-md"
    onClick={openModal}
  >
    AddFilm +
  </button>

  {isOpen && (
    <>
    <input
      type="checkbox"
      id="my-modal"
      className="modal-toggle"
      checked={isOpen}
      onChange={() => setIsOpen(false)}
    />
    <div className="modal">
      <div className="modal-box" style={{ background: 'radial-gradient(ellipse at center ,#1a4474 10%,#090a0f 90%)'}}>
        <h3 className="font-bold text-2xl text-red-500 mb-4">
          Agrega una película
        </h3>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-white mb-2">
              Nombre de la película
            </label>
            <input type="text" id="name" className="input input-bordered w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="year" className="block text-lg font-medium text-white mb-2">
              Año de lanzamiento
            </label>
            <input type="number" id="year" className="input input-bordered w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-lg font-medium text-white mb-2">
              Precio (en euros)
            </label>
            <input type="number" id="price" className="input input-bordered w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-lg font-medium text-white mb-2">
              Descripción
            </label>
            <textarea id="description" className="textarea textarea-bordered w-full"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-lg font-medium text-white mb-2">
              URL de la imagen
            </label>
            <input type="url" id="image" className="input input-bordered w-full" />
          </div>
          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Agregar
            </button>
            <label htmlFor="my-modal" className="btn btn-active bg-red-500 hover:bg-red-600">
              Cerrar   
            </label>
          </div>
        </form>
      </div>
    </div>
  </>
  
  )}
</div>

  );
};

export default AddFilm;
