
$(function () {

	var lxr_x = $(".lxr_ph_box").width();
	var lxr_y = lxr_x*670/640;
	$(".lxr_ph_box").css({height:lxr_y});
	
	var lxr_x1 = $(".lxr_ph_title_box").width();
	var lxr_y1 = lxr_x1*99/585;
	$(".lxr_ph_title_box").css({height:lxr_y1});

	var lxr_x2 = $(".lxr_ph_bg_box").width();
	var lxr_y2 = lxr_x2*400/710;
	$(".lxr_ph_bg_box").css({height:lxr_y2});

	var lxr_x3 = $(".lxr_ph_logo_box").width();
	var lxr_y3 = lxr_x3*58/288;
	$(".lxr_ph_logo_box").css({height:lxr_y3});

	var lxr_x4 = $(".lxr_ph_photo_box").width();
	var lxr_y4 = lxr_x4*444/285;
	$(".lxr_ph_photo_box").css({height:lxr_y4});

	var lxr_x5 = $(".lxr_ph_computer_box").width();
	var lxr_y5 = lxr_x5*117/343;
	$(".lxr_ph_computer_box").css({height:lxr_y5});

	var lxr_x6 = $(".lxr_ph_more_box").width();
	var lxr_y6 = lxr_x6*24/71;
	$(".lxr_ph_more_box").css({height:lxr_y6});

	var lxr_font_size1 = lxr_y2*16/410;
	$(".lxr_ph_word1 span").css({fontSize:lxr_font_size1});
	var lxr_font_size2 = lxr_y2*14/410;
	$(".lxr_ph_word2 span").css({fontSize:lxr_font_size2});

})