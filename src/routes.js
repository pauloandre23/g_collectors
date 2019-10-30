
import express from 'express';


const routes = express.Router();

const CreateController = require('./controllers/CreateController');
const SessionController = require('./controllers/SessionController');

routes.post('/register', CreateController.store);
routes.post('/login', SessionController.store);

export default routes;