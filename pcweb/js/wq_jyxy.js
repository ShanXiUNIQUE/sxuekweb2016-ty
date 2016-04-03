$(document).ready(function(){
  var wq_width=$(".wq_jyxy_item").width()
  var wq_lbbox=$(".wq_jyxy_banner").width(function(){
  	return $(".wq_jyxy_item").length*wq_width;
  })
  function wq_lb(){
    wq_lbbox.animate({left:-wq_width},300,function(){
    	$(".wq_jyxy_item:first").appendTo(wq_lbbox).parent().css("left",0)

    })
  }	
  var wq_t=setInterval(wq_lb,3000)
  $(".wq_jyxy_lb").hover(function(){
  	 clearInterval(wq_t)
  },function(){
     wq_t=setInterval(wq_lb,3000)
  })
  $(".wq_jyxy_item").hover(function(){
  	 $(".wq_jyxy_item").find("img").finish()
  	 $(".wq_jyxy_int").finish()
  	 $(this).find("img").css("opacity","1").animate({top:0}).end().find(".wq_jyxy_int").css("display","block").animate({bottom:8})
  },function(){
     $(this).find("img").css("opacity","0.5").animate({top:55}).end().find(".wq_jyxy_int").animate({bottom:65},function(){
     	 $(this).css('display',"none")
     })
  })
  $(".wq_leftarrow,.wq_rightarrow").mousedown(function(e){
      e.preventDefault()
  })
  var to1,to2;
  $(".wq_rightarrow").click(function(){
      clearTimeout(to1)
      to1=setTimeout(wq_lb,500)
  })
  $(".wq_leftarrow").click(function(){
  	 clearTimeout(to2)
  	 to2=setTimeout(function(){
        $(".wq_jyxy_item:last").prependTo(wq_lbbox).parent().css("left",-wq_width).animate({left:0})
  	 },500)
  })
  var numarr=$(".wq_jyxy_bottom_earn").map(function(){
    return parseInt($(this).text())
  })
  var numobj={num0:0,num1:0,num2:0}
  $(window).scroll(function(){
     var top=$(".wq_jyxy_bottom_datas").offset().top;
     var sctop=$(this).scrollTop()+$(this).height();
     if(sctop>top){
       $(numobj).animate({num0:numarr[0],num1:numarr[1],num2:numarr[2]},{
        duration:2000,
        step:function(){
          $(".wq_jyxy_bottom_earn").each(function(index,obj){
           $(this).html(parseInt(numobj["num"+index])+" <span>+</span>")
          })
        }
       })
     }
  })













})