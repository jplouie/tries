// Defines the node object
var Node = function(options) {
  this.value = options.word[options.index];
  this.word = options.word.substr(0, options.index + 1);
  this.children = {};
  this.isWord = false;
};

var Trie = function() {
  var options = {
    word: '',
    index: 0
  }
  this.head = new Node(options);
  this.children = this.head.children;

  // Inserts string into the Trie.
  this.insert = function(string) {
    var index = 0;
    this._insert(this.head, string, index);
    console.log(this);
  };

  // Recursive function. Helper function for the insert function.
  this._insert = function(node, string, index) {
    var children = node.children;
    var letter = string[index];
    for(child in children){
      if(child.value === letter){
        var childNode = child;
      }
    }
    if(!childNode){
      var options = {
        word: string,
        index: index
      }
      var childNode = new Node(options);
      children[letter] = childNode;
    }

    if(++index < string.length){
      this._insert(childNode, string, index);
    }
    else{
      childNode.isWord = true;
    }
  };

  // Returns true if string is in the trie. Returns false otherwise.
  this.includes = function(string) {
    var index = 0;
    return this._includes(this.head, string, index);
  };

  // Recursive function. Returns true if string is in the trie. Returns false
  // otherwise.
  this._includes = function(node, string, index) {
    var children = node.children;
    var letter = string[index];
    if(children[letter]){
      if(index === string.length - 1){
        
      }
      var childNode = children[letter];
      return this._includes(childNode, string, ++index);
    }
    else{
      return false;
    }
  };

  // Search for all strings that have 'prefix' as the prefix.
  //
  // Returns Array of Strings.
  this.search = function(prefix) {

  };

  // Recursive function. Helper function for the search function.
  this._search = function() {

  };

  // Find the node that correspond to the last character in the string.
  //
  // Returns Node.
  this.findLastNode = function(string) {

  };

  // Recursive function. Helper function for the findLastNode function.
  this._findLastNode = function() {

  };

  // Given a node, return all the strings that are part of this node.
  //
  // Returns Array of Strings.
  this.iterate = function(node) {

  };

  // Recursive helper function for .iterate
  this._iterate = function() {

  };

  // You may find this function useful for implementing iterate().
  //
  // Returns true if object is empty. False otherwise.
  this.isEmpty = function (object) {
    for(var i in object) {
      return false;
    }
    return true;
  }
};

