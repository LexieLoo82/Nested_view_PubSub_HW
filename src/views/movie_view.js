const MovieView = function () {

}

MovieView.prototype.createMovieDetail = function (movie) {
  const movieDetail = document.createElement('div');
  movieDetail.classList.add('movie-detail');

  const title = document.createElement('h3');
  title.textContent = movie.title;
  movieDetail.appendChild(title);


  const detailsList = document.createElement('ul');

  const director = this.createDetailListItem('Director', movie.director)
  detailsList.appendChild(director);

  const desc = this.createDetailListItem('Description', movie.description);
  detailsList.appendChild(desc);

  movieDetail.appendChild(detailsList);
  return movieDetail;
};

MovieView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};


module.exports = MovieView;

//
//
// const PubSub = require('../helpers/pub_sub.js');
//
// const MovieView = function(movieContainer){
//   this.movieContainer = movieContainer;
// }
//
//
// MovieView.prototype.bindEvents = function(){
//   PubSub.subscribe('Movies:Selected-movie', (event) => {
//     const selectedMovie = event.detail;
//     this.render(selectedMovie);
//   });
// };
//
// MovieView.prototype.render = function(movie){
//   this.movieContainer.innerHTML = '';
//   const name = this.createElement('h2', movie.title);
//   this.movieContainer.appendChild(name);
//   console.log(name);
//   const director = this.createElement('h3', movie.director);
//   this.movieContainer.appendChild(director);
//   const desc = this.createElement('p', movie.description);
//   this.movieContainer.appendChild(desc);
// };
//
// MovieView.prototype.createElement = function (elementType, text) {
//   const element = document.createElement(elementType);
//   element.textContent = text;
//   return element;
// };

// module.exports = MovieView;
