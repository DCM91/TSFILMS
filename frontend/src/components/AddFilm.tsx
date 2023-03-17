import React, { useEffect, useState } from "react";
import usePost from "../utils/usePost";

const AddFilm = (): JSX.Element => {

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image1, setImage1] = useState("");
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { post, loading, error, data } = usePost({
    url: "http://localhost:3001/filmsPost",
  });

  const handleAddFilm =  () => {
    try {
     setReload(true);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (reload) {
      window.location.reload();
    }
  }, [reload]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    switch (id) {
      case "name":
        setName(value);
        break;
      case "year":
        setYear(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "image":
        setImage1(value);
        break;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const newFilm = {
        name,
        year,
        price: parseFloat(price),
        description,
        image1,
      };
      await post(newFilm);
      if (error) {
        console.log('este es el ERROR', error);
        window.alert(error);

      } else{ setTimeout(() => {
        setIsLoading(false);
        handleAddFilm();
      }, 2000);}
    } catch (error) {
      console.log('este es el ERROR', error);
      window.alert(error);
    }
  };



  if (loading) return <button className="btn loading">loading</button>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <button
        style={{ margin: "1rem" }}
        className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow-md"
        onClick={() => setIsOpen(true)}
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
                background:  "#090a0f",
                overflowY: "hidden"
              }}
            >
              <h3 className="font-bold text-2xl text-red-500 mb-4">
                Agrega una película
              </h3>
              {isLoading && <div className="spinner">Cargando...</div>}
              <form onSubmit={handleSubmit} className="form">
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
                    onChange={handleChange}
                    className="input input-success w-full"
                  />
                  {name === '' && <p className="text-red-500">Required</p>}
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
                    onChange={handleChange}
                    className="input input-success w-full"
                  />
                  {year === '' && <p className="text-red-500">Required</p>}
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
                    onChange={handleChange}
                    className="input input-success w-full"
                  />
                  {price === '' && <p className="text-red-500">Required</p>}
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
                    className="textarea textarea-success w-full"
                    value={description}
                    placeholder= "Añade tu descripción"
                    onChange={handleChange}
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
                    onChange={handleChange}
                    className="input input-success w-full"
                  />
                  {image1 === '' && <p className="text-red-500">Required</p>}
                </div>
                <div className="modal-action">
                  {data ? (
                    <button className="btn loading bg-orange-500 hover:bg-orange-600">loading</button>
                  ) : (
                    <button type="submit" className="btn bg-orange-500 hover:bg-orange-600">
                      Agregar
                    </button>
                  )}
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