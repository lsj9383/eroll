var eroll = {};

eroll.init = function(rollid, option){
    var mainroll = $(rollid);
    for(var groupNum=0; groupNum<option.length; groupNum++){
        words = option[groupNum];
        var new_roll_face = "<div class='roll-face'><div class='roll-words'>";
        for(var wordNum=0; wordNum<words.length; wordNum++){
            new_roll_face += "<div class='word'>"+words[wordNum]+"</div>";
        }
        new_roll_face = new_roll_face+"</div></div>";
        mainroll.append(new_roll_face);
    }

    var erollObject = new Object();
    erollObject.id = rollid;
    erollObject.op = option;
    erollObject.roll = function(groupNum, value){
        if(value<0){
            var strValue = Math.abs(value)+"px";
        }else{
            var strValue = "-"+value+"px";
        }
        $(this.id+" .roll-face").eq(groupNum).find(".roll-words").animate({top: strValue}, 'slow', 'swing', function(){});
    }

    erollObject.roll2index = function(groupNum, index){
        var strWordHeight = $(this.id+" .roll-face").eq(groupNum).find(".roll-words .word").eq(0).css('height');
        var wordHeight = parseInt(strWordHeight);
        var value = wordHeight * index;
        this.roll(groupNum, value);
    }

    erollObject.roll2string = function(str){
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