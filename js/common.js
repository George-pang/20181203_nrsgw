$(function () {

    var index=$(".active").index();//获取当前nav tab的索引
    var fwIndex=$(".fw_item_cur").index();//获取服务子菜单当前tab的索引
    console.dir($(".fw_item"));
    console.log(fwIndex);
    /* 顶部导航当前tab背景色切换*/
    $(".nav-item").on("mouseenter", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    //移出右侧导航栏后返回当前网页的导航tab
    $(".r-nav").on("mouseleave", function () {
        $(".nav-item").eq(index).addClass("active").siblings().removeClass("active");
    });

    // 顶部导航服务子菜单的显示隐藏
    $(".nav-item-fw").on("mouseenter", function () {
        $(".fw_menu").show();
        //服务菜单当前项背景色切换
        $(".fw_item").on("mouseenter", function () {
            $(this).addClass("fw_item_cur").siblings().removeClass("fw_item_cur");
        });
    });
    $(".nav-item-fw").on("mouseleave", function () {
        $(".fw_menu").hide();
        // 鼠标移出服务子菜单默认显示当前tab
        $(".fw_item").removeClass("fw_item_cur").eq(fwIndex).addClass("fw_item_cur");
    });





});
