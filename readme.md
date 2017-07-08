# EROLL
一款web前端的字符滑动组件,下面是显示效果：
<p align="center">
  <img src="https://raw.githubusercontent.com/lsj9383/eroll/master/demo.gif">
</p>

## 一、最小示例
```html
<html>
    <head>
        <link rel="stylesheet" href="eroll.css">
		<script type='text/javascript' src='jquery.min.js'></script>
        <script type="text/javascript" src="animateBackground-plugin.js"></script>
        <script type="text/javascript" src="eroll.js"></script>
		
    </head>

    <body>
        <div id="eroll"></div>
		
        <script type="text/javascript">
            $(document).ready(function(){
                var ro = eroll.init("#eroll", [
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]]);
				ro.roll2string("432");
				ro.roll2string("843");
				ro.roll2string("390");
            });
        </script>
    </body>
</html>
```
该最小示例没有为显示设置样式，因此采用的是默认样式。最小demo的html[代码](https://github.com/lsj9383/eroll/blob/master/demo/simple.html);

## 二、样式定义
如果没有定义样式，则是采用默认的样式，如果想自定义滑动块样式，则需要添加css代码。需要注意的是，每个滑动块都采用的是同一个样式。设置滑动块的样式，主要是对class="roll-face"的类进行样式设置。<br>
需要注意的是，滑动块默认采用float:left;
```css
.roll-face {
	width: 30px;
	height: 60px;
	line-height: 60px;
	font-size: 40px;
	border-radius: 3px;
	background-color: #0045AD;
	color: white;
	margin-left:20px;
}
```
可以将以上样式添加到最小示例代码(simple.html)中进行测试。


## 三、API
### 1.init
### 2.roll
### 3.roll2index
### 4.roll2string