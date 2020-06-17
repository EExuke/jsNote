/*******************************************************************************
 * MODULE NAME         : debug for js
 * TARGET ENVIRONMENT  : Any
 * FILE NAME           : debug.js
 * FIRST CREATION DATE : 2020/06/12
 * ----------------------------------------------------------------------------
 * @Author             : [EExuke]
 * @E_mail             : [EExuke@qq.com]
 * @E_mailVersion      : 1.0
 * @fcopyright Copyright2020 EExuke Inhand.
 ******************************************************************************/
//F12
//debugger

//变量提升：
//JavaScript 中，函数及变量的声明都将被提升到函数的最顶部。
//JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。
//JavaScript 只有声明的变量会提升，初始化的不会。如：var x = 5;

//定义数组元素，最后不能添加逗号
//定义对象，最后不能添加逗号
//Undefined(变量) 不是 Null(对象)
//在每个代码块中 JavaScript 不会创建一个新的作用域，一般各个代码块的作用域都是全局的
for (var i = 0; i < 10; i++) {
	some code
}
return i;    //返回10

