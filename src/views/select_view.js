const PubSub = require('../helpers/pub_sub.js');
const MovieView = require('./movie_view.js');


const SelectView = function(element){
  this.element = element;
}

SelectView.prototype.bindEvents = function (){
  PubSub.subscribe('Movies:Data-Ready', (event) =>{
    const movies = event.detail;
    this.populate(movies);
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex)
  })
};

SelectView.prototype.populate = function(moviesData){
  moviesData.forEach((movie, index) =>{
    const option = document.createElement('option');
    option.textContent = movie.title;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
