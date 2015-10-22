function factorial(num){
	if(num<=1)
		return 1;
	return num * arguments.callee(num-1);
}
var tempFunc = factorial;
alert(tempFunc(4));
/*this test*/
function thisTest(){
	alert(this.color);
}
var color = "red";
var o={};
o.color="blue";
o.thisTest=thisTest;
thisTest();
o.thisTest();