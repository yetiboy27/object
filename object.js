var Coordinate = function(x, y) {
	this.horizontal = x
	this.vertical = y
}

// var firstLocation = new Coordinate(-6, 5)
// var newX = Math.floor((Math.random()*20)-10)
// var newY = Math.floor((Math.random()*20)-10)
// var secondLocation = new Coordinate(newX, newY)
var manyLocations = []
for (var i = 0; i <= 1000; i++) {
	var nextX = Math.floor((Math.random()*20)-10)
	var nextY = Math.floor((Math.random()*20)-10)
	manyLocations.push(new Coordinate(nextX, nextY))
}


var Person = function(firstName,lastName) {
	this.firstname = firstName
	this.lastname = lastName
	this.greet = function() {
		return 'Hello my name is ' + this.firstname + this.lastname + "."
	}
}

var fred = new Person('Fred', 'Nolting')
console.log(fred.greet());
