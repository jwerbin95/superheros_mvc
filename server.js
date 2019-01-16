let express = require('express');
let filestream = require('fs');
let app = express();

app.get('/', (request, response) => {
	response.send('Here to save the day...');
});

app.get('/superheroes', (request, response) => {
	let superheroes = filestream.createReadStream('superheroes.json');
	superheroes.pipe(response);
});
let superheroes = filestream.readFileSync('superheroes.json', 'utf8');
app.get('/superheroes/:index', (request, response) => {
	let newHeroes = JSON.parse(superheroes);
	let heroArray = eval(newHeroes.superheroes);
	response.send(
		'<p>' +
			heroArray[request.params.index].name +
			'</p><p>' +
			heroArray[request.params.index].powers.join(' ') +
			'</p>'
	);
});
app.listen(3000);
