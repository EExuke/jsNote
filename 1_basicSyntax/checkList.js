/*******************************************************************************
 * MODULE NAME         : check list
 * TARGET ENVIRONMENT  : Any
 * FILE NAME           : checkList.js
 * FIRST CREATION DATE : 2020/06/12
 * ----------------------------------------------------------------------------
 * @Author             : [EExuke]
 * @E_mail             : [EExuke@qq.com]
 * @E_mailVersion      : 1.0
 * @fcopyright Copyright2020 EExuke Inhand.
 ******************************************************************************/
// 以下实例代码用于判断表单字段(fname)值是否存在，如果不存在，就弹出信息，阻止表单提交:
function validateForm() {
	var x = document.forms["myForm"]["fname"].value;
	if (x == null || x == "") {
		alert("名字必须填写");
		return false;
	}
}

//JavaScript 验证输入的数字:
function checkNum() {
	var x, text;

	// 获取 id="numb" 的值
	x = document.getElementById("numb").value;
	// 如果输入的值 x 不是数字或者小于 1 或者大于 10，则提示错误 Not a Number or less than one or greater than 10
	if (isNaN(x) || x < 1 || x > 10) {
		text = "输入错误";
	} else {
		text = "输入正确";
	}
	document.getElementById("checkdemo").innerHTML = text;
}

//验证邮箱地址
function validateEmail(){
	var x=document.forms["myForm"]["email"].value;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
		alert("不是一个有效的 e-mail 地址");
		return false;
	}
}

//checkValidity() 方法:
function myFunction() {
	var inpObj = document.getElementById("id1");
	if (inpObj.checkValidity() == false) {
		document.getElementById("demoV").innerHTML = inpObj.validationMessage;
	}
}

// 判断输入是否为数字
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

//显式函数绑定
var person1 = {
	fullName: function() {
		return this.firstName + " " + this.lastName;
	}
}
var person2 = {
	firstName:"John",
	lastName: "Doe",
}
person1.fullName.call(person2);  // 返回 "John Doe"

