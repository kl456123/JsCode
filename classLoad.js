/*组合式继承*/
function  superType(name) {
	// body...
	this.name = name ;
	this.color = ['red','blue','green'];
}
superType.prototype.sayName = function(){
	console.log(this.name);
};

function subType( name , age ){
	superType.call(this,name);
	this.age = age;
	this.sayHello = function(){
	console.log('Hello Everyone\n');
 }
};
subType.prototype = new superType();
subType.prototype.sayAge = function(){
	console.log("My age is "+this.age+".");
};
/*上面的方法对父类的实例属性进行了重复写入*/
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
// safe mothod  稳妥构造函数
function person(name ,age ,job){
	var o ={};
	o.sayName = function(){
		console.log(name);
	};
	return o;
}
var man = person("xiongliang",19,"programmer");
man.sayName();



/*object()*/
function object(o){
	function F(){}
	F.prototype = o;
	return new F();
}
/*寄生式继承*/
function createAnother(original){
	var clone = object(original);
	clone.sayHi = function(){
		console.log("Hi");
	};
	return clone;
}

var person = {
	name:"Nicholas",
	friends:["Shellby","Court","Van"]
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi();
/*寄生组合式继承（最佳方式）*/
