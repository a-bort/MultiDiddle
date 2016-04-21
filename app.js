var express = require('express')
  , port = process.env.PORT || 3003
  , app = express()
  , path = require('path')
  , favicon = require('serve-favicon');

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

//public path
app.use(express.static(path.join(__dirname, 'public')));

 //favicon
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.get('*', function(req, res){
  res.render('multididdle');
})

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
