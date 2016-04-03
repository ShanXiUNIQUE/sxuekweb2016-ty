$(function(){
  $(".ms-img-right").eq(0).addClass("ms-one");
  $(".ms-img-right").eq(1).addClass("ms-two");
  $(".ms-img-right").eq(0).find(".ms-box").eq(0).addClass("ms-box-one");
  $(".ms-img-right").eq(0).find(".ms-box").eq(1).addClass("ms-box-hidden");
  $(".ms-img-right").eq(0).find(".ms-box").eq(2).addClass("ms-box-two");
  $(".ms-img-right").eq(1).find(".ms-box").eq(0).addClass("ms-box-three");
  $(".ms-img-right").eq(1).find(".ms-box").eq(1).addClass("ms-box-hidden-two");
  $(".ms-img-right").eq(1).find(".ms-box").eq(2).addClass("ms-box-four");
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

              $(".ms-img-right").eq(0).find(".ms-box").eq(0).animate({opacity:1},800)
              $(".ms-img-right").eq(0).find(".ms-box").eq(0).animate({top:-82},800);
              $(".ms-img-right").eq(0).find(".ms-box").eq(2).animate({opacity:1},800);
              $(".ms-img-right").eq(0).find(".ms-box").eq(2).animate({top:382},800)
              $(".ms-img-right").eq(0).find(".ms-box").eq(1).animate({opacity:1},1200,function(){
                $(".ms-img-right").eq(1).find(".ms-box").eq(0).animate({opacity:1},800)
                $(".ms-img-right").eq(1).find(".ms-box").eq(2).animate({opacity:1},800)
                $(".ms-img-right").eq(1).find(".ms-box").eq(0).animate({top:-40},800)
                $(".ms-img-right").eq(1).find(".ms-box").eq(2).animate({top:580},800)
                $(".ms-img-right").eq(1).find(".ms-box").eq(1).animate({opacity:1},1200)
              })
        }
    })


})
