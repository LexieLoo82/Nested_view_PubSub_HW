const Movies = require('./models/movies.js')
const MovieView = require('./views/movie_view.js')
const SelectView = require('./views/select_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const selectElement = document.querySelector('select#movies');
  const movieDropdown = new SelectView(selectElement);
  movieDropdown.bindEvents();

  movies = new Movies('https://ghibliapi.herokuapp.com/films')
  movies.getData();
  // console.log(movies);

  const movieContainer = document.querySelector('#movie');
  const newMovieView = new MovieView(movieContainer);
  newMovieView.bindEvents();
});
