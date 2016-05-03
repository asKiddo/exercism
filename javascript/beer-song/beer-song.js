/*
Sings 99 bottles of beer on the wall
*/



var BeerSong = function() {};


BeerSong.prototype.verse = function(num) {
	var initBottles = (num > 0 ? (num + ' bottle'  + (num > 1 ? 's':'')) : 'no more bottles');
	var newBottles = ((num-1) > 0 ? ((num-1) + ' bottle'  + ((num-1) > 1 ? 's':'')) : 'no more bottles');
	var firstVerse = initBottles.charAt(0).toUpperCase() + initBottles.slice(1) + ' of beer on the wall, ' + initBottles + ' of beer.\n';
	
	if (num == 0) {
		var secondVerse = 'Go to the store and buy some more, 99 bottles of beer on the wall.\n';
	} else {
		var secondVerse = 'Take ' + (num == 1 ? 'it':'one') + ' down and pass it around, ' + newBottles + ' of beer on the wall.\n';
	}
	
	return firstVerse + secondVerse;
};

BeerSong.prototype.sing = function(startVal, endVal) {
	var startNum = startVal
	var endNum = endVal || 0;
	var toSing = [];
	
	for(var i = startNum; i >= endNum; i--) {
		toSing.push(this.verse(i));
	}
	
	return toSing.join('\n');
}

module.exports = BeerSong;