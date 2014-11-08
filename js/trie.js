// Defines the node object
var Node = function(options) {
  this.value = options.word[options.index];
  this.word = options.word.substr(0, options.index + 1);
  this.children = {};

  if(options.index = options.word.length){
    this.isWord = true;
  }
  else{
    this.isWord = false;
  }

  this._insert = function(options) {
    var children = this.children;
    var letter = options.word[options.index];

    if(!children[letter]){
      children[letter] = new Node(options);
    }
    var node = children[letter];
    options.index++;
    var index = options.index;
    var length = options.word.length;

    // if(index < length){
    //   node._insert(options);
    // }
  };
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
    var options = {
      word: string,
      index: 0
    }
    this._insert(this.head, string);
  };

  // Recursive function. Helper function for the insert function.
  this._insert = function(node, options) {
    var children = node.children;


  };

  // Returns true if string is in the trie. Returns false otherwise.
  this.includes = function(string) {

  };

  // Recursive function. Returns true if string is in the trie. Returns false
  // otherwise.
  this._includes = function() {

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

