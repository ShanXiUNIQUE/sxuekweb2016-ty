var lcq_block=$('.lcq_course').offset().top;
$('.lcq_special').css({position:"relative"});
$('.lcq_co_bottom').css({position:"relative"});
for(var i=0;i<4;i++){
	$('.lcq_special:eq('+i+')').css({left:"-300px"});
}
for(var i=4;i<8;i++){
	$('.lcq_special:eq('+i+')').css({right:"-300px"});
}
$('.lcq_co_class').css({position:"relative"});
$(".lcq_co_class:eq(0)").css({top:100})
$(".lcq_co_class:eq(1)").css({top:200})
$(".lcq_co_class:eq(2)").css({top:300})

var lcq_cont=500;
var lcq_int=20;
var lcq_flag=false;
var l_t;
$(window).scroll(function(){
	if($(window).scrollTop()>=lcq_block+20){
		$(".lcq_co_class:eq(0)").animate({ 
		    top:0
		}, 1000);
		setTimeout(function(){
			$(".lcq_co_class:eq(1)").animate({ 
			    top:0
			}, 1000);
		},50);
		setTimeout(function(){
			$(".lcq_co_class:eq(2)").animate({ 
			    top:0
			}, 1000);
		},100);
		
	}
	////////////////
	if($(window).scrollTop()>=lcq_block-68-300){
		for(var i=0;i<4;i++){
			$(".lcq_special:eq("+i+")").animate({ 
		    	left:0
			}, lcq_int+lcq_cont*(3-i) );
		}
		for(var i=4;i<8;i++){
			$(".lcq_special:eq("+i+")").animate({ 
		    	right:0
			}, lcq_int+lcq_cont*(i-4) );
		}
		/////////////////
		var size=1;
		var size1=3;
		var l_i=1;
		var l_i1=1;
		var zzz;
		setTimeout(function(){
		if(!lcq_flag){
			lcq_flag=true;
	    l_t=setInterval(function(){
			if(size+(l_i++)>=18){clearInterval(l_t);return;}
			zzz=size+(l_i++);
			$(".lcq_detail").css({'font-size':zzz+'px'})
			var zzz1=size1+(l_i1+=2);
			$(".lcq_info").css({'font-size':zzz1+'px'})
		},100);
		}
	},500);		

	};
})
