import express from 'express';
import indexRoute from './routes/indexRoute';

const app = express();

app.use(indexRoute);

app.listen(5000, error => {
  if (error) {
    throw error;
  }

  console.log('Server running');
});
