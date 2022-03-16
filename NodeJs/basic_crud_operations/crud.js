import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';


const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(bodyParser.json());

server.get('/', (req, res, next) => {
  res.send('This is the response from the index(/) route');
});
 
server.post('/cars', (req, res, next) => {
  res.send('This is the response from the cars(/cars) route');
});

server.post('/cars', (req, res, next) => {
    console.log(req.body);
    res.send('This is the response from post request for the car');
  });



const PORT = 8848;

server.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});