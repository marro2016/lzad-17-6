var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/store', function(req, res, next) {
	console.log('Jestem pośrednikiem przy żądaniu do /store');
	next();
});

app.get('/', function (req, res){
	res.render('google');
});

app.get('/auth/google', function(req, res) {
	res.render('auth');
});

app.listen(3000, 'localhost', function() {
	var host = this.address().address;
	var port = this.address().port;
	console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});

app.use(function (req, res, next) {
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
