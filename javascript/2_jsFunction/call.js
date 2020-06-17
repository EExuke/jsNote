//使用构造函数调用函数
//如果函数调用前使用了 new 关键字, 则是调用了构造函数。
//这看起来就像创建了新的函数，但实际上 JavaScript 函数是重新创建的对象：
// 构造函数:
function myFunction(arg1, arg2) {
	this.firstName = arg1;
	this.lastName  = arg2;
}
// This creates a new object
var x = new myFunction("John","Doe");
x.firstName;                             // 返回 "John"


//作为函数方法调用函数
//在 JavaScript 中, 函数是对象。JavaScript 函数有它的属性和方法。
//call() 和 apply() 是预定义的函数方法。 两个方法可用于调用函数，两个方法的第一个参数必须是对象本身。
function myFunction(a, b) {
	    return a * b;
}
myObject = myFunction.call(myObject, 10, 2);     // 传入参数，返回 20

function myFunction(a, b) {
	    return a * b;
}
myArray = [10, 2];
myObject = myFunction.apply(myObject, myArray);  // 传入参数数组，返回 20


//闭包：函数内嵌套函数
function add() {
	var counter = 0;
	function plus() {counter += 1;}
	plus();    
	return counter; 
}
