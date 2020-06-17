/*******************************************************************************
 * MODULE NAME         : function define
 * TARGET ENVIRONMENT  : Any
 * FILE NAME           : define.js
 * FIRST CREATION DATE : 2020/06/12
 * ----------------------------------------------------------------------------
 * @Author             : [EExuke]
 * @E_mail             : [EExuke@qq.com]
 * @E_mailVersion      : 1.0
 * @fcopyright Copyright2020 EExuke Inhand.
 ******************************************************************************/
//匿名函数
var x = function (a, b) {return a * b};

//Function() 构造函数
var myFunction = new Function("a", "b", "return a * b");
var y = myFunction(4, 3);

//自调用函数(直接执行)
(function () {
	var m = "Hello!!";      // 我将调用自己
})();

//函数是对象
//arguments.length 属性返回函数调用过程接收到的参数个数
function myFunction(a, b) {
	return arguments.length;
}
//toString() 方法将函数作为一个字符串返回:
function myFunction(a, b) {
	    return a * b;
}
var txt = myFunction.toString();

//箭头函数
//(参数1, 参数2, …, 参数N) => { 函数声明 }
//(参数1, 参数2, …, 参数N) => 表达式(单一)
//相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }
//() => {函数声明}    *没有参数


