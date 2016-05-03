/*
Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma,
"every letter") is a sentence using every letter of the alphabet at least once.
The best known English pangram is "The quick brown fox jumps over the lazy dog."
*/

var Pangram = function(sentence) {
    this.sentence = sentence.toLowerCase().split('');
};

Pangram.prototype.isPangram = function() {
    var alphabet_arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(var i = 0; i < this.sentence.length; i++) {
        if(alphabet_arr.indexOf(this.sentence[i]) != -1) {
            alphabet_arr.splice(alphabet_arr.indexOf(this.sentence[i]), 1);
        }
    }
    
    if(alphabet_arr.length == 0) {
        return true;
    } else {
        return false;
    }
};

module.exports = Pangram;