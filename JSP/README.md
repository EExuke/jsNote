# JSP 教程

JSP 与 PHP、ASP、ASP.NET 等语言类似，运行在服务端的语言。

JSP（全称Java Server Pages）是由 Sun Microsystems 公司倡导和许多公司参与共同创建的一种使软件开发者可以响应客户端请求，
而动态生成 HTML、XML 或其他格式文档的Web网页的技术标准。

JSP 技术是以 Java 语言作为脚本语言的，JSP 网页为整个服务器端的 Java 库单元提供了一个接口来服务于HTTP的应用程序。

JSP文件后缀名为 *.jsp 。

JSP开发的WEB应用可以跨平台使用，既可以运行在 Linux 上也能运行在 Windows 上。


# JSP 处理
以下步骤表明了 Web 服务器是如何使用JSP来创建网页的：

	就像其他普通的网页一样，您的浏览器发送一个 HTTP 请求给服务器。

	Web 服务器识别出这是一个对 JSP 网页的请求，并且将该请求传递给 JSP 引擎。通过使用 URL或者 .jsp 文件来完成。

	JSP 引擎从磁盘中载入 JSP 文件，然后将它们转化为 Servlet。这种转化只是简单地将所有模板文本改用 println() 语句，并且将所有的 JSP 元素转化成 Java 代码。

	JSP 引擎将 Servlet 编译成可执行类，并且将原始请求传递给 Servlet 引擎。

	Web 服务器的某组件将会调用 Servlet 引擎，然后载入并执行 Servlet 类。在执行过程中，Servlet 产生 HTML 格式的输出并将其内嵌于 HTTP response 中上交给 Web 服务器。

	Web 服务器以静态 HTML 网页的形式将 HTTP response 返回到您的浏览器中。

	最终，Web 浏览器处理 HTTP response 中动态产生的HTML网页，就好像在处理静态网页一样。
