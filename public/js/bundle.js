/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Movies = __webpack_require__(/*! ./models/movies.js */ \"./src/models/movies.js\")\nconst MovieView = __webpack_require__(/*! ./views/movie_view.js */ \"./src/views/movie_view.js\")\nconst ListView = __webpack_require__(/*! ./views/list_view.js */ \"./src/views/list_view.js\")\n// const SelectView = require('./views/select_view.js')\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('JavaScript Loaded');\n\n  const moviesContainer = document.querySelector('#moviesContainer');\n  const listView = new ListView(moviesContainer);\n  listView.bindEvents();\n\n  const movies = new Movies('https://ghibliapi.herokuapp.com/films');\n  movies.getData();\n})\n\n\n\n\n// document.addEventListener('DOMContentLoaded', () => {\n//   console.log('JavaScript Loaded');\n//   const selectElement = document.querySelector('select#movies');\n//   const movieDropdown = new SelectView(selectElement);\n//   movieDropdown.bindEvents();\n//\n//   movies = new Movies('https://ghibliapi.herokuapp.com/films')\n//   movies.getData();\n//   // console.log(movies);\n//\n//   const movieContainer = document.querySelector('#movie');\n//   const newMovieView = new MovieView(movieContainer);\n//   newMovieView.bindEvents();\n// });\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n  this.url = url\n}\n\nRequestHelper.prototype.get = function (onComplete) {\n  const xhr = new XMLHttpRequest();\n  xhr.open('GET', this.url);\n  xhr.addEventListener('load', function() {\n    if(this.status !== 200){\n      return;\n    }\n    const data = JSON.parse(this.responseText);\n    onComplete(data);\n  });\n  xhr.send();\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/movies.js":
/*!******************************!*\
  !*** ./src/models/movies.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\n\nconst Movies = function (url){\n  this.movies = null;\n  this.url = url;\n};\n\n\nMovies.prototype.getData = function (){\n  const requestHelper = new RequestHelper(this.url);\n  requestHelper.get((data) => {\n    this.movies = data;\n    console.log('movies.js', data);\n    PubSub.publish('Movies:Data-Ready', this.movies)\n  });\n  };\n\n\n\n//\n// Movies.prototype.getData = function (){\n//   const requestHelper = new RequestHelper(this.url);\n//   requestHelper.get((data) => this.handleData(data));\n//   };\n//\n// Movies.prototype.handleData = function (data){\n//   this.movies = data;\n//   PubSub.publish('Movies:Data-Ready', this.movies)\n//   PubSub.subscribe('SelectView:change', (event) =>{\n//     const selectedMovie = event.detail;\n//     this.publishSelectedMovie(selectedMovie);\n//   });\n// };\n//\n// Movies.prototype.publishSelectedMovie = function (index){\n//   const selectedMovie = this.movies[index];\n//   PubSub.publish('Movies:Selected-movie', selectedMovie);\n// };\n\nmodule.exports = Movies;\n\n\n//# sourceURL=webpack:///./src/models/movies.js?");

/***/ }),

/***/ "./src/views/list_view.js":
/*!********************************!*\
  !*** ./src/views/list_view.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst MovieView = __webpack_require__(/*! ./movie_view */ \"./src/views/movie_view.js\");\n\nconst ListView = function (container) {\n  this.container = container;\n};\n\nListView.prototype.bindEvents = function () {\n  PubSub.subscribe('Movies:Data-Ready', (evt) => {\n    this.clearList();\n    this.renderMovieDetailViews(evt.detail);\n  });\n};\n\nListView.prototype.clearList = function () {\n  this.container.innerHTML = '';\n};\n\nListView.prototype.renderMovieDetailViews = function (movies) {\n  movies.forEach((movie) => {\n    const movieItem = this.createMovieListItem(movie);\n    this.container.appendChild(movieItem);\n  });\n};\n\nListView.prototype.createMovieListItem = function (movie) {\n  const movieDetailView = new MovieView();\n  const movieDetail = movieDetailView.createMovieDetail(movie);\n  return movieDetail;\n};\n\nmodule.exports = ListView;\n\n\n//# sourceURL=webpack:///./src/views/list_view.js?");

/***/ }),

/***/ "./src/views/movie_view.js":
/*!*********************************!*\
  !*** ./src/views/movie_view.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const MovieView = function () {\n\n}\n\nMovieView.prototype.createMovieDetail = function (movie) {\n  const movieDetail = document.createElement('div');\n  movieDetail.classList.add('movie-detail');\n\n  const title = document.createElement('h3');\n  title.textContent = movie.title;\n  movieDetail.appendChild(title);\n\n\n  const detailsList = document.createElement('ul');\n\n  const director = this.createDetailListItem('Director', movie.director)\n  detailsList.appendChild(director);\n\n  const desc = this.createDetailListItem('Description', movie.description);\n  detailsList.appendChild(desc);\n\n  movieDetail.appendChild(detailsList);\n  return movieDetail;\n};\n\nMovieView.prototype.createDetailListItem = function (label, property) {\n  const element = document.createElement('li');\n  element.textContent = `${label}: ${property}`;\n  return element;\n};\n\n\nmodule.exports = MovieView;\n\n//\n//\n// const PubSub = require('../helpers/pub_sub.js');\n//\n// const MovieView = function(movieContainer){\n//   this.movieContainer = movieContainer;\n// }\n//\n//\n// MovieView.prototype.bindEvents = function(){\n//   PubSub.subscribe('Movies:Selected-movie', (event) => {\n//     const selectedMovie = event.detail;\n//     this.render(selectedMovie);\n//   });\n// };\n//\n// MovieView.prototype.render = function(movie){\n//   this.movieContainer.innerHTML = '';\n//   const name = this.createElement('h2', movie.title);\n//   this.movieContainer.appendChild(name);\n//   console.log(name);\n//   const director = this.createElement('h3', movie.director);\n//   this.movieContainer.appendChild(director);\n//   const desc = this.createElement('p', movie.description);\n//   this.movieContainer.appendChild(desc);\n// };\n//\n// MovieView.prototype.createElement = function (elementType, text) {\n//   const element = document.createElement(elementType);\n//   element.textContent = text;\n//   return element;\n// };\n\n// module.exports = MovieView;\n\n\n//# sourceURL=webpack:///./src/views/movie_view.js?");

/***/ })

/******/ });