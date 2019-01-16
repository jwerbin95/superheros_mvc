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
let superheroes = filestream.readFile('superheroes.json', (error, jsonFile) => {
	app.get('/superheroes/:index', (request, response) => {
		let heroArray = JSON.parse(jsonFile);
		console.log(heroArray);
		response.send(
			'<p>Name: ' +
				heroArray[request.params.index].name +
				'</p><p>Powers: ' +
				heroArray[request.params.index].powers.join(' ') +
				'</p>'
		);
	});
});

app.listen(3000);
