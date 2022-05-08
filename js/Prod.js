let flip = false;

$(".info").click(function(){
    var otherInput = $(this).closest('.prodCard').find('.infoPopOut');
    if (flip == false) {
        otherInput.css("opacity", "1").css("padding-left","60px").css("visability","visible");
    flip = true;
    }
    else {
        otherInput.css("opacity", "0").css("padding-left","0px").css("visability","hidden");
        flip = false;
    }
});

$().ready(function(){
    $('.container').height($('.container').width());
    $('.overlay p').height($('.container').width());
});

window.addEventListener('resize', function(event) {
    $('.container').height($('.container').width());
    $('.overlay p').height($('.container').width());
}, true);
