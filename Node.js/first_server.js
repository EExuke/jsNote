/*******************************************************************************
 * MODULE NAME         : node.js server
 * TARGET ENVIRONMENT  : Any
 * FILE NAME           : server.js
 * FIRST CREATION DATE : 2020/06/15
 * ----------------------------------------------------------------------------
 * @Author             : [EExuke]
 * @E_mail             : [EExuke@qq.com]
 * @E_mailVersion      : 1.0
 * @fcopyright Copyright2020 EExuke Inhand.
 ******************************************************************************/

/*
 *请求（require）Node.js 自带的 http 模块，并且把它赋值给 http 变量
 */
var http = require('http');

/*
 *使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。
 *函数通过 request, response 参数来接收和响应数据
 */
http.createServer(function (request, response) {
	// 发送 HTTP 头部
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	// 发送响应数据 "Hello World"
	response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');

