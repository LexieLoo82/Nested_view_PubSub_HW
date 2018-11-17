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

eval("const Movies = __webpack_require__(/*! ./models/movies.js */ \"./src/models/movies.js\")\nconst MovieView = __webpack_require__(/*! ./views/movie_view.js */ \"./src/views/movie_view.js\")\nconst SelectView = __webpack_require__(/*! ./views/select_view.js */ \"./src/views/select_view.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('JavaScript Loaded');\n  const selectElement = document.querySelector('select#movies');\n  const movieDropdown = new SelectView(selectElement);\n  movieDropdown.bindEvents();\n\n  movies = new Movies('https://ghibliapi.herokuapp.com/films')\n  movies.getData();\n  // console.log(movies);\n\n  const movieContainer = document.querySelector('#movie');\n  const newMovieView = new MovieView(movieContainer);\n  newMovieView.bindEvents();\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

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

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\n\nconst Movies = function (url){\n  this.movies = null;\n  this.url = url;\n};\n\n\nMovies.prototype.getData = function (){\n  const requestHelper = new RequestHelper(this.url);\n  requestHelper.get((data) => this.handleData(data));\n  };\n\nMovies.prototype.handleData = function (data){\n  this.movies = data;\n  PubSub.publish('Movies:Data-Ready', this.movies)\n  PubSub.subscribe('SelectView:change', (event) =>{\n    const selectedMovie = event.detail;\n    this.publishSelectedMovie(selectedMovie);\n  });\n};\n\nMovies.prototype.publishSelectedMovie = function (index){\n  const selectedMovie = this.movies[index];\n  PubSub.publish('Movies:Selected-movie', selectedMovie);\n};\n\nmodule.exports = Movies;\n\n\n//# sourceURL=webpack:///./src/models/movies.js?");

/***/ }),

/***/ "./src/views/movie_view.js":
/*!*********************************!*\
  !*** ./src/views/movie_view.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst MovieView = function(movieContainer){\n  this.movieContainer = movieContainer;\n}\n\n\nMovieView.prototype.bindEvents = function(){\n  PubSub.subscribe('Movies:Selected-movie', (event) => {\n    const selectedMovie = event.detail;\n    this.render(selectedMovie);\n  });\n};\n\nMovieView.prototype.render = function(movie){\n  this.movieContainer.innerHTML = '';\n  const name = this.createElement('h2', movie.title);\n  this.movieContainer.appendChild(name);\n  console.log(name);\n};\n\nMovieView.prototype.createElement = function (elementType, text) {\n  const element = document.createElement(elementType);\n  element.textContent = text;\n  return element;\n};\n\nmodule.exports = MovieView;\n\n\n//# sourceURL=webpack:///./src/views/movie_view.js?");

/***/ }),

/***/ "./src/views/select_view.js":
/*!**********************************!*\
  !*** ./src/views/select_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst MovieView = __webpack_require__(/*! ./movie_view.js */ \"./src/views/movie_view.js\");\n\n\nconst SelectView = function(element){\n  this.element = element;\n}\n\nSelectView.prototype.bindEvents = function (){\n  PubSub.subscribe('Movies:Data-Ready', (event) =>{\n    const movies = event.detail;\n    this.populate(movies);\n  });\n\n  this.element.addEventListener('change', (event) => {\n    const selectedIndex = event.target.value;\n    PubSub.publish('SelectView:change', selectedIndex)\n  })\n};\n\nSelectView.prototype.populate = function(moviesData){\n  moviesData.forEach((movie, index) =>{\n    const option = document.createElement('option');\n    option.textContent = movie.title;\n    option.value = index;\n    this.element.appendChild(option);\n  });\n};\n\nmodule.exports = SelectView;\n\n\n//# sourceURL=webpack:///./src/views/select_view.js?");

/***/ })

/******/ });