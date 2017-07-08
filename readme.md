# EROLL
一款web前端的字符滑动组件,下面是显示效果：
<p align="center">
  <img src="https://raw.githubusercontent.com/lsj9383/eroll/master/demo.gif">
</p>

## 一、最小示例
### 1.引入相关文件
在`head`标签中加入所需要的css和js文件。
* eroll.css，该文件是滑动效果的基本布局。
* jquery.min.js，该文件是jquery。
* animateBackground-plugin.js，该文件提供动画支持。
* eroll.js, 该文件是实现滑动效果的核心js代码。
```html
<link rel="stylesheet" href="eroll.css">
<script type='text/javascript' src='jquery.min.js'></script>
<script type="text/javascript" src="animateBackground-plugin.js"></script>
<script type="text/javascript" src="eroll.js"></script>
```
### 2.运行
```html
<body>
	<div id="eroll"></div>
	
	<script type="text/javascript">
		var ro = eroll.init("#eroll", [
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],			//第一个滑动块提供的字符
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 		//第二个滑动块提供的字符
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]]);		//第三个滑动块提供的字符
		ro.roll2string("123");
		ro.roll2string("234");
		ro.roll2string("345");
	</script>
</body>
```
该最小示例没有为显示设置样式，因此采用的是默认样式。

## 二、样式定义

## 三、API
### 1.init
### 2.roll
### 3.roll2index
### 4.roll2string