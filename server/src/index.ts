import * as express from 'express';
import {PORT} from './utils/secrets';

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.listen(PORT, () => {
  console.info('Server running on port:', PORT);
});
