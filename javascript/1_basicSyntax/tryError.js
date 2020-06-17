/*******************************************************************************
 * MODULE NAME         : error try
 * TARGET ENVIRONMENT  : Any
 * FILE NAME           : tryError.js
 * FIRST CREATION DATE : 2020/06/12
 * ----------------------------------------------------------------------------
 * @Author             : [EExuke]
 * @E_mail             : [EExuke@qq.com]
 * @E_mailVersion      : 1.0
 * @fcopyright Copyright2020 EExuke Inhand.
 ******************************************************************************/
//try...catch...

var txt="";
function message()
{
	try {
		adddlert("Welcome guest!");
	}
	catch(err) {
		txt="本页有一个错误。\n\n";
		txt+="错误描述：" + err.message + "\n\n";
		txt+="点击确定继续。\n\n";
		alert(txt);
	}
}

//finally 语句不论之前的 try 和 catch 中是否产生异常都会执行该代码块。
//throw 语句允许我们创建自定义错误
function myFunction() {
	var message, x;
	message = document.getElementById("p01");
	message.innerHTML = "";
	x = document.getElementById("demo").value;
	try {
		if(x == "") throw "值是空的";
		if(isNaN(x)) throw "值不是一个数字";
		x = Number(x);
		if(x > 10) throw "太大";
		if(x < 5) throw "太小";
	}
	catch(err) {
		message.innerHTML = "错误: " + err + ".";
	}
	finally {
		document.getElementById("demo").value = "";
	}
}


