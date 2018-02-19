import express from 'express';
import ServerRenderer from './ServerRenderer';

const app = express();
//const appService = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

//app.use('/jobs', JobsService);

app.use('/', ServerRenderer);
//appService.use('/jobs', JobsService);

app.listen(3333, () => {
  console.log('Rapid Jobs listening on port 3333');
});
