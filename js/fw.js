$(function () {
    // 服务—-教培机构页 左侧tab控制swipper切换
    $(".tab").on("click",function(){
        var tabIndex=$(this).index();
        console.log(tabIndex);
        // Swiper方法-Swiper切换到指定slide
        functionSwiper.slideTo(tabIndex+1, 500, false);
    });



    //初始化 swipper
    var industrySwiper = new Swiper('.industrySwipper', {
        direction: 'horizontal', 
        loop: true, 
        slidesPerView: 3,
        spaceBetween: 60,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, 
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var functionSwiper = new Swiper ('.function-swiper', {
        direction: 'horizontal', 
        loop: true, 
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, 
        },
        // 如果需要分页器
        pagination: {
          el: '.function-swiper-pagination',
          clickable :true,
        },
        // Swiper callbacks
        on:{
            //当当前Slide切换时执行(activeIndex发生改变),实现左侧tab的对应切换
            slideChange: function(){
              var index=this.realIndex;//当前活动块的索引
              $(".tab").eq(index).addClass("tab-cur").siblings().removeClass("tab-cur");
            },
          },
      });

    //鼠标移入轮播图暂停自动播放
    $(".industrySwipper").on("mouseenter", function (event) {
        industrySwiper.autoplay.stop();
        return false;
    });
    $(".industrySwipper").on("mouseleave", function (event) {
        industrySwiper.autoplay.start();
        return false;
    });
    $(".function-swiper").on("mouseenter", function (event) {
        functionSwiper.autoplay.stop();
        return false;
    });
    $(".function-swiper").on("mouseleave", function (event) {
        functionSwiper.autoplay.start();
        return false;
    });

});