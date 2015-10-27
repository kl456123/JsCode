function  superType(name) {
	// body...
	this.name = name ;
	this.color = ['red','blue','green'];
}
superType.prototype.sayName = function(){
	console.log(this.name);
}

function subType( name , age ){
	superType.call(this,name);
	this.age = age;
	this.sayHello = function(){
	console.log('Hello Everyone\n');
}
}
subType.prototype = new superType();
subType.prototype.sayAge = function(){
	console.log("My age is "+this.age+".");
}
var demo1 = new subType("zhangsansan",20);
demo1.sayHello();
demo1.sayName();
demo1.sayAge();
console.log(demo1.color);
demo1.color.push("black");
console.log(demo1.color);
var demo2 = new subType();
console.log(demo2.color);
// demo1 is different from demo2.
// safe mothod
function person(name ,age ,job){
	var o = new Object();
	o.sayName = function(){
		console.log(name);
	}
	return o;
}
var man = person("xiongliang",19,"programmer");
man.sayName();
