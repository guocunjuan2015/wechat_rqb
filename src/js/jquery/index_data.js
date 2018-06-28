/**
 * fullPage 2.5.4
 * Copyright (C) 2017
 */
 $(function(){
  
	 var isClosed =  false;
   //锁定菜单选项
   $(window).scroll(function(){

      $(window).scrollTop()>200 ? $("#menuHeader").addClass("fixedNav").animate({top:"0"},250)
        :
        $("#menuHeader").stop(!0,!0).removeClass("fixedNav").animate({top:"0"},20)
    });

    //个人中心创建计划模板点击效果
    $(".paln_wrapper li").click(function(event) {
      var index= $(".paln_wrapper li").index(this);
      //$(this).find(".menu-title").show();
      $(".paln_wrapper li").eq(index).addClass('selected').siblings(".paln_wrapper li").removeClass('selected');
      /* Act on the event */
   });

   //个人中心创建计划模板鼠标经过效果
   $(".paln_wrapper li").hover(function(event) {
     var index= $(".paln_wrapper li").index(this);

     //$(this).find(".menu-title").show();
     $(".paln_wrapper li").eq(index).addClass('selected').siblings(".paln_wrapper li").removeClass('selected');
     /* Act on the event */
  });


    //点击导航显示隐藏左侧边栏
    $("#menu-toggle").click(function(event) {

          if(isClosed == false){
              $("#sidebar").addClass('is-open');
              isClosed = true;
          } else {
            $("#sidebar").removeClass('is-open');
            isClosed = false;

          }
      /* Act on the event */
 });

/*左侧导航栏鼠标经过展示区域*/
 $("#side-menu li").hover(function(event) {
   var index=$("#side-menu li").index(this);
   if($(".navbar-static-side").hasClass('is-open')){
     $("#side-menu li").find(".menu-title").hide();
     $(this).find(".menu-title").show();
   } else {
       //$(this).find(".menu-title").show();
       $("#side-menu li").eq(index).addClass('nav-hover').siblings("#side-menu li").removeClass('nav-hover');
   }

    /* Act on the event */
  });

  //首页点击下三角锚链接

  $("#turnToContent").click(function() {

    $("html body").animate({scrollTop:'580px'},500);


  });


});
