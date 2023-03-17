import React, { useState } from "react";
import usePost from "../utils/usePost";

const AddFilm = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image1, setImage1] = useState("");

  const { post, loading, error, data } = usePost({
    url: "http://localhost:3001/filmsPost",
  });

  const openModal = () => {
    setIsOpen(!isOpen);
  };
  const handleName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(e.target.value);
  };
  const handleYear = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setYear(e.target.value);
  }
  const handlePrice = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPrice(e.target.value);
  }
  const handleDescription = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setDescription(e.target.value);
  };
  const handleImage1 = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setImage1(e.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newFilm = {
      name,
      year,
      price: parseFloat(price),
      description,
      image1,
    };
    post(newFilm);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        style={{ margin: "1rem" }}
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
            <div
              className="modal-box"
              style={{
                color: "black",
                background:
                  "radial-gradient(ellipse at center ,#1a4474 10%,#090a0f 90%)",
              }}
            >
              <h3 className="font-bold text-2xl text-red-500 mb-4">
                Agrega una película
              </h3>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-white mb-2"
                  >
                    Nombre de la película
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Spiderman 2"
                    onChange={handleName}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="year"
                    className="block text-lg font-medium text-white mb-2"
                  >
                    Año de lanzamiento
                  </label>
                  <input
                    type="number"
                    id="year"
                    value={year}
                    placeholder="1999"
                    onChange={handleYear}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="price"
                    className="block text-lg font-medium text-white mb-2"
                  >
                    Precio (en euros)
                  </label>
                  <input
                    type="number"
                    id="price"
                    value={price}
                    placeholder= "10"
                    onChange={handlePrice}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-lg font-medium text-white mb-2"
                  >
                    Descripción
                  </label>
                  <textarea
                    id="description"
                    className="textarea textarea-bordered w-full"
                    value={description}
                    placeholder= "Añade tu descripción"
                    onChange={handleDescription}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-lg font-medium text-white mb-2"
                  >
                    URL de la imagen
                  </label>
                  <input
                    type="url"
                    id="image"
                    value={image1}
                    onChange={handleImage1}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="modal-action">
                  <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                    Agregar
                  </button>
                  <label
                    htmlFor="my-modal"
                    className="btn btn-active bg-red-500 hover:bg-red-600"
                  >
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
