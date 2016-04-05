$(window).on("load",function(){
  var m_wlh_big=1;
  var m_wlh_now=0;
  $(".m_wlh_teacher_card").each(function(index,obj){
        if(m_wlh_big>5){
          return;
        }
        $(".m_wlh_teacher_cardbox").eq(m_wlh_now).append($(this));
        if(index>=m_wlh_big){          
           m_wlh_now++;
           m_wlh_big+=2;           
        }
  })


setTimeout(function(){  
  var wlh_imgh=$(".m_wlh_teacher_conimg").find("img").height();
  var wlh_ulh=$(".m_wlh_teacher_card").height();
  $(".m_wlh_teachercon").css("height",wlh_ulh+100);
  $(".m_wlh_teacher_cardbox").css("height",wlh_ulh+100);
},500)
  var m_wlh_img=$(".m_wlh_teacher_cardbox");
  var m_wlh_now2=0;
  var m_wlh_next=0;
  var wlh_flage=true;
  $(".m_wlh_teachercon .m_wlh_teacher_cardbox:not(:first)").css("left","100%");
    function move(){
      if(!wlh_flage){
        return;
      }
      wlh_flage=false;
      m_wlh_next++;
      if(m_wlh_next>=m_wlh_img.length){
          m_wlh_next=0;
      }
        
      m_wlh_img.eq(m_wlh_next).css("left","100%");
      m_wlh_img.eq(m_wlh_now2).animate({left:'-100%'},500,function(){
        wlh_flage=true;
      });
      $(".m_wlh_teacher_btnbox li").css("background","#0f0e0f").eq(m_wlh_next).css("background","#fb7d29")
      m_wlh_img.eq(m_wlh_next).animate({left:0},500);
      m_wlh_now2=m_wlh_next;
    }
  var wlht=setInterval(move,3000);

  $(".m_wlh_teachercon").hover(function(){
    clearInterval(wlht);
  },function(){
        wlht=setInterval(move,3000);
        
  })

  $(".m_wlh_teacher_btnbox li").hover(function(){
    var index=$(this).index();
    $(".m_wlh_teacher_btnbox li").css("background","#0f0e0f").eq(index).css("background","#fb7d29")
    m_wlh_img.css({left:"100%"});
    m_wlh_img.eq(index).stop(true,true)
    m_wlh_img.eq(index).fadeOut(50).css({left:0}).fadeIn(300);
        m_wlh_now2=index;
        m_wlh_next=index;
  },function(){

  })

  $(".m_wlh_teacher_card").hover(function(){
     var index=$(this).index(".m_wlh_teacher_card");
     $(".m_wlh_teacher_bluebox").eq(index).addClass("m_wlh_teacher_bluebox_hover");
     $(".m_wlh_teacher_conword").eq(index).addClass("m_wlh_teacher_conword_hover");
     $(".m_wlh_teacher_conimg").eq(index).css({"border":"1px solid #0f0e0f"}); 
     $(".m_wlh_teacher_star").eq(index).hide(); 
     $(".m_wlh_teacher_num").eq(index).hide(); 
     $(".m_wlh_teacher_china").eq(index).show();
     $(".m_wlh_teacher_jiantou").eq(index).show();
     $(".m_wlh_teacher_bluebox_bg").eq(index).show();
     $(".m_wlh_teacher_ui").eq(index).css("marginTop","28px")

  },function(){ 
     $(".m_wlh_teacher_bluebox").removeClass("m_wlh_teacher_bluebox_hover");
     $(".m_wlh_teacher_conword").removeClass("m_wlh_teacher_conword_hover");    
     $(".m_wlh_teacher_conimg").css({"border":"1px solid #4f4f4f"});
     $(".m_wlh_teacher_star").show();
     $(".m_wlh_teacher_num").show();
     $(".m_wlh_teacher_china").hide(); 
     $(".m_wlh_teacher_jiantou").hide(); 
     $(".m_wlh_teacher_bluebox_bg").hide(); 
     $(".m_wlh_teacher_ui").css("marginTop","37px")
  })

  
  var wlhall=m_wlh_img.get();
  touch.on(m_wlh_img, 'touchstart', function(ev){
    clearInterval(wlht);
    
  });
  touch.on(m_wlh_img, 'touchend', function(ev){
    wlht=setInterval(move,3000);
    //ev.preventDefault();
  });
  touch.on(m_wlh_img, 'dragstart', function(ev){
    if(ev.direction=="right"){
      ev.preventDefault();
    }
    if(ev.direction=="right" && ev.x>=5){       
      if(!wlh_flage){
        return;
      }
      wlh_flage=false;
      m_wlh_next--;
      if(m_wlh_next<=-1){
         m_wlh_next=m_wlh_img.length-1;
      }
      m_wlh_img.eq(m_wlh_next).css("left","-100%");
      m_wlh_img.eq(m_wlh_now2).animate({left:'100%'},500,function(){
        wlh_flage=true;
      });
      $(".m_wlh_teacher_btnbox li").css("background","#0f0e0f").eq(m_wlh_next).css("background","#fb7d29")
      m_wlh_img.eq(m_wlh_next).animate({left:0},500);
      m_wlh_now2=m_wlh_next;
        }
  });
  touch.on(m_wlh_img, 'dragstart', function(ev){
    
    if(ev.direction=="left"){
      ev.preventDefault();
    }
    if(ev.direction=="left" && ev.x<=-5){
    
        move();
      }
  });


})