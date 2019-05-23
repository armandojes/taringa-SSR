import express from 'express';
import serverRender from './serverRender'
const server = express();
const port = 3001


server.use('/public', express.static('public'));

server.get('*', serverRender);

server.listen(port, () => console.log(`Example app listening on port ${port}!`))
