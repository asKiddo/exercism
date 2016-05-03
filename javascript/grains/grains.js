var BigInt = require('./big-integer');

var Grains = function() {
    this.square = function(num) {
        return BigInt(2).pow(num-1).toString();
    };
    
    this.total = function() {
        var ttlWheat = BigInt(0);
        
        for(var i = 1; i < 65; i++) {
            ttlWheat = ttlWheat.plus(this.square(i));
        }
        
        return ttlWheat.toString();
    };
};

module.exports = Grains;