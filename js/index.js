$(function(){

    //初始化服务范围 swipper
    var serviceSwiper = new Swiper ('.service_swiper', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.service_swiper_pagination',
          clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, //设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });   

          //鼠标移入轮播图暂停自动播放、显示滑块控制
    $(".service_swiper").on("mouseenter", function (event) {
      serviceSwiper.autoplay.stop();
      $(".service_swiper .swiper-button-next").fadeIn(1000);
      $(".service_swiper .swiper-button-prev").fadeIn(1000);
      return false;
  });
  $(".service_swiper").on("mouseleave", function (event) {
      serviceSwiper.autoplay.start();
      $(".service_swiper .swiper-button-next").fadeOut(1000);
      $(".service_swiper .swiper-button-prev").fadeOut(1000);
      return false;
  });



});