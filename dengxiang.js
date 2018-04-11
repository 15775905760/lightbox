/**
 * Created by Admin on 2018/4/10.
 */
//var lgbox={//键值对
//    "init":function(){
//        $(document.body).prepend("<div class='lightbox'></div>");
//    }
//};
//lgbox.init();

function mc(){
    $("figure").append("<div class='mcdiv'></div>");
   $(".mcdiv").css({"background-color":"gray", "position":"absolute", "top":"0px", "left":"0px"})
};
mc();
var lightbox = (function (){
    var imgsrclist=[];
    var currentIndex;

    $("figure img").each(function(index,element){
        imgsrclist.push($(element).attr('src'))
    })
    var lgbox={
        "init":function(){
            this.show();
            this.prev();
            this.next();
            this.close();
        },
        "show":function(){
            $("figure").each(function(index,element){
                $(element).click(function(){
                    $("body").append("<div class='lightbox'><img src=''/><div class='jt'><span class='icon-jiantou1 iconfont'>" +
                    "</span><span class='icon-jiantou iconfont'></span></div><span class='icon-yyguanbi2 iconfont'>" +
                    "</span></div>")
                    var str=$(this).children().eq(0).attr('src');
                    $(".lightbox").css({"display":"block"})
                    $(".lightbox img").attr({"src":str})
                    currentIndex=$(this).index();
                })
            });
        },
        "prev":function(){
            //上一张
            $("body").on("click",".icon-jiantou1",function(){
                currentIndex--;
                var src=imgsrclist[currentIndex];
                if(currentIndex<0){
                    currentIndex = imgsrclist.length-1;
                }
                $(".lightbox img").attr({"src":src});
            });
        },
        "next":function(){
            //下一张
            $("body").on("click",".icon-jiantou",function(){
                currentIndex++;
                var src=imgsrclist[currentIndex];
                if(currentIndex>imgsrclist.length-1){
                    currentIndex = 0;
                }
                $(".lightbox img").attr({"src":src});
                //currentIndex<=imgsrclist.length-1;
            })
        },
        "close":function(){
            //关闭
            $("body").on("click",".icon-yyguanbi2",function(){
                $(".lightbox").css({"display":"none"});
            })
        }
    };
    lgbox.init();

})();





