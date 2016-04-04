$(function(){

      $(".ms-img-right").eq(0).addClass("ms-one")
      $(".ms-img-right").eq(1).addClass("ms-two");
      $(".ms-img-right").eq(0).find(".ms-box").eq(0).addClass("ms-box-one");

      // 大盒子宽高
      $(".ms-huanjing-img").height($(".ms-huanjing-img").width()*1.6)
      // 左边的设置高度
      var width=$(".ms-img-right").eq(0).width();
      $(".ms-img-right").height(width*567/200);
      var height=width*267/187.5;
      $(".ms-img-right").eq(0).find(".ms-box").eq(0).css({"top":"0","height":height});
      var top=$(".ms-img-right").eq(0).find(".ms-box").eq(0).height();
      $(".ms-img-right").eq(0).find(".ms-box").eq(2).css({"top":top+"px","height":height});
      $(".ms-img-right").eq(0).find(".ms-box").eq(1).css({"top":height-(width*152/194)/2+"px","height":width*152/194,"z-index":0});
      // 右边的设置高度
      var lwidth=$(".ms-img-right").eq(1).width();
      var lheight=lwidth*385/273;
      $(".ms-img-right").eq(1).find(".ms-box").eq(0).css({"top":"0","height":lheight});
      var ltop=$(".ms-img-right").eq(1).find(".ms-box").eq(0).height();
      var llheight=lwidth*144/285;
      $(".ms-img-right").eq(1).find(".ms-box").eq(2).css({"top":ltop+"px","height":llheight});
      $(".ms-img-right").eq(1).find(".ms-box").eq(1).css({"top":lheight-lwidth*252/261/2+"px","height":lwidth*252/261,"z-index":0});

      $(window).resize(function(){
        // 大盒子宽高
        $(".ms-huanjing-img").height($(".ms-huanjing-img").width()*1.6)
        // 左边的设置高度
        var width=$(".ms-img-right").eq(0).width();
        $(".ms-img-right").height(width*567/200);
        var height=width*267/187.5;
        $(".ms-img-right").eq(0).find(".ms-box").eq(0).css({"top":"0","height":height});
        var top=$(".ms-img-right").eq(0).find(".ms-box").eq(0).height();
        $(".ms-img-right").eq(0).find(".ms-box").eq(2).css({"top":top+"px","height":height});
        $(".ms-img-right").eq(0).find(".ms-box").eq(1).css({"top":height-(width*152/194)/2+"px","height":width*152/194,"z-index":0});
        // 右边的设置高度
        var lwidth=$(".ms-img-right").eq(1).width();
        var lheight=lwidth*385/273;
        $(".ms-img-right").eq(1).find(".ms-box").eq(0).css({"top":"0","height":lheight});
        var ltop=$(".ms-img-right").eq(1).find(".ms-box").eq(0).height();
        var llheight=lwidth*144/285;
        $(".ms-img-right").eq(1).find(".ms-box").eq(2).css({"top":ltop+"px","height":llheight});
        $(".ms-img-right").eq(1).find(".ms-box").eq(1).css({"top":lheight-lwidth*252/261/2+"px","height":lwidth*252/261,"z-index":0});

      })

      var top=$(".ms-huanjing-img").offset().top;
      var cheight=document.documentElement.clientHeight;
      var sign=true;
      $(window).scroll(function(){
          var scroll=$(document).scrollTop();
          if(scroll>top-cheight+100){
            if(!sign){
              return;
            }
            sign=false;
            $(".ms-img-right").eq(0).find(".ms-box").eq(0).animate({"top":-width*152/194/2},600)
            $(".ms-img-right").eq(0).find(".ms-box").eq(2).animate({"top":(height+width*152/194/2)},600)
            $(".ms-img-right").eq(1).find(".ms-box").eq(0).animate({"top":-(lwidth*252/261/2)},600)
            $(".ms-img-right").eq(1).find(".ms-box").eq(2).animate({"top":lheight+lwidth*252/261/2},600)
          }

      })

      var obj=$(".ms-class-lis");

      obj.eq(0).css({"color":"#FB7D29","border-top":"2px solid #FB7D29"}).find(".ms-h").css({"background-color":"#FFF9F4"})
      obj.eq(1).css({"color":"#3888F4","border-top":"2px solid #3888F4"}).find(".ms-h").css({"background-color":"#FAFCFF"})
      obj.eq(2).css({"color":"#EF3F64","border-top":"2px solid #EF3F64"}).find(".ms-h").css({"background-color":"#FEF2F4"})
      obj.eq(3).css({"color":"#3888F4","border-top":"2px solid #3888F4"}).find(".ms-h").css({"background-color":"#FBFDFB"})




})
