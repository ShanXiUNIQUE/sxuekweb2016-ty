$(function(){

	var wlh_big=3;
	var wlh_now=0;
	$(".wlh_teacher_card").each(function(index,obj){
        if(wlh_big>15){
        	return;
        }
        $(".wlh_teacher_cardbox").eq(wlh_now).append($(this));
        if(index>=wlh_big){          
           wlh_now++;
           wlh_big+=4;           
        }
	})


  var wlh_imgs=$(".wlh_teacher_cardbox");
  var wlh_now2=0;
  var wlh_next=0;
  $(".wlh_teachercon .wlh_teacher_cardbox:not(:first)").css("left","1080px");
    function move(){
      wlh_next++;
      if(wlh_next>=wlh_imgs.length){
          wlh_next=0;
      }
        
      wlh_imgs.eq(wlh_next).css("left","1080px");
      wlh_imgs.eq(wlh_now2).animate({left:'-1080px'},500);
      wlh_imgs.eq(wlh_next).animate({left:0},500);
      wlh_now2=wlh_next;
    }
  var t=setInterval(move,2000);

  $(".wlh_teachercon").hover(function(){
    clearInterval(t);
  },function(){
        t=setInterval(move,2000);
        
  })

  $(".wlh_teacher_btnbox li").hover(function(){
    index=$(this).index();
    $(".wlh_teacher_btnbox li").css("background","#0f0e0f").eq(index).css("background","#fb7d29")
    wlh_imgs.css({left:"1080px"});
    wlh_imgs.eq(index).css({left:0});
        wlh_now2=index;
        wlh_next=index;
  })

	$(".wlh_teacher_card").hover(function(){
     var index=$(this).index(".wlh_teacher_card");
     $(".wlh_teacher_bluebox").eq(index).addClass("wlh_teacher_bluebox_hover");
     $(".wlh_teacher_conword").eq(index).addClass("wlh_teacher_conword_hover");
     $(".wlh_teacher_conimg").eq(index).css({"border":"1px solid #0f0e0f"}); 
     $(".wlh_teacher_star").eq(index).hide(); 
     $(".wlh_teacher_num").eq(index).hide(); 
     $(".wlh_teacher_china").eq(index).show();
     $(".wlh_teacher_jiantou").eq(index).show();
     $(".wlh_teacher_bluebox_bg").eq(index).show();

  },function(){ 
     $(".wlh_teacher_bluebox").removeClass("wlh_teacher_bluebox_hover");
     $(".wlh_teacher_conword").removeClass("wlh_teacher_conword_hover");    
     $(".wlh_teacher_conimg").css({"border":"1px solid #4f4f4f"});
     $(".wlh_teacher_star").show();
     $(".wlh_teacher_num").show();
     $(".wlh_teacher_china").hide(); 
     $(".wlh_teacher_jiantou").hide(); 
     $(".wlh_teacher_bluebox_bg").hide(); 
  })
})