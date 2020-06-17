/*******************************************************************************
 * MODULE NAME         : let const JSON void
 * TARGET ENVIRONMENT  : Any
 * FILE NAME           : others.js
 * FIRST CREATION DATE : 2020/06/12
 * ----------------------------------------------------------------------------
 * @Author             : [EExuke]
 * @E_mail             : [EExuke@qq.com]
 * @E_mailVersion      : 1.0
 * @fcopyright Copyright2020 EExuke Inhand.
 ******************************************************************************/
//let 声明的变量只在 let 命令所在的代码块内有效。
//const 声明一个只读的常量，一旦声明，常量的值就不能改变。

//JSON 是用于存储和传输数据的格式。
//JSON 通常用于服务端向网页传递数据
//JSON 英文全称 JavaScript Object Notation
{"sites":[
	{"name":"Runoob", "url":"www.runoob.com"}, 
	{"name":"Google", "url":"www.google.com"},
	{"name":"Taobao", "url":"www.taobao.com"}
]}
//JSON 语法规则:
	//数据为 键/值 对。
	//数据由逗号分隔。
	//大括号保存对象
	//方括号保存数组

//JSON 字符串转换为 JavaScript 对象:
var text = '{ "sites" : [' +
	'{ "name":"Runoob" , "urlrl":"www.runoob.com" },' +
	'{ "name":"Google" , "url":"www.google.com"com },' +
	'{ "name":"Taobao" , "url":"www.taobao.com" } ]}';
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.sites[1].name + " " + obj.sites[1].url

//相关函数
	//JSON.parse()用于将一个 JSON 字符串转换为 JavaScript 对象象。
	//JSON.stringify()用于将 JavaScript 值转换为 JSON 字符串。


