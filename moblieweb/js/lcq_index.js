var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2000,
        paginationClickable :true,
        autoplayDisableOnInteraction : false,
        observer:true,
        bulletClass : 'lcq_xdd',
        bulletActiveClass : 'lcq-btn-active',
});
var lcq_kuan=$('.lcq_co_special').width();
var lcq_kuan1=$('.lcq_bg').width();
$('.lcq_co_special').height(lcq_kuan);
$('.lcq_x_word').css({'font-size':lcq_kuan/8+'px'});
$('.lcq_d_word').css({'font-size':lcq_kuan/4+'px'});
$('.lcq_bg').height(lcq_kuan1/4);
$('.lcq_ch_w').css({top:-lcq_kuan1/4+'px'});
$('.lcq_one').css({"margin-top":-lcq_kuan1/4+'px'});


