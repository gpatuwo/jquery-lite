/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const DOMNodeCollection = __webpack_require__(1);

	function $l(arg) {
	  if (typeof arg === 'string') {
	    let nodeList = document.querySelectorAll(arg);
	    let DOMList = [];
	    for (var i = 0; i < nodeList.length; i++) {
	      DOMList.push(nodeList[i]);
	    }
	    return new DOMNodeCollection(nodeList);
	  } else if (arg instanceof HTMLElement) {
	    return new DOMNodeCollection([arg]);
	  }

	}

	window.$l = $l;

	// window.$l = function(arg) { console.log("FRIDAY");};


	// hey i failed out, I'm leaving you :(  YOURE AWESOME   :) byeeeeee  -Jesson


/***/ },
/* 1 */
/***/ function(module, exports) {

	class DOMNodeCollection {
	  constructor(htmlArray){
	    this.htmlArray = Array.from(htmlArray);
	  }

	  html(string) {
	    if (typeof string === 'undefined') {
	      return this.htmlArray[0].innerHTML;
	    } else {
	      this.htmlArray.forEach((htmlEl) => {htmlEl.innerHTML = string;});
	    }
	  }

	  empty(){
	    this.htmlArray.forEach( htmlEl => {htmlEl.html = '';});
	  }

	  append(contents){
	    contents.forEach((content) => {
	      this.htmlArray.forEach( (htmlEl) => {
	        htmlEl.innerHTML.push(content.outerHTML);
	      });
	    });
	  }

	  attr(attributeName){
	    for (var i = 0; i < this.htmlArray.length; i++) {
	      if (this.htmlArray[i].attributes.includes(attributeName)) {
	        return this.htmlArray[i];
	      }
	    }
	  }

	  addClass(newClass){
	    this.htmlArray.forEach( (htmlEl) => {
	      htmlEl.className = newClass;
	    });
	  }

	  removeClass(className){
	    this.htmlArray.forEach( (htmlEl) => {
	      if (htmlEl.className === className) {
	        htmlEl.className = '';
	      }
	    });
	  }

	  children(){
	    let kids = [];
	    this.htmlArray.forEach( (el) => {kids.push(el.children);});
	    return new DOMNodeCollection(kids);
	  }

	  parent(){
	    let parents = [];
	    this.htmlArray.forEach( (el) => {parents.push(el.parentElement);});
	    return new DOMNodeCollection(parents);
	  }

	  find(selector){
	    let results = [];
	    this.htmlArray.forEach( (el) => {
	      results.push(el.querySelectorAll(selector));
	    });
	    return new DOMNodeCollection(results);
	  }




	}


	module.exports = DOMNodeCollection;


/***/ }
/******/ ]);