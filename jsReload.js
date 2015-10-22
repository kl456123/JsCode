function doAdd(num1,num2){
	if(arguments.length == 1){
		alert(num1 + 10);
	}else if(arguments.length ==2){
		alert(num1+num2);
	}
}
doAdd(10,20);
doAdd(10);
function test(num1,num2){
	arguments[1]=10;
	alert(num2);
}
test(50,70);