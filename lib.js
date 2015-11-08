/*This is a javascript file containing some util .it is a JS library*/

// deepcope function

function clone(Obj) {
    var buf;
    if (Obj instanceof Array) {
        buf = []; //创建一个空的数组 
        var i = Obj.length;
        while (i--) {
            buf[i] = clone(Obj[i]);
        }
        return buf;
    } else if (Obj instanceof Object) {


        buf = {}; //创建一个空对象 
        if (Obj instanceof Function) {
            return Obj;
        } else {
            for (var k in Obj) { //为这个对象添加新的属性 
                buf[k] = clone(Obj[k]);
            }
        }
        return buf;


    } else {

        return Obj;

    }
}
/*print */
class Util {
    static print(text = '') {
        console.log(text);
    }
}

// test code
let myObj = {};
myObj.sayHi = function() {
    console.log('Hi');
}
Util.print(myObj.sayHi instanceof Object);
myObj.name = "myObj";

let anoObj = clone(myObj);
Util.print(anoObj);
Util.print(typeof(anoObj.sayHi));
anoObj.sayHi();



/**/
