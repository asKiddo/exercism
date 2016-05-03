var ETL = function() {
    this.transform = function(val) {
        var new_data = {};
        
        for(var prop in val) {
            for(var i = 0; i < val[prop].length; i++) {
                new_data[val[prop][i].toLowerCase()] = Number(prop);
            }
        }
        
        return new_data;
    };
};

module.exports = ETL;