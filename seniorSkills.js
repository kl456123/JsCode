// for safe 

function Polygon(sides) {
	if (this instanceof Polygon) {
		this.sides = sides;
		this.getArea = function() {
			return 0;
		};
	} else {
		return new Polygon(sides);
	}
}

function Rectangle(width, height, sides) {
	Polygon.call(this, sides);
	this.width = width;
	this.height = height;
	this.getArea = function() {
		return this.width * this.height;
	};
}


// get prototype from Polygon
Rectangle.prototype = new Polygon();
let rect = new Rectangle(5, 10, 2);
console.log(rect.sides);

// bind context to a function
let handler = {
	message: "Event handled",
	handleClick: function(event) {
		console.log("hello world");
	},
};
// let btn = document.getElementById('xx');
// EventUtil.addHandler(btn, handler.handlerClick.bind(handler));

// curry()
function curry(fn) {
	var args = Array.prototype.slice.call(arguments, 1);
	return function() {
		var innerArgs = Array.prototype.slice.call(arguments);
		var finalArgs = args.concat(innerArgs);
		return fn.apply(null, finalArgs);
	};
}

function add(num1, num2) {
	return num1 + num2;
}

var curryAdd = curry(add, 5); //local initial
console.log(curryAdd(3));
console.log(curry(add, 5, 10)());