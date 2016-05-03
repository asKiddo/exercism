var SpaceAge = function (age) {
    this.seconds = age;
    
    var earth_orbital = 31557600;   //seconds in an Earth orbital period
    var orbital_factors = {         //division factor of each planet to Earth's year
        'Earth' : 1,
        'Mercury' : 0.2408467,
        'Venus' : 0.61519726,
        'Mars' : 1.8808158,
        'Jupiter' : 11.862615,
        'Saturn' : 29.447498,
        'Uranus' : 84.016846,
        'Neptune' : 164.79132
    };
    
    var formatReturn = function (num) {
        return Number(num.toFixed(2));
    };
    
    this.onPlanet = function (planet) {
        return (this.seconds / earth_orbital) / orbital_factors[planet];
    };
    
    //How can I reduce the function creation below?!
    this.onEarth = function () {
        return formatReturn(this.onPlanet('Earth'));
    };
    
    this.onMercury = function () {
        return formatReturn(this.onPlanet('Mercury'));
    };
    
    this.onVenus = function() {
        return formatReturn(this.onPlanet('Venus'));
    };
    
    this.onMars = function() {
        return formatReturn(this.onPlanet('Mars'));
    };
    
    this.onJupiter = function() {
        return formatReturn(this.onPlanet('Jupiter'));
    };
    
    this.onSaturn = function() {
        return formatReturn(this.onPlanet('Saturn'));
    };
    
    this.onUranus = function() {
        return formatReturn(this.onPlanet('Uranus'));
    };
    
    this.onNeptune = function() {
        return formatReturn(this.onPlanet('Neptune'));
    };
};

module.exports = SpaceAge;