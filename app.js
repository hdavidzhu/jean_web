
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon("/media/pictures/favicon.ico"));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', user.index);
app.get('/users', user.list);
app.get('/research', user.research);
app.get('/lab_members', user.lab_members);
app.get('/biocast', user.biocast);
app.get('/easter_egg', user.easter_egg);
app.get('/about/edit', user.render_edit_about);
app.post('/about/edit', user.edit_about);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});