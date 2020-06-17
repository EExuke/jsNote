/*******************************************************************************
 * MODULE NAME         : jsFunction
 * TARGET ENVIRONMENT  : Any
 * FILE NAME           : myScript.js
 * FIRST CREATION DATE : 2020/06/12
 * ----------------------------------------------------------------------------
 * @Author             : [EExuke]
 * @E_mail             : [EExuke@qq.com]
 * @E_mailVersion      : 1.0
 * @fcopyright Copyright2020 EExuke Inhand.
 ******************************************************************************/
var name;
var len = 16;                                  // Number 通过数字字面量赋值
var points = 10;                              // Number 通过表达式字面量赋值
var lastName = "Johnson";                         // String 通过字符串字面量赋值
var cars = ["Saab", "Volvo", "BMW"];              // Array  通过数组字面量赋值
var person = {firstName:"John", lastName:"Doe"};  // Object 通过对象字面量赋值

len = lastName.length;

/*----------------------------------------------------------------------------*/
function myFunction1()
{
	document.getElementById("demo").innerHTML="我的第一个 JavaScript 函数";
}

function myFunction2()
{
	var person = {
		firstName: "John",
		lastName : "Doe",
		id : 5566,
		fullName : function() 
		{
			return this.firstName + " " + this.lastName;
		}
	};

	document.write(Date() + "<br><br>");
	document.write(length + "<br><br>");
	document.write(person.fullName());    //对象方法
}


