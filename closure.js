/*compare age bettwen two objections*/
function  createComparisonFunction(propertyName){
	return function(object1 , object2){
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];

		if(value1 < value2){
			return -1;
		}else if(value1>value2){
			return 1;
		}else{
			return 0;
		}
	};
}
function demoClass(age){
	this.age = age;
}
var demo1 = new demoClass(15);
var demo2 = new demoClass(20);
var property =  "age";
var comparison  = createComparisonFunction(property);
var result = comparison(demo1,demo2);
console.log(result);
// deallocate 
comparison = null;

/*variety and closure*/
// 10 closures here
function createFunction(){
	var res = new Array();
	for (var i = 0;i<10;i++){
		res[i] = (function(num){
			return function(){
				return num;
			};
		})(i);
	}
	return res;
}
var res = createFunction();
for(var i = 0;i<10;i++){
	var num =  res[i]();
	console.log(num);
}
// deallocate "res"
res  = null;


/*private variable and method by colsure*/
// 有两种方法可以实现创建特权方法
// 1.在构造函数里定义特权方法（有缺陷）
function MyObject(){
	var privateVariable = 10;

	function privateFunction(){
		return false ;
	}
	// private method
	this.publilcMethod = function(){
		privateVariable ++;
		return privateFunction();
	}
	this.getPrivateVariable = function(){
		return privateVariable;
	}
}
var myobject = new MyObject();
console.log(myobject.publilcMethod());
console.log(myobject.getPrivateVariable());
// another example
function Person(name){
	this.setName = function(value){
		name = value;
	};
	this.getName = function(){
		return name;
	};
}
var person =  new Person("Nicholas");
console.log(person.getName());
person.setName("zhangshihan");
console.log(person.getName());
// 2.使用静态私有变量来实现特权方法(static local variables)
(function(){
	var privateVariable = 10;
	function privateFunction(){
		return false;
	}
	// 构造函数
	 MyObject  = function(){};
	 MyObject.prototype.getPrivateVariable = function(){
	 	privateVariable ++;
	 	return privateFunction();
	 };

})();