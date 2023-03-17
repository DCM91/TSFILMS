import express from 'express';
import {Request } from 'express';
import validateFilm from '../Middlewares/validateFilm';
import addDateMiddleware from '../Middlewares/addDate';
import { films } from '../data/data';


interface CustomRequest extends Request {
    requestInstant?: Date;
  }

const filmsRouter = express.Router();

filmsRouter.get('/films', addDateMiddleware, (req: CustomRequest, res) => {
        res.send({requestTime: req.requestInstant, allFilms: films});
      
      });

filmsRouter.post(
    '/filmsPost',
    validateFilm,
    addDateMiddleware,
    (req: CustomRequest, res) => {
      const newFilm = req.body;
      newFilm.id = films[films.length - 1].id + 1;
      films.push(newFilm);
      res.status(201).send({
        requestTime: req.requestInstant,
        allFilms: 'New Film',
        newFilm,
      });
    },
  );

  filmsRouter.patch("/films/:id", addDateMiddleware, (req: CustomRequest, res) => {
    const id = parseInt(req.params.id);
    const film = films.find(film => film.id === id);
  
    if (!film) {
      return res.status(404).send("Not found");
    } else {
      const index = films.findIndex(film => film.id === id);
      films[index] = {
        ...films[index],
        ...req.body,
      };
      const updatedFilm = films[index];
      return res.status(200).send({requestTime: req.requestInstant, message: "Film updated", film: updatedFilm });
    }
  });
  
  

filmsRouter.delete('/films/:id', addDateMiddleware, (req: CustomRequest, res) => {
    const id = parseInt(req.params.id);
    const film = films.find(film => film.id === id);
    
    if (!film) {
      return res.status(404).send("Not found");
    }
    const index = films.findIndex(film => film.id === id);
    films.splice(index, 1);
    res.status(200).send({requestTime: req.requestInstant, message : "Deleted"});
    
  });

export default filmsRouter;
