"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateFilm_1 = __importDefault(require("../Middlewares/validateFilm"));
const addDate_1 = __importDefault(require("../Middlewares/addDate"));
const data_1 = require("../data/data");
const filmsRouter = express_1.default.Router();
filmsRouter.get('/films', addDate_1.default, (req, res) => {
    res.send({ requestTime: req.requestInstant, allFilms: data_1.films });
});
filmsRouter.post('/filmsPost', validateFilm_1.default, addDate_1.default, (req, res) => {
    const newFilm = req.body;
    newFilm.id = data_1.films[data_1.films.length - 1].id + 1;
    data_1.films.push(newFilm);
    res.status(201).send({
        requestTime: req.requestInstant,
        allFilms: 'New Film',
        newFilm,
    });
});
filmsRouter.patch("/films/:id", addDate_1.default, (req, res) => {
    const id = parseInt(req.params.id);
    const film = data_1.films.find(film => film.id === id);
    if (!film) {
        return res.status(404).send("Not found");
    }
    else {
        const index = data_1.films.findIndex(film => film.id === id);
        data_1.films[index] = Object.assign(Object.assign({}, data_1.films[index]), req.body);
        const updatedFilm = data_1.films[index];
        return res.status(200).send({ requestTime: req.requestInstant, message: "Film updated", film: updatedFilm });
    }
});
filmsRouter.delete('/films/:id', addDate_1.default, (req, res) => {
    const id = parseInt(req.params.id);
    const film = data_1.films.find(film => film.id === id);
    if (!film) {
        return res.status(404).send("Not found");
    }
    const index = data_1.films.findIndex(film => film.id === id);
    data_1.films.splice(index, 1);
    res.status(200).send({ requestTime: req.requestInstant, message: "Deleted" });
});
exports.default = filmsRouter;
