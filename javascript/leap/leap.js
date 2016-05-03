/*
on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400
*/

var Year = function(yr) {
	this.yr = yr;
};

Year.prototype.isLeap = function() {
    if((this.yr % 400 == 0) || (this.yr % 4 == 0 && this.yr % 100 != 0)) {
        return true;
    }
    return false;
};


module.exports = Year;