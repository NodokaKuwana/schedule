const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
var createError = require('http-errors')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.ts')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
// view engine setup
app.set('pages', path.join(__dirname, 'pages'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//ルーティングの設定
var indexRouter = require('./API/index');
var searchRouter = require('./API/search');
var registarRouter = require('./API/register');
var deleteRouter = require('./API/delete');
// var updateRouter = require('./routes/update');
app.use('/', indexRouter);
app.use('/search', searchRouter);
app.use('/register', registarRouter);
app.use('/delete', deleteRouter);
// app.use('/update', updateRouter);

// catch 404 and forward to error handler
app.use(function (req:any, res:any, next:any) {
  next(createError(404));
});

// error handler
app.use(function (err:any, req:any, res:any, next:any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
start()
