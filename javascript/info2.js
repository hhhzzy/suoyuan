$(function(){
    $('.code').html(GetQueryValue('code'))
    if(!GetQueryValue('code')){
        $('.notice').html('<h3 style="color:#333;"></h3>');
        $('.have-box').html('');
        return;
    }
    // if(GetQueryValue('code').indexOf('SASY') < 0){
    //     $('.notice').html('<h3 style="color:#333;">该产品未在食安溯源平台进行认证，请与经销商联系</h3>');
    //     $('.have-box').html('');
    // } else {
    //     var code = GetQueryValue('code').replace(/^([a-zA-Z]{0,4})/,'');
    //     console.log(code)
    //     if(parseInt(code) >= 202004103121 && parseInt(code) <= 202004103900){
    //         $('.shop-img img').attr('src','images/1.jpg');
    //         $('.shop-name').html('经销商：御森燕（福州店）');
    //         if(parseInt(code)+200 >(202004103121+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //     } else if(parseInt(code) >= 202004100781 && parseInt(code) <= 202004101560){
    //         $('.shop-img img').attr('src','images/2.jpg');
    //         $('.shop-img .swiper-wrapper').html('<div class="swiper-slide zoom-img"><img src="images/2.jpg" alt=""></div><div class="swiper-slide zoom-img"><img src="images/2_2.jpg" alt=""></div>')
    //         $('.shop-name').html('<p>店面一：福州见山茶餐厅</p><p>店面二：林飞应福鼎白茶/叶福新武夷岩茶专卖店</p>');
    //         if(parseInt(code)+200 >(202004100781+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //     }else if(parseInt(code) >= 202004101561 && parseInt(code) <= 202004102340){
    //         $('.shop-img img').attr('src','images/3.jpg');
    //         $('.shop-name').html('经销商：湖南燕安居东风灵专卖店（湘潭）');
    //         if(parseInt(code)+200 >(202004101561+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //     }else if(parseInt(code) >= 202004102341 && parseInt(code) <= 202004103120){
    //         $('.shop-img img').attr('src','images/4.jpg');
    //         $('.shop-name').html('经销商：湖南燕安居东风灵专卖店（怀化）');
    //         if(parseInt(code)+200 >(202004102341+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //     }else if(parseInt(code) >= 202004103901 && parseInt(code) <= 202004104680){
    //         $('.shop-img img').attr('src','images/5.jpg');
    //         $('.shop-name').html('经销商：御森燕（莆田店）');
    //         if(parseInt(code)+200 >(202004103901+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //     }else if(parseInt(code) >= 202004100001 && parseInt(code) <= 202004100780){
    //         $('.shop-img img').attr('src','images/6.jpg');
    //         $('.shop-name').html('经销商：福建龙岩市国际美食城燕安居店');
    //         if(parseInt(code)+200 >(202004100001+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //     }else if(parseInt(code) >=  202004106553  && parseInt(code) <= 202004107332){
    //         $('.shop-img img').attr('src','images/6.jpg');
    //         $('.shop-name').html('经销商：福建龙岩市国际美食城燕安居店');
    //         if(parseInt(code)+200 >(202004106553+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //     }else if(parseInt(code) >= 202004105461 && parseInt(code) <= 202004106240){
    //         $('.shop-img img').attr('src','images/7.jpg');
    //         $('.shop-name').html('经销商：重庆藏珍堂保健品有限公司');
    //         if(parseInt(code)+200 >(202004105461+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //     }else if(parseInt(code) >= 202004107333 && parseInt(code) <= 202004108112){
    //         $('.shop-img img').attr('src','images/7.jpg');
    //         $('.shop-name').html('经销商：重庆藏珍堂保健品有限公司');
    //         if(parseInt(code)+200 >(202004107333+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //     }else if(parseInt(code) >= 202004108737 && parseInt(code) <= 202004110156){
    //         $('.shop-img img').attr('src','images/7.jpg');
    //         $('.shop-name').html('经销商：重庆藏珍堂保健品有限公司');
    //         if(parseInt(code)+200 >(202004108737+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //         if(parseInt(code) >= 202004109673 && parseInt(code) <= 202004109984){
    //             $('.cj').html('采集地：玉树');
    //             $('.sc').html('生产地：玉树');
    //             $('.left-info .list-img .swiper-wrapper').append('<div class="list swiper-slide zoom-img"><img src="images/aa.jpg" alt=""></div>')
    //             $('.people-img').attr('src','images/aa.jpg');
    //             $('.people-name').hide()
    //         }
    //     }else if(parseInt(code) >= 202004110313 && parseInt(code) <= 202004111092){
    //         $('.shop-img img').attr('src','images/7.jpg');
    //         $('.shop-name').html('经销商：重庆藏珍堂保健品有限公司');
    //         if(parseInt(code)+200 >(202004110313+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //         $('.cj').html('采集地：玉树');
    //         $('.sc').html('生产地：玉树');
    //         $('.left-info .list-img .swiper-wrapper').append('<div class="list swiper-slide zoom-img"><img src="images/aa.jpg" alt=""></div>')
    //         $('.people-img').attr('src','images/aa.jpg');
    //         $('.people-name').hide()
    //     }else if(parseInt(code) >= 202004111873 && parseInt(code) <= 202004113432){
    //         $('.shop-img img').attr('src','images/7.jpg');
    //         $('.shop-name').html('经销商：重庆藏珍堂保健品有限公司');
    //         if(parseInt(code)+200 >(202004111873+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //         $('.cj').html('采集地：玉树');
    //         $('.sc').html('生产地：玉树');
    //         $('.left-info .list-img .swiper-wrapper').append('<div class="list swiper-slide zoom-img"><img src="images/aa.jpg" alt=""></div>')
    //         $('.people-img').attr('src','images/aa.jpg');
    //         $('.people-name').hide()
    //     }else if(parseInt(code) >= 202004113433 && parseInt(code) <= 202004116708){
    //         $('.shop-img img').attr('src','images/7.jpg');
    //         $('.shop-name').html('经销商：重庆藏珍堂保健品有限公司');
    //         if(parseInt(code)+200 >(202004113433+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //         $('.cj').html('采集地：玉树');
    //         $('.sc').html('生产地：玉树');
    //         $('.left-info .list-img .swiper-wrapper').append('<div class="list swiper-slide zoom-img"><img src="images/aa.jpg" alt=""></div>')
    //         $('.people-img').attr('src','images/aa.jpg');
    //         $('.people-name').hide()
    //     }else if(parseInt(code) >= 202004104681 && parseInt(code) <= 202004105460){
    //         $('.shop-img img').attr('src','images/8.jpg');
    //         $('.shop-name').html('经销商：宁波百草传奇总部');
    //         if(parseInt(code)+200 >(202004104681+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //     }else if(parseInt(code) >= 202004106241 && parseInt(code) <= 202004106396){
    //         $('.shop-img img').attr('src','images/9.jpg');
    //         $('.shop-name').html('经销商：獐子岛燕安居旗舰店');
    //         if(parseInt(code)+200 >(202004106241+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //     }else if(parseInt(code) >= 202004106397 && parseInt(code) <= 202004106552){
    //         $('.shop-img img').attr('src','images/10.jpg');
    //         $('.shop-name').html('经销商：山东青岛胶州绿城春晓燕安居');
    //         if(parseInt(code)+200 >(202004106397+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //     }else if(parseInt(code) >= 202004108113 && parseInt(code) <= 202004108268){
    //         $('.shop-img img').attr('src','images/11.jpg');
    //         $('.shop-name').html('经销商：山东烟台芝罘区燕安居');
    //         if(parseInt(code)+200 >(202004108113+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //     }else if(parseInt(code) >= 202004108425 && parseInt(code) <= 202004108580){
    //         $('.shop-img img').attr('src','images/12.jpg');
    //         $('.shop-name').html('经销商：新疆鸿德堂');
    //         if(parseInt(code)+200 >(202004108425+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //     }else if(parseInt(code) >= 202004111093 && parseInt(code) <= 202004111872){
    //         $('.shop-img img').attr('src','images/12.jpg');
    //         $('.shop-name').html('经销商：新疆鸿德堂');
    //         if(parseInt(code)+200 >(202004111093+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //     }else if(parseInt(code) >= 202004110157 && parseInt(code) <= 202004110312){
    //         $('.shop-img img').attr('src','images/12.jpg');
    //         $('.shop-name').html('经销商：新疆鸿德堂');
    //         if(parseInt(code)+200 >(202004108425+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //     }else if(parseInt(code) >= 202004108581 && parseInt(code) <= 202004108736){
    //         $('.shop-img img').attr('src','images/13.jpg');
    //         $('.shop-name').html('经销商：晓芹极稀源参茸');
    //         if(parseInt(code)+200 >(202004108581+200)){
    //             $('.people-img').attr('src','images/people_1.png')
    //             $('.people-name').html('次旦多吉');
    //         }
    //     }else {
    //         $('.notice').html('<h3 style="color:#333;">该产品未在食安溯源平台进行认证，请与经销商联系</h3>');
    //         $('.have-box').html('');
    //     }
            
    // }

})
Vue.filter('form_date', function (value) {
    if (!value) return '';
    let date = new Date(value.replace(/[TZ]/g, ' '));

    return date.getFullYear() + '年' + ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)) + '月' + (date.getDate() >= 10 ? date.getDate() : '0' + date.getDate()) + '日 ';
});
// 使用vue
new Vue({
    el: '#app-box',
    data: {
        id:'',
        url:"https://sys.shiansuyuan.com/",
        DataInfo:{
        },
        headInfo:{},
        vedioUrl:'',
        shalterBool:false,
        bannerImg:[],
        noticeText:'经食安溯源平台认证，该产品为源产地正品。',
        bannerList:[],
        haveBool:true,
        goodsName:'',
        goodsInfo:'',
        eatObj:{},
        firstImgArr:[],
        shalterType:'',
        imgUrl:''
    },
    components: {
    },
    methods: {
        GetData: function(){
            return new Promise( resolve => {
	        	var xhr = new XMLHttpRequest();
	            xhr.open("get", this.url+'api/queryMessageByProductCode?productCode='+this.GetQueryValue('code'), true);
	            xhr.setRequestHeader('content-type', 'application/json');
	            xhr.onload =  () => {
	                if (xhr.status == 200) {
	                    var res = JSON.parse(xhr.response);
                        if(res.code && res.data.code != 0){
                            this.DataInfo = res.data.nodeMessageMap;
    
                            for (const key in this.DataInfo) {
                                if (this.DataInfo.hasOwnProperty(key)) {
                                    this.DataInfo[key].forEach((ele,index) => {
                                        if(ele.nodeName){
                                            this.DataInfo[key].splice(index,1);
                                            this.DataInfo[key].unshift(ele);
                                        }
                                        if(ele.columnName == 'product_img'){
                                            ele.imgArr = [];
                                            ele.value.split('|').forEach(item => {
                                                ele.imgArr.push('api/upload/getImg?imgUrl='+encodeURIComponent(item))
                                            })
                                            this.DataInfo[key].splice(index,1);
                                            this.DataInfo[key].push(ele);
                                        }
                                        if(key == 'firstNodeList'){
                                            if(ele.nodeType == 2){
                                                this.firstImgArr.push('api/upload/getImg?imgUrl='+encodeURIComponent(ele.value));
                                            }
                                        }
                                        if(key == 'firstNodeList' && ele.nodeType == 8){
                                            this.headInfo.userImg = 'api/upload/getImg?imgUrl='+encodeURIComponent(ele.userImg);
                                            this.headInfo.name = ele.value;
                                        }
                                        if(key == 'firstNodeList' && ele.nodeType == 4){
                                            this.vedioUrl = 'api/upload/getImg?imgUrl='+encodeURIComponent(ele.value);
                                        }
                                        if(key == 'secondNodeList'){
                                            if(ele.nodeType == 3){
                                                this.goodsInfo = ele.value;
                                            }
                                            if(ele.columnChineseName == '产品名称'){

                                                this.goodsName = ele.value;
                                            }
                                        }
                                    });
                                }
                            }
                            res.data.imgList.forEach(item => {
                                if(item.imgType == 2){
                                    item.imgUrl.split("|").forEach(ele => {
                                        this.bannerList.push('api/upload/getImg?imgUrl='+encodeURIComponent(ele))
                                    })
                                }
                            })
                            this.eatObj = res.data.messageData?res.data.messageData:{};
                            if(this.eatObj.messageDetail){
                                this.eatObj.messageDetail = this.eatObj.messageDetail.replace(/<img src="\/service/g,'<img src="'+ this.url+'api');
                            }
                            if( this.eatObj.messageImg){
                                this.eatObj.messageImg = this.eatObj.messageImg?'api/upload/getImg?imgUrl='+encodeURIComponent(this.eatObj.messageImg):'';
                            }

                        } else{
                            this.noticeText = '该产品未在食安溯源平台进行认证，请与经销商联系。';
                            this.haveBool = false;
                        }
                        resolve();

	                }
	            };
	            xhr.send();
//                $.ajax({
//                    url:this.url+'api/queryMessageByProductCode?productCode='+this.GetQueryValue('code'),
//                    contentType:'application/json',
//                    headers: {
//			        Accept: '*/*',
//			    },
//                    timeout : 3000,
//                    type:'get',
//                    dataType: 'json',
//                    success:(res) => {
//                    	console.log(res)
//                        console.log(res.code == 1)
//                    }
//
//                })
            } )
        },
        ShowBig:function(type,item){
            this.shalterType = type;
            this.shalterBool = true;
            if(type == 'img'){
                this.imgUrl = item;
            }
        },
        CloseShow:function(){
            this.shalterBool = false;
        },
        GetImg: function(){
            $.ajax({
                url:this.url+'api/upload/getImg',
                success:(res) => {
                    console.log(res)
                    if(res.code){
                        
                    }
                }
            })
        },
        GetQueryValue: function (queryName) {
            let query = decodeURI(window.location.href.split('?')[1]);
            let vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] == queryName) { return pair[1]; }
            }
            return false;
        }
    },
    mounted: async function () {
        await this.GetData();
        this.GetImg();
        new Swiper (this.$refs['product-swiper-container'], {
            autoplay:false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        })
        new Swiper (this.$refs['shop-img-swiper-container'], {
            autoplay:true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        })
        new Swiper (this.$refs['info-swiper-container'], {
            autoplay: true,
            loop: true, // 循环模式选项
        })
    }
});
    
function GetQueryValue(queryName) {
    var query = decodeURI(window.location.search.substring(1));
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == queryName) { return pair[1]; }
    }
    return null;
}
