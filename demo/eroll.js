var eroll = {};

eroll.init = function(rollid, option){
    var mainroll = $(rollid);			//滑动块所处的顶层div
    for(var groupNum=0; groupNum<option.length; groupNum++){		//读取option中的二维数组
        words = option[groupNum];									//滑动块中所存在的数字
        var new_roll_face = "<div class='roll-face'><div class='roll-words'>";	//添加滑动块以及滑动块所使用的数字
        for(var wordNum=0; wordNum<words.length; wordNum++){
            new_roll_face += "<div class='word'>"+words[wordNum]+"</div>";
        }
        new_roll_face = new_roll_face+"</div></div>";
        mainroll.append(new_roll_face);
    }

    var erollObject = new Object();
    erollObject.id = rollid;		//记录当前初始化的滑动块的顶层div
    erollObject.op = option;		//记录当前初始化滑动块的配置
    erollObject.roll = function(groupNum, value){		//指定第几个滑动块滑动的大小，以px为单位
        if(value<0){
            var strValue = Math.abs(value)+"px";
        }else{
            var strValue = "-"+value+"px";
        }
        $(this.id+" .roll-face").eq(groupNum).find(".roll-words").animate({top: strValue}, 'slow', 'swing', function(){});
    }

    erollObject.roll2index = function(groupNum, index){	//指定第几个滑动块滑动到第几个元素
        var strWordHeight = $(this.id+" .roll-face").eq(groupNum).find(".roll-words .word").eq(0).css('height');
        var wordHeight = parseInt(strWordHeight);
        var value = wordHeight * index;
        this.roll(groupNum, value);
    }

    erollObject.roll2string = function(str){			//将滑动块设置为字符串显示的形式
        for(var wordNum=0; wordNum<str.length; wordNum++){
            var words = this.op[wordNum];
            var index = -1;
            for(var i=0; i<words.length; i++){
                if(words[i]==str[wordNum]){
                    index = i;
                    break;
                }
            }
            this.roll2index(wordNum, index);
        }
    }

    return erollObject;
}