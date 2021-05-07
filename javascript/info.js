$(function(){
    $('.code').html(GetQueryValue('code'))
    if(!GetQueryValue('code')){
        $('.notice').html('<h3 style="color:#333;">该产品未在食安溯源平台进行认证，请与经销商联系</h3>');
        $('.have-box').html('');
        return;
    }
    if(GetQueryValue('code').indexOf('SASY') < 0){
        $('.notice').html('<h3 style="color:#333;">该产品未在食安溯源平台进行认证，请与经销商联系</h3>');
        $('.have-box').html('');
    } else {
        var code = GetQueryValue('code').replace(/^([a-zA-Z]{0,4})/,'');
        console.log(code)
        if(parseInt(code) >= 202004103121 && parseInt(code) <= 202004103900){
            $('.shop-img img').attr('src','images/1.jpg');
            $('.shop-name').html('经销商：御森燕（福州店）');
            if(parseInt(code)+200 >(202004103121+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
        } else if(parseInt(code) >= 202004100781 && parseInt(code) <= 202004101560){
            $('.shop-img img').attr('src','images/2.jpg');
            $('.shop-img .swiper-wrapper').html('<div class="swiper-slide zoom-img"><img src="images/2.jpg" alt=""></div><div class="swiper-slide zoom-img"><img src="images/2_2.jpg" alt=""></div>')
            $('.shop-name').html('<p>店面一：福州见山茶餐厅</p><p>店面二：林飞应福鼎白茶/叶福新武夷岩茶专卖店</p>');
            if(parseInt(code)+200 >(202004100781+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
        }else if(parseInt(code) >= 202004101561 && parseInt(code) <= 202004102340){
            $('.shop-img img').attr('src','images/3.jpg');
            $('.shop-name').html('经销商：湖南燕安居东风灵专卖店（湘潭）');
            if(parseInt(code)+200 >(202004101561+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
        }else if(parseInt(code) >= 202004102341 && parseInt(code) <= 202004103120){
            $('.shop-img img').attr('src','images/4.jpg');
            $('.shop-name').html('经销商：湖南燕安居东风灵专卖店（怀化）');
            if(parseInt(code)+200 >(202004102341+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
        }else if(parseInt(code) >= 202004103901 && parseInt(code) <= 202004104680){
            $('.shop-img img').attr('src','images/5.jpg');
            $('.shop-name').html('经销商：御森燕（莆田店）');
            if(parseInt(code)+200 >(202004103901+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
        }else if(parseInt(code) >= 202004100001 && parseInt(code) <= 202004100780){
            $('.shop-img img').attr('src','images/6.jpg');
            $('.shop-name').html('经销商：福建龙岩市国际美食城燕安居店');
            if(parseInt(code)+200 >(202004100001+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
        }else if(parseInt(code) >=  202004106553  && parseInt(code) <= 202004107332){
            $('.shop-img img').attr('src','images/6.jpg');
            $('.shop-name').html('经销商：福建龙岩市国际美食城燕安居店');
            if(parseInt(code)+200 >(202004106553+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
        }else if(parseInt(code) >= 202004105461 && parseInt(code) <= 202004106240){
            $('.shop-img img').attr('src','images/7.jpg');
            $('.shop-name').html('经销商：重庆藏珍堂保健品有限公司');
            if(parseInt(code)+200 >(202004105461+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
        }else if(parseInt(code) >= 202004107333 && parseInt(code) <= 202004108112){
            $('.shop-img img').attr('src','images/7.jpg');
            $('.shop-name').html('经销商：重庆藏珍堂保健品有限公司');
            if(parseInt(code)+200 >(202004107333+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
        }else if(parseInt(code) >= 202004108737 && parseInt(code) <= 202004110156){
            $('.shop-img img').attr('src','images/7.jpg');
            $('.shop-name').html('经销商：重庆藏珍堂保健品有限公司');
            if(parseInt(code)+200 >(202004108737+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
            if(parseInt(code) >= 202004109673 && parseInt(code) <= 202004109984){
                $('.cj').html('采集地：玉树');
                $('.sc').html('生产地：玉树');
                $('.left-info .list-img .swiper-wrapper').append('<div class="list swiper-slide zoom-img"><img src="images/aa.jpg" alt=""></div>')
                $('.people-img').attr('src','images/aa.jpg');
                $('.people-name').hide()
            }
        }else if(parseInt(code) >= 202004110313 && parseInt(code) <= 202004111092){
            $('.shop-img img').attr('src','images/7.jpg');
            $('.shop-name').html('经销商：重庆藏珍堂保健品有限公司');
            if(parseInt(code)+200 >(202004110313+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
            $('.cj').html('采集地：玉树');
            $('.sc').html('生产地：玉树');
            $('.left-info .list-img .swiper-wrapper').append('<div class="list swiper-slide zoom-img"><img src="images/aa.jpg" alt=""></div>')
            $('.people-img').attr('src','images/aa.jpg');
            $('.people-name').hide()
        }else if(parseInt(code) >= 202004111873 && parseInt(code) <= 202004113432){
            $('.shop-img img').attr('src','images/7.jpg');
            $('.shop-name').html('经销商：重庆藏珍堂保健品有限公司');
            if(parseInt(code)+200 >(202004111873+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
            $('.cj').html('采集地：玉树');
            $('.sc').html('生产地：玉树');
            $('.left-info .list-img .swiper-wrapper').append('<div class="list swiper-slide zoom-img"><img src="images/aa.jpg" alt=""></div>')
            $('.people-img').attr('src','images/aa.jpg');
            $('.people-name').hide()
        }else if(parseInt(code) >= 202004113433 && parseInt(code) <= 202004116708){
            $('.shop-img img').attr('src','images/7.jpg');
            $('.shop-name').html('经销商：重庆藏珍堂保健品有限公司');
            if(parseInt(code)+200 >(202004113433+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
            $('.cj').html('采集地：玉树');
            $('.sc').html('生产地：玉树');
            $('.left-info .list-img .swiper-wrapper').append('<div class="list swiper-slide zoom-img"><img src="images/aa.jpg" alt=""></div>')
            $('.people-img').attr('src','images/aa.jpg');
            $('.people-name').hide()
        }else if(parseInt(code) >= 202004104681 && parseInt(code) <= 202004105460){
            $('.shop-img img').attr('src','images/8.jpg');
            $('.shop-name').html('经销商：宁波百草传奇总部');
            if(parseInt(code)+200 >(202004104681+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
        }else if(parseInt(code) >= 202004106241 && parseInt(code) <= 202004106396){
            $('.shop-img img').attr('src','images/9.jpg');
            $('.shop-name').html('经销商：獐子岛燕安居旗舰店');
            if(parseInt(code)+200 >(202004106241+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
        }else if(parseInt(code) >= 202004106397 && parseInt(code) <= 202004106552){
            $('.shop-img img').attr('src','images/10.jpg');
            $('.shop-name').html('经销商：山东青岛胶州绿城春晓燕安居');
            if(parseInt(code)+200 >(202004106397+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
        }else if(parseInt(code) >= 202004108113 && parseInt(code) <= 202004108268){
            $('.shop-img img').attr('src','images/11.jpg');
            $('.shop-name').html('经销商：山东烟台芝罘区燕安居');
            if(parseInt(code)+200 >(202004108113+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
        }else if(parseInt(code) >= 202004108425 && parseInt(code) <= 202004108580){
            $('.shop-img img').attr('src','images/12.jpg');
            $('.shop-name').html('经销商：新疆鸿德堂');
            if(parseInt(code)+200 >(202004108425+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
        }else if(parseInt(code) >= 202004111093 && parseInt(code) <= 202004111872){
            $('.shop-img img').attr('src','images/12.jpg');
            $('.shop-name').html('经销商：新疆鸿德堂');
            if(parseInt(code)+200 >(202004111093+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
        }else if(parseInt(code) >= 202004110157 && parseInt(code) <= 202004110312){
            $('.shop-img img').attr('src','images/12.jpg');
            $('.shop-name').html('经销商：新疆鸿德堂');
            if(parseInt(code)+200 >(202004108425+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
        }else if(parseInt(code) >= 202004108581 && parseInt(code) <= 202004108736){
            $('.shop-img img').attr('src','images/13.jpg');
            $('.shop-name').html('经销商：晓芹极稀源参茸');
            if(parseInt(code)+200 >(202004108581+200)){
                $('.people-img').attr('src','images/people_1.png')
                $('.people-name').html('次旦多吉');
            }
        }else {
            $('.notice').html('<h3 style="color:#333;">该产品未在食安溯源平台进行认证，请与经销商联系</h3>');
            $('.have-box').html('');
        }
            
    }
    new Swiper ('.shop-img-swiper-container', {
        autoplay:true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })



})

    
function GetQueryValue(queryName) {
    var query = decodeURI(window.location.search.substring(1));
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == queryName) { return pair[1]; }
    }
    return null;
}
