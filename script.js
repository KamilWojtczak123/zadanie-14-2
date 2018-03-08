var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        kind: 'fantasy',
        film_director: 'Chris Columbs',
        language: 'angielski',
        image: './harry.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        kind: 'anime',
        film_director: 'Roger Allers',
        language: 'angielski',
        image: './krollew.jpg'
        
    },
    {
        id: 3,
        title: 'Ostra randka',
        desc: 'niskobudżetowy thriller o nielegalnym handlu ludzkimi organami',
        kind: 'thriller',
        film_director: 'Maciej Odoliński',
        language: 'polski',
        image: './randka.jpg'
    },
    {
        id: 4,
        title: 'Ida',
        desc: 'film o podróży dwóch kobiet, nawiązujący do tematyki zagłady Żydów',
        kind: 'dramat psychologiczny',
        film_director: 'Paweł Pawlikowksi',
        language: 'polski',
        image: './ida.jpg'
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
