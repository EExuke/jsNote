/*******************************************************************************
 * MODULE NAME         : 异步函数执行
 * TARGET ENVIRONMENT  : Any
 * FILE NAME           : readFile.js
 * FIRST CREATION DATE : 2020/06/15
 * ----------------------------------------------------------------------------
 * @Author             : [EExuke]
 * @E_mail             : [EExuke@qq.com]
 * @E_mailVersion      : 1.0
 * @fcopyright Copyright2020 EExuke Inhand.
 ******************************************************************************/
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
	if (err){
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});

console.log("程序执行完毕");
