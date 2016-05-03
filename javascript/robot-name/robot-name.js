//65 to 90

var allName = [];

var Robot = function() {
    this.name = genName();
    
    function genName() {
        var name =  genLetter() + genLetter() + genNumber() + genNumber() + genNumber();
        while(allName.indexOf(name) != -1) {
            name =  genLetter() + genLetter() + genNumber() + genNumber() + genNumber();
        }
        
        allName.push(name);
        return name;
    };
    
    function genLetter() {
        return String.fromCharCode(Math.floor(Math.random() * (91 - 65)) + 65);
    };
    
    function genNumber() {
        return Math.floor(Math.random() * 10);
    };
    
    this.reset = function() {
        this.name = genName();
    };
};

module.exports = Robot;