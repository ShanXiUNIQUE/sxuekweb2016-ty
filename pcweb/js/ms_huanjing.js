$(function(){
    $(".ms-img-right").eq(0).addClass("ms-one");
    $(".ms-img-right").eq(1).addClass("ms-two");
    $(".ms-img-right").eq(2).addClass("ms-three");
    $(".ms-img-right").eq(0).find(".ms-box").eq(0).addClass("ms-box-one");
    $(".ms-img-right").eq(0).find(".ms-box").eq(1).addClass("ms-box-hidden");
    $(".ms-img-right").eq(0).find(".ms-box").eq(2).addClass("ms-box-two");
    $(".ms-img-right").eq(1).find(".ms-box").eq(0).addClass("ms-box-three");
    $(".ms-img-right").eq(1).find(".ms-box").eq(1).addClass("ms-box-hidden-two");
    $(".ms-img-right").eq(1).find(".ms-box").eq(2).addClass("ms-box-four");
    $(".ms-img-right").eq(2).find(".ms-box").eq(0).addClass("ms-box-five");
    $(".ms-img-right").eq(2).find(".ms-box").eq(1).addClass("ms-box-fix");
    var top=$(".ms-huanjing-img").offset().top;
    var height=document.documentElement.clientHeight;
    var sign=true;
    $(window).scroll(function(){

          var scroll=$(document).scrollTop();
          if(scroll>top-height+100){
            if(!sign){
              return;
            }
            sign=false;
              $(".ms-img-left").animate({opacity:1},800,function(){
                var obj=$("<div>");
                obj.css({"width":"0px","height":"2px","background":"#fff","position":"absolute","z-index":50,"left":"350px","top":"168px"});
                obj.appendTo($(this));
                obj.animate({width:110},300);
                $(".ms-img-right").eq(0).find(".ms-box").eq(0).animate({opacity:1},800)
                $(".ms-img-right").eq(0).find(".ms-box").eq(0).animate({top:-82},800,function(){
                  var obj=$("<div>");
                  obj.css({"width":"0px","height":"2px","background":"orange","position":"absolute","z-index":50,"left":"180px","top":"408px"});
                  obj.appendTo($(".ms-img-right").eq(0));
                  obj.animate({width:60},300);
                });
                $(".ms-img-right").eq(0).find(".ms-box").eq(2).animate({opacity:1},800);
                $(".ms-img-right").eq(0).find(".ms-box").eq(2).animate({top:382},800)
                $(".ms-img-right").eq(0).find(".ms-box").eq(1).animate({opacity:1},1200,function(){
                  $(".ms-img-right").eq(1).find(".ms-box").eq(0).animate({opacity:1},800)
                  $(".ms-img-right").eq(1).find(".ms-box").eq(2).animate({opacity:1},800)
                  $(".ms-img-right").eq(1).find(".ms-box").eq(0).animate({top:-40},800)
                  $(".ms-img-right").eq(1).find(".ms-box").eq(2).animate({top:580},800)
                  $(".ms-img-right").eq(1).find(".ms-box").eq(1).animate({opacity:1},1200,function(){
                      var obj=$("<div>");
                      obj.css({"width":"0px","height":"2px","background":"#fff","position":"absolute","z-index":50,"left":"160px","top":"386px"});
                      obj.appendTo($(".ms-img-right").eq(1));
                      obj.animate({width:130},300);
                      $(".ms-img-right").eq(2).find(".ms-box").eq(0).animate({opacity:1},800)
                      $(".ms-img-right").eq(2).find(".ms-box").eq(1).animate({opacity:1},800)
                  })
                })
            })

          }
        })

        // 报名开始
        var obj=$(".ms-class-lis");

        obj.eq(0).css({"margin-left":"0","color":"#FB7D29","border-top":"2px solid #FB7D29"}).find(".ms-h").css({"background-color":"#FFF9F4"})
        obj.eq(1).css({"color":"#3888F4","border-top":"2px solid #3888F4"}).find(".ms-h").css({"background-color":"#FAFCFF"})
        obj.eq(2).css({"color":"#EF3F64","border-top":"2px solid #EF3F64"}).find(".ms-h").css({"background-color":"#FEF2F4"})
        obj.eq(3).css({"color":"#3888F4","border-top":"2px solid #3888F4"}).find(".ms-h").css({"background-color":"#FBFDFB"})
})
