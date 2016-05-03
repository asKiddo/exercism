var Acronyms = function () {
    this.parse = function(phrase) {
        var words = phrase.split(' ');
        return words[0][0].toUpperCase() + words[1][0].toUpperCase() + words[2][0].toUpperCase();
    };
};
