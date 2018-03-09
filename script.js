var fs = fs.require('fs');
var http = http.require('http');

function sendFile(filename, response) {
    fs.readFile(filename, function(err,data) {
        response.end(data);
    });

var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        kind: 'fantasy',
        film_director: 'Chris Columbs',
        language: 'angielski',
        image: sendFile('./harry.jpg', response)
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        kind: 'anime',
        film_director: 'Roger Allers',
        language: 'angielski',
        image: sendFile('./krollew.jpg', response)        
    }
];

var moviesElements = movies.map(function(movie) {
                               return React.createElement('li', {key: movie.id},
                               React.createElement('h2', {}, movie.title),
                               React.createElement('p', {}, movie.desc),
                               React.createElement('p', {}, movie.kind),
                               React.createElement('p', {}, movie.film_director),
                               React.createElement('p', {}, movie.language),
                               React.createElement('img', {}, movie.image)
                              );
});
var element =
    React.createElement('div', {},
                        React.createElement('h1', {}, 'Lista filmów'),
                        React.createElement('ul', {}, moviesElements)
                       );
