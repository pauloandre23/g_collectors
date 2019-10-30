import express from 'express';
import mongoose from 'mongoose';
import routes from './routes'; 

const app = express();

mongoose.connect('mongodb://localhost/sprint2');
mongoose.createConnection('mongodb://localhost/sprint2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(express.json());
app.use(routes);





app.listen(3333);