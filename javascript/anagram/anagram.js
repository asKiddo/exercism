var Anagram = function(init) {
    this.init = init;
};

Anagram.prototype.matches = function(anagramArr) {
    var testVal = (Array.isArray(anagramArr) ? anagramArr : [anagramArr]);
    
    if(arguments.length > 1) {
        testVal = arguments;
    }
    
    var matchedArr = [];
    
    for(var i = 0; i < testVal.length; i++) {
        if(this.match(testVal[i])) {
            matchedArr.push(testVal[i]);
        }
    }
    
    return matchedArr;
};

Anagram.prototype.match = function(anagram) {
    if(anagram.toLowerCase() == this.init.toLowerCase()) {
        return false;
    }
    
    var letter;
    
    for(var i = 0; i < this.init.length; i++) {
        letter = new RegExp(this.init[i],'i');
        anagram = anagram.replace(letter,'X');
    }
    
    return (anagram == 'X'.repeat(this.init.length));
};

module.exports = Anagram;