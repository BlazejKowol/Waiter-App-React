import jsonServer from 'json-server';
import path from 'path';

const server = jsonServer.create();
const router = jsonServer.router('build/db/app.json');
const middlewares = jsonServer.defaults({
  static: 'build',
  noCors: true
});
const port = process.env.PORT || 3131;
server.use(middlewares);
server.use('/api', router);

server.use('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/build/index.html'));
});
server.listen(port);