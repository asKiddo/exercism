var FoodChain = function() {
    this.verse_map = {
        1: ['fly',''],
        2: ['spider','It wriggled and jiggled and tickled inside her.\n'],
        3: ['bird','How absurd to swallow a bird!\n'],
        4: ['cat','Imagine that, to swallow a cat!\n'],
        5: ['dog','What a hog, to swallow a dog!\n'],
        6: ['goat','Just opened her throat and swallowed a goat!\n'],
        7: ['cow','I don\'t know how she swallowed a cow!\n'],
        8: ['horse','She\'s dead, of course!\n']
    };
    
    this.final_verse_num = 8;
    this.final_verse = 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
};

FoodChain.prototype.verse = function(vNum) {
    var currVerse = 'I know an old lady who swallowed a '+this.verse_map[vNum][0]+'.\n'
    currVerse += this.verse_map[vNum][1];
    
    if(vNum == this.final_verse_num) {
        return currVerse;
    } else if(vNum < this.final_verse_num) {
        for(var i = vNum; i >= 2; i--) {
            currVerse += 'She swallowed the '+this.verse_map[i][0]+' to catch the '+(i-1==2?'spider that wriggled and jiggled and tickled inside her':this.verse_map[i-1][0])+'.\n';
        }
    }
    
    currVerse += this.final_verse;
    
    return currVerse;
};



FoodChain.prototype.verses = function(startVal, endVal) {
    var sng = '';
    
    for(var i = startVal; i <= endVal; i++) {
        sng += this.verse(i);
        sng += '\n';
    }
    
    return sng;
};


module.exports = FoodChain;