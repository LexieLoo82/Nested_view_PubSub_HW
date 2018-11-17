const PubSub = require('../helpers/pub_sub.js');
const MovieView = require('./movie_view');

const ListView = function (container) {
  this.container = container;
};

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('Movies:Data-Ready', (evt) => {
    this.clearList();
    this.renderMovieDetailViews(evt.detail);
  });
};

ListView.prototype.clearList = function () {
  this.container.innerHTML = '';
};

ListView.prototype.renderMovieDetailViews = function (movies) {
  movies.forEach((movie) => {
    const movieItem = this.createMovieListItem(movie);
    this.container.appendChild(movieItem);
  });
};

ListView.prototype.createMovieListItem = function (movie) {
  const movieDetailView = new MovieView();
  const movieDetail = movieDetailView.createMovieDetail(movie);
  return movieDetail;
};

module.exports = ListView;
