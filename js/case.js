$(function(){
    $(".tab").on("mouseenter",function(){
        $(this).addClass("tab-cur").siblings().removeClass("tab-cur")
        var index=$(this).index();
        $(".case-list").eq(index).show().siblings().hide();
    });



});