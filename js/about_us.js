$(function () {

    // tab切换
    $(".tab").on("click", function () {
        $(this).removeClass("tab-current").siblings().addClass("tab-current");
        var index = $(this).index();
        $(".tab-item").eq(index).show().siblings().hide();
        if(index==1){
            showMap();//初始化百度地图
        }
    });

    //初始化 swipper
    var aboutSwiper = new Swiper('.about-us-swiper', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.about-swiper-pagination',
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
    $(".about-us-swiper").on("mouseenter", function (event) {
        aboutSwiper.autoplay.stop();
        $(".about-us-swiper .swiper-button-next").fadeIn(1000);
        $(".about-us-swiper .swiper-button-prev").fadeIn(1000);
        return false;
    });
    $(".about-us-swiper").on("mouseleave", function (event) {
        aboutSwiper.autoplay.start();
        $(".about-us-swiper .swiper-button-next").fadeOut(1000);
        $(".about-us-swiper .swiper-button-prev").fadeOut(1000);
        return false;
    });


    function showMap() {
        var map = new BMap.Map("container"); //创建地图实例
        var point = new BMap.Point(117.205062, 31.841835); //创建中心点坐标
        map.centerAndZoom(point, 15); //地图初始化，并显示地图展示级别(缩放级别)
        //map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);    //前两句代码的缩写
        // map.setCurrentCity("合肥"); // 设置地图显示的城市
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        var marker = new BMap.Marker(point); // 创建标注    
        map.addOverlay(marker); // 将标注添加到地图中 ，默认标注样式
    }
    


});