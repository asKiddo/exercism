/*
- If the phone number is less than 10 digits assume that it is bad
  number
- If the phone number is 10 digits assume that it is good
- If the phone number is 11 digits and the first number is 1, trim the 1
  and use the last 10 digits
- If the phone number is 11 digits and the first number is not 1, then
  it is a bad number
- If the phone number is more than 11 digits assume that it is a bad
  number
*/

var PhoneNumber = function(num) {
    this.num = num.match(/[0-9]+/g).join('');
    if (this.num[0] == 1 && this.num.length == 11) {
        this.num = this.num.substring(1);
    }
    if(this.num.length != 10) {
        this.num = '0000000000';
    }
};

PhoneNumber.prototype.number = function() {
    return this.num;
};

PhoneNumber.prototype.areaCode = function() {
    return this.num.substr(0,3);
}

PhoneNumber.prototype.toString = function() {
    return '(' + this.areaCode() + ') ' + this.num.substr(3,3) + '-' + this.num.substr(6,4);
};

module.exports = PhoneNumber;