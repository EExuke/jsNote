/*******************************************************************************
 * MODULE NAME         : note for js
 * TARGET ENVIRONMENT  : Any
 * FILE NAME           : strAndSyntax.js
 * FIRST CREATION DATE : 2020/06/12
 * ----------------------------------------------------------------------------
 * @Author             : [EExuke]
 * @E_mail             : [EExuke@qq.com]
 * @E_mailVersion      : 1.0
 * @fcopyright Copyright2020 EExuke Inhand.
 ******************************************************************************/
/*
 *字符串方法：
 * charAt()    返回指定索引位置的字符
 * charCodeAt()    返回指定索引位置字符的 Unicode 值
 * concat()    连接两个或多个字符串，返回连接后的字符串
 * fromCharCode()    将 Unicode 转换为字符串
 * indexOf()    返回字符串中检索指定字符第一次出现的位置
 * lastIndexOf()    返回字符串中检索指定定字符最后一次出现的位置
 * localeCompare()    用本地特定的顺序来比较两个字符串
 * match()    找到一个或多个正则表达式的匹配
 * replace()    替换与正则表达式匹配的子串
 * search()    检索与正则表达式相匹配的值
 * slice()    提取字符串的片断，并在新的字符串中返回被提取的部分
 * split()    把字符串分割为子字符串数组
 * substr()    从起始索引号提取字符串中指定数目的字符
 * substring()    提取字符串中两äª指定的索引号之间的字符
 * toLocaleLowerCase()    根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射
 * toLocaleUpperCase()    根据主机的语言环境把字符串转换为小写主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射
 * toLowerCase()    把字符串转换为小写
 * toString()    返回字符串对象值
 * toUpperCase()    把字符串转换为大写
 * trim()    移除字符串首尾空白
 * valueOf()    返回某个字符串对象的原始值
 */

//规则:如果把数字与字符串相加，结果将成为字符串！

var d = new Date();
var time = d.getHours();
if (time < 10) {
	document.write("<b>早上好</b>");
}
else if (time>=10 && time<20){
	document.write("<b>今天好</b>");
}
else{
	document.write("<b>晚上好!</b>");
}

switch(n) {
	case '6':
		x="今天是周六";
		break;
	case '7':
		x="今天是周日";
		break;
	default:
		x="期待周末";
}

for (var i = 0; i < car.length; i++) {
	document.write(cars[i] + "<br>");
};

while (/* condition */) {
	/* code */
}

do {
	/* code */
} while (/* condition */);


/*
 *break labelname;
 *continue labelname;
 *continue 语句（带有或不带标签引用）只能用在循环中。
 *break 语句（不带标签引用），只能用在循环或 switch 中。
 *通过标签引用，break 语句可用于跳出任何 JavaScript 代码块：
 */
cars=["BMW","Volvo","Saab","Ford"];
list: 
{
	document.write(cars[0] + "<br>"); 
	document.write(cars[1] + "<br>"); 
	document.write(cars[2] + "<br>"); 
	break list;
	document.write(cars[3] + "<br>"); 
	document.write(cars[4] + "<br>"); 
	document.write(cars[5] + "<br>"); 
}

var person = null;          // 值为 null(空), 但类型为对象
var person = undefined;     // 值为 undefined, 类型为 undefined

/*
 * JavaScript 类型转换:
 * Number() 转换为数字， String() 转换为字符串， Boolean() 转化为布尔值
 * typeof 返回变量类型
 */

/*
 *typeof 操作符
 *你可以使用 typeof 操作符来查看 JavaScript 变量的数据类型。
 *typeof "John"                 // 返回 string
 */

/*
 *constructor 属性
 *constructor 属性返回所有 JavaScript 变量的构造函数。
 *"John".constructor                 // 返回函数 String()  { [native code] }
 */

