const DOMNodeCollection = require("./dom_node_collection.js");

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
