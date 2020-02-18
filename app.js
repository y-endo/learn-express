const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const httpServer = require('http').Server(app);
const io = require('socket.io')(httpServer);

const indexRouter = require('./routes/index');
const postRouter = require('./routes/post');
const socketRouter = require('./routes/socket');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/post', postRouter);
app.use('/socket', socketRouter);

io.on('connection', socket => {
  console.log('connected');

  socket.on('message', message => {
    console.log('message:', message);

    io.emit('message', message);
  });
});

httpServer.listen(3000);
