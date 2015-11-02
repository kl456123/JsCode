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
	superType.call(this,name);//在子类实例化父类实例属性
	this.age = age;
	this.sayHello = function(){
	console.log('Hello Everyone\n');
 };
}
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

/*test object()*/
var obj = {
	color:"black"
};
var anotherobj = object(obj);
console.log(obj ===obj);
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
// 寄生就是在别人的基础上再加工
/*好的继承函数*/
function inheritPrototype(subType , superType){
	var prototype  = object(superType.prototype);
	prototype.constructor = subType;
	subType.prototype = prototype;
}
console.log(subType.constructor);//由function产生的构造函数
/*test Function()*/
var foo = new Function();
console.log(foo.constructor);
console.log(foo._proto_);


console.log(BaseComponent.prototype);



/*module mode*/
function BaseComponent(){
	this.color  = "black";
}
var application = function(){
	// private variable and methods
	var components = new Array();
	// initial
	components.push(new BaseComponent());
	// gloable methods
	return {
		getComponentCount : function(){
			return components.length;
		},

		registerComponent : function(component){
			if(typeof component =="object"){
			components.push(component);				
			}
		}
	};
}();
console.log(application);
console.log(application.getComponentCount());
application.registerComponent({color:"blue"});
console.log(application.getComponentCount());


/*enrich module mode*/
// 返回带有共有方法的对象
// 返回带有某些公有方法的基础控件
var app = function(){
	var components = new Array();	
	var app = new BaseComponent();
	app.getComponentCount =  function(){
		return components.length;
	};

	app.registerComponent = function(){
		if(typeof component =="object"){
			components.push(component);				
			}
	};
	
	return app;
};
