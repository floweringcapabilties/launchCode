const express = require('express');
const http = require('http');
const path = require('path');

const bufferutil = require('bufferutil');
const utf8 = require('utf-8-validate');

const app = express();

app.use('/socket.io', (req, res) => {
  res.send({ msg: 'socket.io' });
});

app.use('/bufferutil', express.static(require.resolve('bufferutil')));
app.use('/utf-8-validate', express.static(require.resolve('utf-8-validate')));

app.use('/assets', express.static('dist/tutorial/assets'));

const port = process.env.PORT || 3001;
app.use(express.static(path.join(__dirname, 'dist/tutorial')));

app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  next();
});

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/tutorial/index.html')));

const server = http.createServer(app);

server.listen(port, () => console.log('Server is running'));
