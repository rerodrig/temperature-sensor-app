const path = require('path');
const express = require('express');
const app = express();

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

app.use(forceSSL());
app.use(express.static(__dirname + '/www'));
app.set('port', process.env.PORT || 8080);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/www/index.html'));
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
