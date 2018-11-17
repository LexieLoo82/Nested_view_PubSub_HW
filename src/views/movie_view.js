const PubSub = require('../helpers/pub_sub.js');

const MovieView = function(movieContainer){
  this.movieContainer = movieContainer;
}


MovieView.prototype.bindEvents = function(){
  PubSub.subscribe('Movies:Selected-movie', (event) => {
    const selectedMovie = event.detail;
    this.render(selectedMovie);
  });
};

MovieView.prototype.render = function(movie){
  this.movieContainer.innerHTML = '';
  const name = this.createElement('h2', movie.title);
  this.movieContainer.appendChild(name);
  console.log(name);
};

MovieView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = MovieView;
