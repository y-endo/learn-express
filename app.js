const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const indexRouter = require('./routes/index');
const postRouter = require('./routes/post');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/post', postRouter);

app.listen(3000);
