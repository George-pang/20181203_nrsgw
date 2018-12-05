$(function () {
    //初始化 swipper
    var caseSwiper = new Swiper('#caseSwiper', {
        loop: true, // 循环模式选项
        // effect : 'flip',
        spaceBetween: 20,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false, //设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        },
        on: {
            slideChange: function () {
                var index = this.realIndex; //当前活动块的索引
                $(".tab-hd .tab").eq(index).addClass("tab-cur").siblings().removeClass(
                    "tab-cur");
            },
        }
    });
    $(".tab-hd .tab").on("click", function () {
        var tabIndex = $(this).index();
        console.log(tabIndex);
        // Swiper方法-Swiper切换到指定slide
        caseSwiper.slideTo(tabIndex + 1, 500, false);
    });

});