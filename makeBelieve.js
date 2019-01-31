
(function (globalObj) {
    // Setup MakeBelieveJS

    // MakeBelieveElement constructor function
    function MakeBelieveElement(nodes) {
        // This means this instance of MakeBelieveElement
        this.nodes = nodes;
    }

    MakeBelieveElement.prototype.getLength = function() {
        return this.nodes.length;
    };

    MakeBelieveElement.prototype.getTagNames = function() {
        var tagNames = [];
        for (var i = 0; i < this.nodes.length; i++) {
            var currentElement = this.nodes[i];
            tagNames.push(currentElement.tagName.toLowerCase());
        }
        return tagNames;
    }

    MakeBelieveElement.prototype.parent = function(selector) {
 
        var parents = [];

            if (selector) {
              for (i = 0; i < this.nodes.length; i++) {
                var parentNode = this.nodes[i].parentNode;
                if(parentNode.matches(selector)) {
                  parents.push(parentNode);
                }
              } 
            }
            else
            for (var i = 0; i < this.nodes.length; i++) {
                var currentElement = this.nodes[i];
                parents.push(currentElement.parentNode.nodeName.toLowerCase());
                }
            return parents;

};

MakeBelieveElement.prototype.grandparent = function(selector) {
    var grandParents = [];

        if (selector) {
          for (i = 0; i < this.nodes.length; i++) {
            var grandParentNode = this.nodes[i].parentNode.parentNode;
            if(grandParentNode.matches(selector)) {
                grandParents.push(grandParentNode);
            }
          } 
        }
        else
        for (var i = 0; i < this.nodes.length; i++) {
            var currentElement = this.nodes[i];
            grandParents.push(currentElement.parentNode.parentNode.nodeName.toLowerCase());
            }
        return grandParents;

};

MakeBelieveElement.prototype.ancestor = function(selector) {
    var ancestor = [];
    for (i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].closest(selector) != null) {
            var ancestorNode = this.nodes[i].closest(selector);
            ancestor.push(ancestorNode);
        }
      }
      return ancestor; 
};
    function query(cssSelector) {
        return new MakeBelieveElement(document.querySelectorAll(cssSelector));
    }

    globalObj.__ = query;
})(window);

var paragraphs = __('p');
var divs = __('.item');
var inputs = __('#my-form input');
var parent = __('#password').parent();
var formParent = __('#password').parent('form');
var grandparent = __('#password').grandparent('div');
var formgrandParent = __('#username').grandparent('body');

var ancestor = __('#password').ancestor('.ancestor');
var rootElm = __('#password').ancestor('.root');
var ancestorSib = __('#password').ancestor('.ancestor-sib');
console.log(paragraphs.getLength());
console.log(paragraphs.getTagNames());
console.log(divs.getLength());
console.log(divs.getTagNames());
console.log(inputs);
console.log(parent);
console.log(formParent);
console.log(grandparent);
console.log(formgrandParent);
console.log(ancestor);
console.log(rootElm);
console.log(ancestorSib);

