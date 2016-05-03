var School = function() {
    var school_roster = {};
    
    this.roster = function() {
        return school_roster;
    };
    
    this.grade = function(g) {
        return school_roster[g] || [];
    };
    
    this.add = function(name, grade) {
        school_roster[grade] = (school_roster[grade] || [])
            .concat(name)
            .sort();
    };
};

module.exports = School;