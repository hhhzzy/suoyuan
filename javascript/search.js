
window.onload = function(){
    var mySwiper = new Swiper ('.swiper-container', {
        autoplay: true,
        loop: true, // 循环模式选项
    })
    new Swiper ('.info-swiper-container', {
		autoplay: true,
		loop: true, // 循环模式选项
  	})
    new Swiper ('.list-swiper-container', {
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })
    // 切换
    $('.nav-box ul li').click(function(){
        $(this).addClass('current').siblings().removeClass('current');
        $('.nav-list:eq('+$(this).index()+')').show().siblings('.nav-list').hide();
    })
    // 图片放大
    $('.zoom-img').on('click',function(){
        $('.shalter-box').show();
        if($(this).children().attr('data-info') == 'video'){
            var frag = $('<video src='+$(this).children().attr('src')+' controls="controls" autoplay="true"></video>');
            $('.shalter-box .content').html(frag);
        }else {
            var frag = $('<img src='+$(this).children().attr('src')+' />');
            $(frag).attr('src',$(this).children('img').attr('src'));
            $('.shalter-box .content').html(frag);
        }
    })
    $('.shalter-box').click(function(){
        $(this).hide();
        $(this).children().html('')
    })
    $('.shalter-box .content').click(function(e){
        e.stopPropagation();
    })
    // 进入详情页面
    $('#gotoinfo').click(function(){
        var url ="https://sys.shiansuyuan.com/";
        if(!$('#sy-code').val()) return;
        var xhr = new XMLHttpRequest();
        xhr.open("get", url+'api/queryMessageByProductCode?productCode='+$('#sy-code').val(), true);
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload =  () => {
            if (xhr.status == 200) {
                var res = JSON.parse(xhr.response);
                console.log(res);
                if(res.code ==1){
                    if(res.data.msg == "没有此溯源码信息"){
                        location.href="info.html?code="+$('#sy-code').val()
                    }else{
                        location.href="info2.html?code="+$('#sy-code').val()
                    }
                }
            }
        }
        xhr.send();
        // location.href="info.html?code="+$('#sy-code').val()
    }) 
    
}

var windheight = $(window).height();  /*未唤起键盘时当前窗口高度*/
        
$(window).resize(function(){
   var docheight = $(window).height();  /*唤起键盘时当前窗口高度*/        
   if(docheight < windheight){            /*当唤起键盘高度小于未唤起键盘高度时执行*/
      $(".btn-box").css({"position":"static","marginTop":"2rem"});
   }else{
      $(".btn-box").css("position","fixed");
   }           
});
