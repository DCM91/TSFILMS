import { Request, NextFunction, Response } from 'express';

interface CustomRequest extends Request {
  requestInstant?: Date;
}

const addDateMiddleware = (req: CustomRequest, _res: Response, next: NextFunction) => {
  console.log('Request Type:', req.method);
  req.requestInstant = new Date();
  console.log(req.requestInstant);
  next();
};

export default addDateMiddleware;
