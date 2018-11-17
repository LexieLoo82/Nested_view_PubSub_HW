const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Movies = function (url){
  this.movies = null;
  this.url = url;
};


Movies.prototype.getData = function (){
  const requestHelper = new RequestHelper(this.url);
  requestHelper.get((data) => this.handleData(data));
  };

Movies.prototype.handleData = function (data){
  this.movies = data;
  PubSub.publish('Movies:Data-Ready', this.movies)
  PubSub.subscribe('SelectView:change', (event) =>{
    const selectedMovie = event.detail;
    this.publishSelectedMovie(selectedMovie);
  });
};

Movies.prototype.publishSelectedMovie = function (index){
  const selectedMovie = this.movies[index];
  PubSub.publish('Movies:Selected-movie', selectedMovie);
};

module.exports = Movies;
