import { Request, NextFunction, Response } from 'express';
import { Movie } from "../types"

interface CustomRequest extends Request {
  requestInstant?: Date;
}

const validateFilm = (req: CustomRequest, res: Response, next: NextFunction) => {
  console.log('Request Type:', req.method);
  req.requestInstant = new Date();
  const film: Movie = req.body;

  // Validar la descripción
  let description = film.description || '';
  if (description.trim().length === 0) {
    description = 'Sin descripción';
  }

  // Asignar la descripción validada al objeto "film"
  film.description = description;

  // Validar el resto de los campos
  if (!film.name || film.name.trim().length === 0) {
    res.status(400).send({ message: 'name required' });
  }
  if (!film.image1 || film.image1.trim().length === 0) {
    res.status(400).send({ message: 'image1 required' });
  }
  if (!film.year || film.year.trim().length === 0) {
    res.status(400).send({ message: 'year required' });
  }
  if (!film.price || isNaN(film.price)) {
    res.status(400).send({ message: 'price required and must be a number' });
  } else {
    next();
  }
};

export default validateFilm;
