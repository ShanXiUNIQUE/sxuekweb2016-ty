$(function(){
	var wq_width=$(".wq_jyxy_item").width();
	var wq_length=$(".wq_jyxy_item").length;
	$(".wq_jyxy_item").height(function(){
		return parseInt(wq_width*3)
	}).css("top",parseInt(wq_width*0.30))
	
	$(".wq_jyxy_banner").css("top",-parseInt(wq_width*0.30)).height(parseInt(wq_width*3.2))
    
	$(".wq_jyxy_int").height($(".wq_jyxy_int").width()*0.8)
	
	
	touch.on(".wq_jyxy_item>img","touchstart",function(){
		$(this).animate({top:-parseInt(wq_width*0.30),opacity:1})
        $(this).next().css("display","block").animate({bottom:200})
	})
	touch.on(".wq_jyxy_item>img","touchend",function(e){
		e.preventDefault()
		$(this).finish()
		$(this).animate({top:0,opacity:0.5})
        $(this).next().css("display","none").animate({bottom:350})
	})
   var numarr=$(".wq_bottom_item").map(function(){
    return parseInt($(this).text())
  })
  var numobj={num0:0,num1:0,num2:0}
  $(window).scroll(function(){
     var top=$(".wq_jyxy_numbox").offset().top;
     var sctop=$(this).scrollTop()+$(this).height();
     if(sctop>top){
       $(numobj).animate({num0:numarr[0],num1:numarr[1],num2:numarr[2]},{
        duration:2000,
        step:function(){
          $(".wq_bottom_item").each(function(index,obj){
           $(this).html(parseInt(numobj["num"+index])+" <span>+</span>")
          })
        }
       })
     }
})
})