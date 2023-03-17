"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addDateMiddleware = (req, _res, next) => {
    console.log('Request Type:', req.method);
    req.requestInstant = new Date();
    console.log(req.requestInstant);
    next();
};
exports.default = addDateMiddleware;
