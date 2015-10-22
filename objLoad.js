function setName(obj){
	obj.name = "Nicholas";
	obj = new Object();
	obj.name = "Greg";
}
var person = new Object();
setName(person);
alert(person.name);
var personA = new Object();
var someone = personA;
someone.name = "Nike";
someone = person;
someone.name = "Greg";
alert(personA.name);
/*I have a question here !*/
/*typeof test*/
var u;
alert(typeof u);
alert(typeof a);