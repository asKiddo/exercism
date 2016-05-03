//Write a program that will calculate the date that someone turned or will celebrate their 1 Gs anniversary.
//A gigasecond is one billion (10**9) seconds.
var Gigasecond = function(dt) {
    this.dt = dt;
};

Gigasecond.prototype.date = function() {
    var gs = Math.pow(10, 9);
    var gs_anniversary = this.dt.getTime()/1000 + gs;
    return new Date(gs_anniversary*1000);
};

module.exports = Gigasecond;