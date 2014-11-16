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
  };

  // Recursive function. Helper function for the insert function.
  this._insert = function(node, string, index) {
    var children = node.children;
    var letter = string[index];
    var childNode = children[letter];

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
    if(!string){
      return false;
    }
    var index = 0;
    return this._includes(this.head, string, index);
  };

  // Recursive function. Returns true if string is in the trie. Returns false
  // otherwise.
  this._includes = function(node, string, index) {
    var children = node.children;
    var letter = string[index];
    if(node.word === string && node.isWord){
      return true;
    }
    else if(children[letter]){
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
    var node = this.head;
    if(prefix){
      return this._search(node, prefix.split(''));
    }
    else{
      return [];
    }
  };

  // Recursive function. Helper function for the search function.
  this._search = function(node, arr) {
    var children = node.children;
    var letter = arr.shift();
    if(children[letter]){
      if(arr.length){
        return this._search(children[letter], arr);
      }
      else{

      }
    }
    else{
      return [];
    }
  };

  // Find the node that correspond to the last character in the string.
  //
  // Returns Node.
  this.findLastNode = function(string) {
    var node = this.head;
    if(!string){
      return node;
    }
    else{
      return this._findLastNode(node, string.split(''));
    }
  };

  // Recursive function. Helper function for the findLastNode function.
  this._findLastNode = function(node, arr) {
    var letter = arr.shift();
    var child = node.children[letter];
    if(child){
      if(arr.length){
        return this._findLastNode(child, arr);
      }
      else{
        return child;
      }
    }
    else{
      return null;
    }
  };

  // Given a node, return all the strings that are part of this node.
  //
  // Returns Array of Strings.
  this.iterate = function(node) {
    return this._iterate(node, arr);
  };

  // Recursive helper function for .iterate
  this._iterate = function(node, arr) {
    
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

