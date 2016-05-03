/*
Write a program that given a phrase can count the occurrences of each word in that phrase.

For example for the input `"olly olly in come free"`

```plain
olly: 2
in: 1
come: 1
free: 1
```
*/

var Words = function() {};

Words.prototype.createWordObject = function(word_array) {
    var obj = {};
    
    for(var i = 0; i < word_array.length; i++) {
        if(word_array[i].trim().length > 0) {
            obj[word_array[i].trim()] = 0;
        }
    }
    
    return obj;
}

Words.prototype.count = function(phrase) {
    var word_array = phrase.split(/\s+/);
    var word_counts = this.createWordObject(word_array);
    
    for(var i = 0; i < word_array.length; i++) {
        if(word_array[i].trim().length > 0) {
            word_counts[word_array[i]] += 1;
        }
    }
    
    return word_counts;  
};

module.exports = Words;