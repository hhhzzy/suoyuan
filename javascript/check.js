$(function(){
    if(location.hash){
        var txt = location.hash.replace(/#/,'');
        $('#sy-code').val(txt);
    }
})