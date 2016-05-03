var Clock = function (hr, min) {
    this.hr = hr;
    this.min = min || 0;
    
    this.toString = function () {
        hrStr = (this.hr > 9) ? this.hr.toString() : '0'+this.hr;
        minStr = (this.min > 9) ? this.min.toString() : '0'+this.min;
        
        return hrStr + ':' + minStr;
    };
    
    this.plus = function (val) {
        this.min += val;
        this.min = this.min % 60;
        
        this.hr += Math.floor((this.min + val) / 60);
        this.hr = this.hr % 23;
        
        return this;
    };
    
    this.minus = function (val) {
        if(this.min < val) {
            this.min = (this.min - (val % 60)) + 60;
            this.hr = (this.hr - Math.floor(val / 60) - 1 + 24) % 24;
        } else {
            this.min -= val;
        }
        
        return this;
    };
    
    this.equals = function (comp) {
        return this.toString() == comp.toString();
    };
};

function at(hr, m) {
    return new Clock(hr, m);
};

module.exports.at = at;