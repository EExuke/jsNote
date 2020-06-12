/*******************************************************************************
 * MODULE NAME         : Regular Expression (正则表达式)
 * TARGET ENVIRONMENT  : Any
 * FILE NAME           : regEx.js
 * FIRST CREATION DATE : 2020/06/12
 * ----------------------------------------------------------------------------
 * @Author             : [EExuke]
 * @E_mail             : [EExuke@qq.com]
 * @E_mailVersion      : 1.0
 * @fcopyright Copyright2020 EExuke Inhand.
 ******************************************************************************/
//search() 方法使用正则表达式
var str = "Visit Runoob!"; 
var n = str.search(/Runoob/i);
//输出 n为6

//replace() 方法使用正则表达式
var str = "Visit Microsoft!";
var txt = str.replace(/microsoft/i,"Runoob");
//Visit Runoob!

/*
 *正则表达式修饰符:
 *    i 执行对大小写不敏感的匹配。
 *    g 执行全局匹配（查找全局匹配而非在找到第一个匹配后停止）。
 *    m 执行多行匹配。
 */

/*
 *正则表达式模式:
 *    [abc] 查找方括号之间的任何字符。
 *    [0-9] 查找任何从 0 至 9 的数字。
 *    (x|y) 查找任何以 | 分隔的选项。
 *    \d 查找数字。
 *    \s 查找空白字符。
 *    \b 匹配单词边界。
 *    \uxxxx 查找以十六进制数 xxxx 规定的 Unicode 字符。
 *    n+ 匹配任何包含至少一个 n 的字符串。
 *    n* 匹配任何包含零个或多个 n 的字符串。
 *    n? 匹配任何包含零个或一个 n 的字符串。
 */

//使用 test() 方法：
var patt = /e/;
patt.test("The best things in life are free!");
/e/.test("The best things in life are free!");
//返回true

//使用 exec():
	/e/.exec("The best things in life are free!");
//返回e


