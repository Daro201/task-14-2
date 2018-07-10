var movies = [
{	
	id: 1,
	title: 'Harry Potter',
	desc: 'film o czarodzieju',
	year: 2001,
	director:  'Chris Columbus, Alfonso Cuarón, Mike Newell',
	picture: 'https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
},
{	
	id: 2,
	title: 'Król Lew',
	desc: 'Film o królu sawanny',
	year: 1994,
	director: ' Roger Allers, Rob Minkoff',
	picture: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
}
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('p', {}, movie.year),
      React.createElement('p', {}, movie.director),
      React.createElement('img',{src: movie.picture} )
    );
});

var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);
  ReactDOM.render(element, document.getElementById('app'));



