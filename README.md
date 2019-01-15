# Lab - REST: Index/Show

## Superheros

### Basic Express App

1. fork and clone this repo
1. perform an npm init, specify server.js as your entry
1. install express
1. create a server.js file
1. inside server.js, require express and save it to a variable named `express`
1. create a variable named app, and set it equal to `express()`
1. have app listen on port 3000
    - once it's listening, log "Here to save the day..."
1. test it by going to http://localhost:3000

### Routes

1. Create a .json file called `superheros.json` with a containing this array `superheros = ['batman', 'superman', 'hulk']`
1. Using a Buffer Stream or module.exports provide accsess to this array from your server.js file
1. Create a route to /superheroes
    - The route should send the entire superheroes array
1. Create a route to /superheroes/:index
    - The route should send the item of the array in `superhero.json` that is at the index in the superheroes array as specified by req.params.index

### Enhancing Data

1. Change the entries in the superheroes array so that each element in the array is an object
    - E.g. Instead of 'superman' have: `{ name: "superman", powers: ['flight', 'invulnerability', 'x-ray vision']}`

## Friends

1. cd back into the labs directory
1. create a directory called friends
1. cd into friends
1. Create a basic express app
1. Create a .json file called friends.json
    - inside this file create an array that is an array of 3 of your friends
1. Create index and show routes
1. Enhance the data in the .json file so that each friend is an object with age, location, eyeColor, hairColor attributes
