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
