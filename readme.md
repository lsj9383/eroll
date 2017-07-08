# EROLL
WEB前端的字符滑动组件：
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
该最小示例没有为显示设置样式，因此采用的是默认样式。最小示例的html[代码](https://github.com/lsj9383/eroll/blob/master/demo/simple.html);

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
### 1.*eroll.init*
用于初始化滑动块组件，返回一个对应的滑动块组件对象。
```
var ro = eroll.init(option);
```
option是滑动块组件的配置选项，这应该是一个二维数组。通过这个二维数组，指定了滑动块组件中每个滑动块所具备的待显示字符，只能滑动这些字符出来显示。<br>
```
option = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],		//第一个滑动块的待显示字符
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 	//第二个滑动块的待显示字符
		['a', 'b', 'c', 'd', 'e']]			//第三个滑动块的待显示字符
```

### 2.*roll*
用于指定滑动块组件中某个滑动块滑动到某个值，该值以px为滑动单位
```
ro.roll(0, 30);		//将首个滑动块滑动30px；
```

### 3.*roll2index*
用于指定滑动块组件中某个滑动块滑动到其第几个元素。这个元素在option中定义。
```
ro.roll2index(0, 2);	//将首个滑动块滑动到起第三个元素。
```

### 4.*roll2string*
将滑动块组件滑动到指定的字符串显示，前提是这个字符串中的字符在对应的配置中存在，如果不存在则该滑动块会显示为空。
```
ro.roll2string("123");
```