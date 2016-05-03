/*
The sum of the lengths of any two sides of a triangle always exceeds the
length of the third side, a principle known as the _triangle
inequality_.
*/

var Triangle = function(s1, s2, s3) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
    
    this.triangleInequality = !(((this.s1 + this.s2) > this.s3) &&
                                ((this.s1 + this.s3) > this.s2) &&
                                ((this.s2 + this.s3) > this.s1))
    
    this.kind = function() {
        if(this.s1 <= 0 || this.s2 <= 0 || this.s3 <= 0 || this.triangleInequality) {
            throw('illegal triangle');
        } else if(this.s1 == this.s2 && this.s2 == this.s3) {
            return 'equilateral';    
        } else if(this.s1 == this.s2 || this.s1 == this.s3 || this.s2 == this.s3) {
            return 'isosceles';
        } else {
            return 'scalene';
        }
    };
};

module.exports = Triangle;